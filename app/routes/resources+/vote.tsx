import {
  type FieldConfig,
  useFieldList,
  useFieldset,
  useForm
} from "@conform-to/react";
import { getFieldsetConstraint, parse } from "@conform-to/zod";
import { type ActionArgs, json } from "@remix-run/node";
import { useFetcher } from "@remix-run/react";
import { useRef } from "react";
import { z } from "zod";

import { ErrorList, SubmitButton } from "~/components/form";
import { Ballot, BallotHeader } from "~/components/ranked-choice";
import { prisma } from "~/utils/db.server";
import { formatDateRange, getOrdinal } from "~/utils/misc";

const DateVoteSchema = z.object({
  dateOptionId: z.string(),
  rank: z.coerce.number()
});

const LocationVoteSchema = z.object({
  locationId: z.string(),
  rank: z.coerce.number()
});

const VoteFormSchema = z.object({
  dateVotes: z
    .array(DateVoteSchema)
    .min(4)
    .superRefine((val, ctx) => {
      val.forEach((element, index) => {
        if (
          val.findIndex(
            (item) =>
              item.rank === element.rank &&
              item.dateOptionId !== element.dateOptionId
          ) !== -1
        ) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: `Cannot have multiple ${element.rank}${getOrdinal(
              element.rank
            )} choices`,
            path: [index, "rank"]
          });
        }
      });
      return z.never;
    }),
  eventId: z.string(),
  locationVotes: z
    .array(LocationVoteSchema)
    .min(4)
    .superRefine((val, ctx) => {
      val.forEach((element, index) => {
        if (
          val.findIndex(
            (item) =>
              item.rank === element.rank &&
              item.locationId !== element.locationId
          ) !== -1
        ) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: `Cannot have multiple ${element.rank}${getOrdinal(
              element.rank
            )} choices`,
            path: [index, "rank"]
          });
        }
      });
      return z.never;
    }),
  memberId: z.string()
});

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();
  const submission = parse(formData, {
    acceptMultipleErrors: () => true,
    schema: VoteFormSchema
  });
  if (!submission.value) {
    return json(
      {
        status: "error",
        submission
      } as const,
      { status: 400 }
    );
  }
  if (submission.intent !== "submit") {
    return json({ status: "idle", submission } as const);
  }

  const { dateVotes, eventId, locationVotes, memberId } = submission.value;
  const dateUpserts = dateVotes.map(({ dateOptionId, rank }) => {
    return prisma.dateVote.upsert({
      create: { dateOptionId, eventId, memberId, rank },
      update: { rank },
      where: {
        eventId_memberId_dateOptionId: {
          dateOptionId,
          eventId,
          memberId
        }
      }
    });
  });
  const locationUpserts = locationVotes.map(({ locationId, rank }) => {
    return prisma.locationVote.upsert({
      create: { eventId, locationId, memberId, rank },
      update: { rank },
      where: {
        eventId_memberId_locationId: {
          eventId,
          locationId,
          memberId
        }
      }
    });
  });

  await prisma.$transaction([...dateUpserts, ...locationUpserts]);

  return json({ status: "success", submission } as const);
}

export function VoteForm({
  event,
  member
}: {
  event: {
    dateOptions: { endDate: string; id: string; startDate: string }[];
    id: string;
    locationOptions: {
      location: { name: string; zipCode: string };
      locationId: string;
    }[];
    name: string;
  };
  member: { id: string };
}) {
  const voteFetcher = useFetcher<typeof action>();

  const defaultDates = event.dateOptions.map((option) => {
    return {
      dateOptionId: option.id
    };
  });

  const defaultLocations = event.locationOptions.map((option) => {
    return {
      locationId: option.locationId
    };
  });

  const [form, { dateVotes, eventId, locationVotes, memberId }] = useForm({
    constraint: getFieldsetConstraint(VoteFormSchema),
    defaultValue: { eventId: event.id, memberId: member.id },
    id: "vote-form",
    lastSubmission: voteFetcher.data?.submission,
    onValidate({ formData }) {
      return parse(formData, { schema: VoteFormSchema });
    },
    shouldRevalidate: "onBlur"
  });
  const dateVotesList = useFieldList(form.ref, {
    ...dateVotes,
    defaultValue: dateVotes.defaultValue ?? defaultDates
  });
  const locationVotesList = useFieldList(form.ref, {
    ...locationVotes,
    defaultValue: locationVotes.defaultValue ?? defaultLocations
  });

  const dateVotesErrors = [
    ...new Set(
      dateVotesList.map(({ error }) => {
        return error;
      })
    )
  ];

  const locationVotesErrors = [
    ...new Set(
      locationVotesList.map(({ error }) => {
        return error;
      })
    )
  ];

  return (
    <voteFetcher.Form action="/resources/vote" method="post" {...form.props}>
      <input name={eventId.name} type="hidden" value={eventId.defaultValue} />
      <input name={memberId.name} type="hidden" value={memberId.defaultValue} />
      <h3 className="mb-2 text-xl font-semibold leading-tight text-gray-700">
        Choose a date
      </h3>
      <Ballot>
        <BallotHeader numChoices={4} />
        {dateVotesList.map((dateVote, index) => (
          <li key={dateVote.key}>
            <DateVoteFieldset
              config={dateVote}
              dateOption={event.dateOptions[index]}
            />
          </li>
        ))}
      </Ballot>
      <ErrorList errors={dateVotesErrors} />
      <h3 className="mb-2 text-xl font-semibold leading-tight text-gray-700">
        Choose a location
      </h3>
      <Ballot>
        <BallotHeader numChoices={4} />
        {locationVotesList.map((locationVote, index) => (
          <li key={locationVote.key}>
            <LocationVoteFieldset
              config={locationVote}
              locationOption={event.locationOptions[index]}
            />
          </li>
        ))}
      </Ballot>
      <ErrorList errors={locationVotesErrors} />
      <ErrorList errors={form.errors} id={form.errorId} />
      {voteFetcher.data?.status === "success" ? (
        <div className="font-bold text-green-600">Success</div>
      ) : null}
      <SubmitButton state={voteFetcher.state} submittingText="Submitting">
        Submit
      </SubmitButton>
    </voteFetcher.Form>
  );
}

function DateVoteFieldset({
  config,
  dateOption
}: {
  config: FieldConfig<z.input<typeof DateVoteSchema>>;
  dateOption: { endDate: string; id: string; startDate: string };
}) {
  const ref = useRef<HTMLFieldSetElement>(null);
  const { dateOptionId, rank } = useFieldset(ref, config);
  rank.errors &&
    console.log("rank", {
      error: rank.error,
      errors: rank.errors,
      name: rank.name
    });

  return (
    <fieldset className="flex justify-between" ref={ref}>
      <input
        name={dateOptionId.name}
        type="hidden"
        value={dateOptionId.defaultValue}
      />
      <span className="grow border-b border-b-blue-600 p-1">
        {formatDateRange(dateOption.startDate, dateOption.endDate)}
      </span>
      <div className="flex">
        <label className="flex w-14 items-center justify-center border-b border-l border-blue-600 px-2">
          <span className="sr-only">1</span>
          <input
            className={
              rank.errors ? "checked:ring checked:ring-red-600" : undefined
            }
            name={rank.name}
            type="radio"
            value="1"
          />
        </label>
        <label className="flex w-14 items-center justify-center border-b border-l border-blue-600 px-2">
          <span className="sr-only">2</span>
          <input
            className={
              rank.errors ? "checked:ring checked:ring-red-600" : undefined
            }
            name={rank.name}
            type="radio"
            value="2"
          />
        </label>
        <label className="flex w-14 items-center justify-center border-b border-l border-blue-600 px-2">
          <span className="sr-only">3</span>
          <input
            className={
              rank.errors ? "checked:ring checked:ring-red-600" : undefined
            }
            name={rank.name}
            type="radio"
            value="3"
          />
        </label>
        <label className="flex w-14 items-center justify-center border-b border-l border-blue-600 px-2">
          <span className="sr-only">4</span>
          <input
            className={
              rank.errors ? "checked:ring checked:ring-red-600" : undefined
            }
            name={rank.name}
            type="radio"
            value="4"
          />
        </label>
      </div>
    </fieldset>
  );
}

function LocationVoteFieldset({
  config,
  locationOption
}: {
  config: FieldConfig<z.input<typeof LocationVoteSchema>>;
  locationOption: {
    location: { name: string; zipCode: string };
    locationId: string;
  };
}) {
  const ref = useRef<HTMLFieldSetElement>(null);
  const { locationId, rank } = useFieldset(ref, config);

  return (
    <fieldset className="flex justify-between" ref={ref}>
      <input
        name={locationId.name}
        type="hidden"
        value={locationId.defaultValue}
      />
      <span className="grow border-b border-b-blue-600 p-1">
        {locationOption.location.name} ({locationOption.location.zipCode})
      </span>
      <div className="flex">
        <label className="flex w-14 items-center justify-center border-b border-l border-blue-600 px-2">
          <span className="sr-only">1</span>
          <input
            className={
              rank.errors ? "checked:ring checked:ring-red-600" : undefined
            }
            name={rank.name}
            type="radio"
            value="1"
          />
        </label>
        <label className="flex w-14 items-center justify-center border-b border-l border-blue-600 px-2">
          <span className="sr-only">2</span>
          <input
            className={
              rank.errors ? "checked:ring checked:ring-red-600" : undefined
            }
            name={rank.name}
            type="radio"
            value="2"
          />
        </label>
        <label className="flex w-14 items-center justify-center border-b border-l border-blue-600 px-2">
          <span className="sr-only">3</span>
          <input
            className={
              rank.errors ? "checked:ring checked:ring-red-600" : undefined
            }
            name={rank.name}
            type="radio"
            value="3"
          />
        </label>
        <label className="flex w-14 items-center justify-center border-b border-l border-blue-600 px-2">
          <span className="sr-only">4</span>
          <input
            className={
              rank.errors ? "checked:ring checked:ring-red-600" : undefined
            }
            name={rank.name}
            type="radio"
            value="4"
          />
        </label>
      </div>
    </fieldset>
  );
}
