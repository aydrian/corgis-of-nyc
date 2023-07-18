import type { LoaderArgs } from "@remix-run/node";

import { requireUserId } from "~/utils/auth.server";

export async function loader({ request }: LoaderArgs) {
  return await requireUserId(request);
}

export default function Index() {
  return (
    <div>
      <h1>Welcome to the Corgi Console</h1>
    </div>
  );
}
