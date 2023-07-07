import {
  type FieldConfig,
  // list,
  useFieldList,
  useFieldset,
  useForm
} from "@conform-to/react";
import { getFieldsetConstraint, parse } from "@conform-to/zod";
import { type ActionArgs, json } from "@remix-run/node";
import { useFetcher } from "@remix-run/react";
import { useRef } from "react";
import { z } from "zod";

import { SubmitButton } from "~/components/form";
import { formatDateRange } from "~/utils/misc";

const DateVoteSchema = z.object({
  dateOptionId: z.string(),
  rank: z.number()
});

const LocationVoteSchema = z.object({
  locationId: z.string(),
  rank: z.number()
});

const VoteFormSchema = z.object({
  dateVotes: z.array(DateVoteSchema).min(4),
  eventId: z.string(),
  locationVotes: z.array(LocationVoteSchema).min(4),
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
  return json({ status: "success", submission } as const);
}

export function VoteForm({
  event
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

  const [form, { dateVotes, eventId, locationVotes }] = useForm({
    constraint: getFieldsetConstraint(VoteFormSchema),
    defaultValue: { eventId: event.id },
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

  return (
    <voteFetcher.Form action="/resources/vote" method="post" {...form.props}>
      <input name={eventId.name} type="hidden" value={eventId.defaultValue} />
      Vote Form for {event.name}
      <h3 className="text-xl font-semibold leading-tight text-gray-700">
        Choose a date
      </h3>
      <ul>
        {dateVotesList.map((dateVote, index) => (
          <li key={dateVote.key}>
            <DateVoteFieldset
              config={dateVote}
              dateOption={event.dateOptions[index]}
            />
          </li>
        ))}
      </ul>
      <h3 className="text-xl font-semibold leading-tight text-gray-700">
        Choose a location
      </h3>
      <ul>
        {locationVotesList.map((locationVote, index) => (
          <li key={locationVote.key}>
            <LocationVoteFieldset
              config={locationVote}
              locationOption={event.locationOptions[index]}
            />
          </li>
        ))}
      </ul>
      <SubmitButton>Submit</SubmitButton>
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

  return (
    <fieldset ref={ref}>
      <input
        name={dateOptionId.name}
        type="hidden"
        value={dateOptionId.defaultValue}
      />
      <span>{formatDateRange(dateOption.startDate, dateOption.endDate)}</span>
      <label>
        <span>1</span>
        <input name={rank.name} type="radio" value="1" />
      </label>
      <label>
        <span>2</span>
        <input name={rank.name} type="radio" value="2" />
      </label>
      <label>
        <span>3</span>
        <input name={rank.name} type="radio" value="3" />
      </label>
      <label>
        <span>4</span>
        <input name={rank.name} type="radio" value="4" />
      </label>
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
    <fieldset ref={ref}>
      <input
        name={locationId.name}
        type="hidden"
        value={locationId.defaultValue}
      />
      <span>
        {locationOption.location.name} ({locationOption.location.zipCode})
      </span>
      <label>
        <span>1</span>
        <input name={rank.name} type="radio" value="1" />
      </label>
      <label>
        <span>2</span>
        <input name={rank.name} type="radio" value="2" />
      </label>
      <label>
        <span>3</span>
        <input name={rank.name} type="radio" value="3" />
      </label>
      <label>
        <span>4</span>
        <input name={rank.name} type="radio" value="4" />
      </label>
    </fieldset>
  );
}
