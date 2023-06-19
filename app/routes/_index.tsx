import type { V2_MetaFunction } from "@remix-run/node";

import Header from "~/components/header";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Corgis of NYC: NYC Corgi Meetups" },
    { content: "Welcome to Corgis of NYC", name: "description" }
  ];
};

export default function Index() {
  return (
    <div className="flex min-h-screen min-w-full items-center justify-center bg-gradient-to-br from-sky-400 via-rose-400 to-lime-400 px-12 py-6">
      <Header className="md:max-w-max md:flex-col md:gap-1.5" />
    </div>
  );
}
