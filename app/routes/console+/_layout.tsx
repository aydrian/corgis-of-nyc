import { Outlet } from "@remix-run/react";

import { Instagram } from "~/components/brand-logos";
import { Button } from "~/components/ui/button";
import logo from "~/images/logo.png";

export default function ConsoleLayout() {
  return (
    <div className="flex min-h-screen min-w-full flex-col justify-start gap-4 bg-gradient-to-br from-sky-400 via-rose-400 to-lime-400 p-4 md:px-12 md:pt-6 lg:px-36">
      <header className="flex w-full items-center justify-between gap-1.5 rounded-md bg-white p-6 drop-shadow-md md:flex-row md:gap-4">
        <div className="flex items-center">
          <img alt="Corgis of NYC" className="h-16" src={logo} />
          <h1 className="text-2xl font-bold leading-tight text-gray-900 sm:text-3xl md:text-5xl">
            Corgi Console
          </h1>
        </div>
        <div>
          <form action="/auth/logout" method="get">
            <Button>Log out</Button>
          </form>
        </div>
      </header>
      <main className="flex grow">
        <Outlet />
      </main>
      <footer className="flex items-center justify-between rounded-md bg-black p-4 text-sm font-bold text-white">
        <div>
          <a
            className="flex items-center gap-2 underline-offset-4 hover:underline"
            href="https://www.instagram.com/corgis_of_nyc/"
            rel="noreferrer"
            target="_blank"
          >
            <Instagram className="h-6 w-auto text-inherit" />
            @corgis_of_nyc
          </a>
        </div>
      </footer>
    </div>
  );
}
