import type { V2_MetaFunction } from "@remix-run/node";

import { JoinForm } from "../resources+/join";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Corgis of NYC: Join" },
    { content: "Welcome to Corgis of NYC", name: "description" }
  ];
};

export default function Join() {
  return (
    <div className="flex w-full flex-col gap-1.5 rounded-md bg-white p-6 drop-shadow-md">
      <h2 className="flex items-center gap-2 text-2xl font-semibold leading-tight text-gray-700">
        Join the pack
      </h2>
      <JoinForm className="my-2" />
    </div>
  );
}
