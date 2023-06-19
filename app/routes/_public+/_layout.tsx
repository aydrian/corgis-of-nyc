import { Link, Outlet } from "@remix-run/react";

import { Instagram } from "~/components/brand-logos";
import Header from "~/components/header";

export default function Layout() {
  return (
    <div className="flex min-h-screen min-w-full flex-col justify-start gap-4 bg-gradient-to-br from-sky-400 via-rose-400 to-lime-400 p-4 md:px-12 md:pt-6">
      <Header />
      <main className="flex grow">
        <Outlet />
      </main>
      <footer className="rounded-md bg-black">
        <ul className="mx-auto flex items-center justify-between p-4 text-sm font-bold text-white">
          <li>
            <a
              className="flex items-center gap-2 underline-offset-4 hover:underline"
              href="https://www.instagram.com/corgis_of_nyc/"
              rel="noreferrer"
              target="_blank"
            >
              <Instagram className="h-6 w-auto text-inherit" />
              @corgis_of_nyc
            </a>
          </li>
          <li>
            <Link className="underline-offset-4 hover:underline" to="/coc">
              Code of Conduct
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
}
