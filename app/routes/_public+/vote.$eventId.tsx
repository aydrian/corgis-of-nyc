import { type LoaderArgs, Response, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { prisma } from "~/utils/db.server";

import { VoteForm } from "../resources+/vote";

export const loader = async ({ params }: LoaderArgs) => {
  const { eventId } = params;
  const event = await prisma.event.findUnique({
    select: { id: true },
    where: { id: eventId }
  });

  if (!event) {
    return new Response("Not Found", { status: 404 });
  }

  return json({ event });
};

export default function VoteEventId() {
  const { event } = useLoaderData<typeof loader>();
  return (
    <div className="flex w-full flex-col gap-1.5 rounded-md bg-white p-6 drop-shadow-md">
      <h2 className="flex items-center gap-2 text-2xl font-semibold leading-tight text-gray-700">
        Cast your votes
      </h2>
      <VoteForm eventId={event.id} />
    </div>
  );
}
