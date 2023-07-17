import { cn, getOrdinal } from "~/utils/misc";

export function Ballot({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <ul
      className={cn(
        "mb-4 max-w-max rounded-t-md border border-b-0 border-blue-600",
        className
      )}
    >
      {children}
    </ul>
  );
}

export function BallotHeader({ numChoices }: { numChoices: number }) {
  const [, ...choices] = [...Array(numChoices + 1).keys()];
  return (
    <li className="flex justify-between bg-blue-600 text-white">
      <div></div>
      <div className="flex uppercase">
        {choices.map((item) => (
          <div
            className="flex w-10 flex-col items-center px-1 sm:w-14 sm:px-2"
            key={item}
          >
            <div className="text-xl font-black leading-tight sm:text-2xl">
              {item}
              <sup className="top-[-.75em] text-[50%]">{getOrdinal(item)}</sup>
            </div>
            <div className="text-[.5rem] font-light leading-snug sm:text-xs">
              choice
            </div>
          </div>
        ))}
      </div>
    </li>
  );
}
