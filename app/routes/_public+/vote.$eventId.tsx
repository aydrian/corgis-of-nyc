import type { LoaderArgs, V2_MetaFunction } from "@remix-run/node";

import { Response, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { prisma } from "~/utils/db.server";

import { VoteForm } from "../resources+/vote";

export const loader = async ({ params }: LoaderArgs) => {
  const { eventId } = params;
  const event = await prisma.event.findUnique({
    select: {
      dateOptions: {
        orderBy: { startDate: "asc" },
        select: { endDate: true, id: true, startDate: true }
      },
      id: true,
      locationOptions: {
        select: {
          location: {
            select: {
              name: true,
              website: true,
              zipCode: true,
              zipData: { select: { borough: true, neighborhood: true } }
            }
          },
          locationId: true
        }
      },
      name: true
    },
    where: { id: eventId }
  });

  if (!event) {
    return new Response("Not Found", { status: 404 });
  }

  const member = { id: "3023392b-01b0-47d9-9c31-54d0ec4ac331" };

  return json({ event, member });
};

export const meta: V2_MetaFunction<typeof loader> = ({ data }) => [
  {
    title: `Corgis of NYC: Cast your votes for ${data.event.name}`
  }
];

export default function VoteEventId() {
  const { event, member } = useLoaderData<typeof loader>();
  return (
    <div className="flex w-full flex-col gap-1.5 rounded-md bg-white p-6 drop-shadow-md">
      <h2 className="mb-2 flex items-center gap-2 text-2xl font-semibold leading-tight text-gray-700">
        Cast your votes for {event.name}
      </h2>
      <VoteForm event={event} member={member} />
    </div>
  );
}
