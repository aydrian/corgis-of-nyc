import { getOrdinal } from "~/utils/misc";

export function Ballot({ children }: { children: React.ReactNode }) {
  return (
    <ul className="mb-4 max-w-max rounded-t-md border border-b-0 border-blue-600">
      {children}
    </ul>
  );
}

export function BallotHeader({ numChoices }: { numChoices: number }) {
  const choices = [...Array(numChoices).keys()];
  return (
    <li className="flex justify-between bg-blue-600 text-white">
      <div></div>
      <div className="flex uppercase">
        {choices.map((item) => (
          <div className="flex w-14 flex-col items-center px-2" key={item}>
            <div className="text-2xl font-black leading-tight">
              {item + 1}
              <sup className="top-[-.75em] text-[50%]">
                {getOrdinal(item + 1)}
              </sup>
            </div>
            <div className="text-xs font-light leading-snug">choice</div>
          </div>
        ))}
      </div>
    </li>
  );
}
