import { conform, useForm } from "@conform-to/react";
import { getFieldsetConstraint, parse } from "@conform-to/zod";
import { type DataFunctionArgs, json } from "@remix-run/node";
import { useFetcher } from "@remix-run/react";
import { AuthorizationError } from "remix-auth";
import { FormStrategy } from "remix-auth-form";
import { z } from "zod";

import { ErrorList, Field, SubmitButton } from "~/components/form";
import { authenticator } from "~/utils/auth.server";
import { redirectToCookie } from "~/utils/cookies.server";

const LoginFormSchema = z.object({
  email: z.string().min(1, { message: "Email is required" }),
  password: z.string().min(6, "Password must be at least 6 characters long")
});

export const action = async ({ request }: DataFunctionArgs) => {
  const formData = await request.formData();
  const submission = parse(formData, {
    acceptMultipleErrors: () => true,
    schema: LoginFormSchema
  });
  if (!submission.value || submission.intent !== "submit") {
    return json(
      {
        status: "error",
        submission
      } as const,
      { status: 400 }
    );
  }
  const redirectTo =
    (await redirectToCookie.parse(request.headers.get("Cookie"))) ?? "/";

  try {
    await authenticator.authenticate(FormStrategy.name, request, {
      context: { formData },
      successRedirect: redirectTo,
      throwOnError: true
    });
  } catch (error) {
    if (error instanceof AuthorizationError) {
      return json(
        {
          status: "error",
          submission: {
            ...submission,
            error: {
              "": error.message
            }
          }
        } as const,
        { status: 400 }
      );
    }
    throw error;
  }

  return json({ status: "success", submission } as const);
};

export function FormLoginForm({ formError }: { formError?: null | string }) {
  const loginFetcher = useFetcher<typeof action>();

  const [form, fields] = useForm({
    constraint: getFieldsetConstraint(LoginFormSchema),
    id: "form-login-form",
    lastSubmission: loginFetcher.data?.submission,
    onValidate({ formData }) {
      return parse(formData, { schema: LoginFormSchema });
    },
    shouldRevalidate: "onBlur"
  });

  return (
    <loginFetcher.Form
      action="/auth/form"
      method="post"
      {...form.props}
      className="mb-8 flex flex-col sm:mb-4"
    >
      <Field
        errors={fields.email.errors}
        inputProps={conform.input(fields.email)}
        labelProps={{ children: "Email", htmlFor: fields.email.id }}
      />
      <Field
        errors={fields.password.errors}
        inputProps={conform.input(fields.password, { type: "password" })}
        labelProps={{ children: "Password", htmlFor: fields.password.id }}
      />
      <ErrorList errors={formError ? [formError] : []} />
      <ErrorList errors={form.errors} id={form.errorId} />
      <SubmitButton
        className="px-6 py-2"
        state={loginFetcher.state}
        type="submit"
      >
        Login
      </SubmitButton>
    </loginFetcher.Form>
  );
}
