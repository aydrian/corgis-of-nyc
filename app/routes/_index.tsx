import type { V2_MetaFunction } from "@remix-run/node";

import { Instagram } from "~/components/brand-logos";
import logo from "~/images/logo.png";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Corgis of NYC: NYC Corgi Meetups" },
    { content: "Welcome to Corgis of NYC", name: "description" }
  ];
};

export default function Index() {
  return (
    <div className="flex min-h-screen min-w-full items-center justify-center bg-gradient-to-br from-sky-400 via-rose-400 to-lime-400">
      <div className="flex flex-col items-center justify-center gap-1.5 rounded-md bg-white p-12">
        <img alt="Corgis of NYC" src={logo} />
        <h1 className="text-3xl font-bold leading-tight text-gray-900">
          NYC Corgi Meetups
        </h1>
        <h2 className="text-2xl font-semibold leading-tight text-gray-700">
          Follow us on Instagram
        </h2>
        <h3 className="flex gap-2 text-xl font-semibold leading-tight text-gray-700">
          <Instagram className="h-8 w-auto text-inherit" />
          <a
            className="text-blue-700 hover:underline"
            href="https://www.instagram.com/corgis_of_nyc/"
          >
            @corgis_of_nyc
          </a>
        </h3>
      </div>
    </div>
  );
}
