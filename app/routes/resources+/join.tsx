import {
  type FieldConfig,
  conform,
  list,
  useFieldList,
  useFieldset,
  useForm
} from "@conform-to/react";
import { getFieldsetConstraint, parse } from "@conform-to/zod";
import { type DataFunctionArgs, json, redirect } from "@remix-run/node";
import { useFetcher } from "@remix-run/react";
import { format } from "date-fns";
import { useRef } from "react";
import { z } from "zod";

import { CheckboxField, InputField, SubmitButton } from "~/components/form.tsx";
import { Button } from "~/components/ui/button.tsx";
import { prisma } from "~/utils/db.server.ts";
import { cn } from "~/utils/misc.ts";

const CorgiSchema = z.object({
  birthDate: z
    .string()
    .transform((value) => (value ? new Date(value) : undefined))
    .pipe(
      z
        .date()
        .max(new Date(), { message: "Date should be before today" })
        .optional()
    ),
  instagram: z.string().optional(),
  isVisible: z
    .string()
    .default("")
    .transform((value) => value === "on"),
  name: z.string().min(1, { message: "Name is required" })
});

const JoinFormSchema = z.object({
  corgis: z.array(CorgiSchema).min(1),
  email: z.string().min(1, { message: "Email is required" }).email(),
  firstName: z.string().min(1, { message: "First Name is required" }),
  lastName: z.string().min(1, { message: "Last Name is required" }),
  phoneNumber: z
    .string()
    .min(5, { message: "Phone number is required" })
    .max(15, "Phone number should not be longer than 15 characters"),
  readCOC: z
    .string({
      required_error: "You must read and agree to the Code of Conduct."
    })
    .transform((value) => value === "on"),
  zipCode: z.string().min(5, { message: "Zip Code is required" })
});

export const action = async ({ request }: DataFunctionArgs) => {
  const formData = await request.formData();
  const submission = parse(formData, {
    acceptMultipleErrors: () => true,
    schema: JoinFormSchema
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

  const { corgis, ...data } = submission.value;

  const member = await prisma.member.create({
    data: {
      ...data,
      corgis: {
        create: corgis
      }
    },
    select: { id: true }
  });
  return redirect(`/join/welcome/${member.id}`);
};

export function JoinForm({ className }: { className?: string }) {
  const joinFetcher = useFetcher<typeof action>();

  const [
    form,
    { corgis, email, firstName, lastName, phoneNumber, readCOC, zipCode }
  ] = useForm({
    constraint: getFieldsetConstraint(JoinFormSchema),
    id: "join-form",
    lastSubmission: joinFetcher.data?.submission,
    onValidate({ formData }) {
      return parse(formData, { schema: JoinFormSchema });
    },
    shouldRevalidate: "onBlur"
  });
  const corgiList = useFieldList(form.ref, corgis);

  return (
    <joinFetcher.Form
      action="/resources/join"
      method="post"
      {...form.props}
      className={cn("flex flex-col gap-1.5", className)}
    >
      <h3 className="mb-1.5 text-xl font-semibold leading-tight text-gray-700">
        Tell us about yourself
      </h3>
      <div className="md:flex md:w-full md:justify-evenly md:gap-4">
        <InputField
          className="md:grow"
          errors={firstName.errors}
          inputProps={conform.input(firstName)}
          labelProps={{ children: "First Name", htmlFor: firstName.id }}
        />
        <InputField
          className="md:grow"
          errors={lastName.errors}
          inputProps={conform.input(lastName)}
          labelProps={{ children: "Last Name", htmlFor: lastName.id }}
        />
      </div>
      <div className="md:flex md:w-full md:justify-evenly md:gap-4">
        <InputField
          className="md:grow"
          errors={email.errors}
          inputProps={conform.input(email, { type: "email" })}
          labelProps={{ children: "Email", htmlFor: email.id }}
        />
        <InputField
          labelProps={{
            children: "Phone Number",
            htmlFor: phoneNumber.id
          }}
          className="md:grow"
          errors={phoneNumber.errors}
          inputProps={conform.input(phoneNumber, { type: "tel" })}
        />
        <InputField
          errors={zipCode.errors}
          inputProps={conform.input(zipCode)}
          labelProps={{ children: "Zip Code", htmlFor: zipCode.id }}
        />
      </div>
      <h3 className="mb-1.5 text-xl font-semibold leading-tight text-gray-700">
        Tell us about your {corgiList.length > 1 ? "corgis" : "corgi"}
      </h3>
      <ul>
        {corgiList.map((corgi, index) => (
          <li className="relative" key={corgi.key}>
            <CorgiFieldset {...corgi} />
            {corgiList.length > 1 ? (
              <Button
                className="absolute bottom-2 right-2 text-xs"
                size="sm"
                variant="destructive"
                {...list.remove(corgis.name, { index })}
              >
                Remove
              </Button>
            ) : null}
          </li>
        ))}
      </ul>
      <Button
        className="mb-3"
        size="sm"
        variant="secondary"
        {...list.append(corgis.name)}
      >
        I have another corgi
      </Button>
      <CheckboxField
        labelProps={{
          children: (
            <>
              I have read and agree to the{" "}
              <a
                className="text-blue-600 underline-offset-4 hover:underline"
                href="./coc"
                target="_blank"
              >
                Code of Conduct
              </a>
              .
            </>
          ),
          htmlFor: readCOC.id
        }}
        checkboxProps={conform.input(readCOC)}
        errors={readCOC.errors}
      />
      <SubmitButton>Submit</SubmitButton>
    </joinFetcher.Form>
  );
}

function CorgiFieldset(config: FieldConfig<z.input<typeof CorgiSchema>>) {
  const ref = useRef<HTMLFieldSetElement>(null);
  const { birthDate, instagram, isVisible, name } = useFieldset(ref, config);

  return (
    <fieldset className="rounded-md border border-input p-2" ref={ref}>
      <InputField
        errors={name.errors}
        inputProps={conform.input(name)}
        labelProps={{ children: "Name", htmlFor: name.id }}
      />
      <div className="md:flex md:w-full md:justify-evenly md:gap-4">
        <InputField
          inputProps={{
            ...conform.input(birthDate, { type: "date" }),
            max: format(new Date(), "yyyy-MM-dd")
          }}
          labelProps={{
            children: "Birth Date",
            htmlFor: birthDate.id
          }}
          className="md:grow"
          errors={birthDate.errors}
        />
        <InputField
          className="md:grow"
          errors={instagram.errors}
          inputProps={conform.input(instagram)}
          labelProps={{ children: "Instagram", htmlFor: instagram.id }}
        />
      </div>
      <CheckboxField
        labelProps={{
          children: "Show corgi in catalog?",
          htmlFor: isVisible.id
        }}
        checkboxProps={conform.input(isVisible)}
        errors={isVisible.errors}
      />
    </fieldset>
  );
}
