import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";

import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { prisma } from "~/utils/db.server";

export const meta: MetaFunction = () => {
  return [
    { title: "Corgis of NYC: Welcome" },
    { content: "Welcome to Corgis of NYC", name: "description" }
  ];
};

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const { memberId } = params;

  const member = await prisma.member.findUnique({
    select: { corgis: { select: { name: true } }, firstName: true },
    where: { id: memberId }
  });

  if (!member) {
    throw new Response("Not Found", {
      status: 404
    });
  }

  return json({ member });
};

export default function Welcome() {
  const { member } = useLoaderData<typeof loader>();
  const getCorgiNames = (corgis: typeof member.corgis) => {
    if (corgis.length === 1) {
      return ` and ${corgis[0].name}`;
    }
    const len = corgis.length;
    return (
      ", " +
      corgis
        .map((corgi, index) =>
          index === len - 1 ? `and ${corgi.name}` : corgi.name
        )
        .join(", ")
    );
  };
  return (
    <div className="flex w-full flex-col gap-1.5 rounded-md bg-white p-6 drop-shadow-md">
      <h2 className="flex items-center gap-2 text-2xl font-semibold leading-tight text-gray-700">
        Welcome {member.firstName}!
      </h2>
      <p>
        We're excited to have you{getCorgiNames(member.corgis)} join our
        community. Be sure to follow us on{" "}
        <a
          className="text-blue-700 hover:underline"
          href="https://www.instagram.com/corgis_of_nyc/"
        >
          Instagram
        </a>{" "}
        and check back for fun events.
      </p>
    </div>
  );
}
