import { Instagram } from "~/components/brand-logos";
import logo from "~/images/logo.png";
import { cn } from "~/utils/misc";

export default function Header({ className }: { className?: string }) {
  return (
    <header
      className={cn(
        "flex w-full flex-col items-center justify-center gap-1.5 rounded-md bg-white p-6 drop-shadow-md md:flex-row md:gap-4",
        className
      )}
    >
      <img alt="Corgis of NYC" className="h-40" src={logo} />
      <div className="flex flex-col items-center justify-center gap-1.5">
        <h1 className="text-center text-2xl sm:text-3xl font-bold leading-tight text-gray-900">
          NYC Corgi Meetups
        </h1>
        <h2 className="text-xl sm:text-2xl font-semibold leading-tight text-gray-700 text-center">
          Follow us on Instagram
        </h2>
        <h3 className="flex items-center gap-2 text-lg sm:text-xl font-semibold leading-tight text-gray-700">
          <Instagram className="h-8 w-auto text-inherit" />
          <a
            className="text-blue-700 hover:underline"
            href="https://www.instagram.com/corgis_of_nyc/"
          >
            @corgis_of_nyc
          </a>
        </h3>
      </div>
    </header>
  );
}
