import { type DataFunctionArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import Header from "~/components/header";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { FormLoginForm } from "~/routes/auth.form";
import { authenticator } from "~/utils/auth.server";
import { redirectToCookie } from "~/utils/cookies.server";
import { commitSession, getSession } from "~/utils/session.server";

export const loader = async ({ request }: DataFunctionArgs) => {
  await authenticator.isAuthenticated(request, {
    successRedirect: "/"
  });
  const url = new URL(request.url);
  const redirectTo = url.searchParams.get("redirectTo");
  const loginMessage = url.searchParams.get("loginMessage");

  let headers = new Headers();
  if (redirectTo) {
    headers.append("Set-Cookie", await redirectToCookie.serialize(redirectTo));
  }
  const session = await getSession(request.headers.get("cookie"));
  const error = session.get(authenticator.sessionErrorKey);
  let errorMessage: null | string = null;
  if (typeof error?.message === "string") {
    errorMessage = error.message;
  }
  headers.append("Set-Cookie", await commitSession(session));

  return json({ formError: errorMessage, loginMessage }, { headers });
};

export default function Login() {
  const data = useLoaderData<typeof loader>();
  return (
    <main className="flex min-h-[100svh] flex-col bg-gradient-to-br from-sky-400 via-rose-400 to-lime-400 md:flex-row px-12 py-6 gap-8 md:gap-0">
      <div className="flex items-start justify-center md:items-center md:pt-0 md:basis-1/2">
      <Header className="md:max-w-max md:flex-col md:gap-1.5" />
      </div>
      <div className="flex basis-3/4 items-start justify-center md:items-center">
        <Card className="w-full md:min-w-max md:max-w-md">
          <CardHeader>
            <CardTitle className="text-crl-deep-purple">Login</CardTitle>
          </CardHeader>
          <CardContent>
            {data.loginMessage ? (
              <div className="text-sm text-red-500">{data.loginMessage}</div>
            ) : null}
            <FormLoginForm formError={data.formError} />
          </CardContent>
        </Card></div>
    </main>
  );
}
