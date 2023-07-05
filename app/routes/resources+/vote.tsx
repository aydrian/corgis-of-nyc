import type { ActionArgs } from "@remix-run/node";

export async function action({ request }: ActionArgs) {
  return null;
}

export function VoteForm({ eventId }: { eventId: string }) {
  return <div>Vote Form for {eventId}</div>;
}
