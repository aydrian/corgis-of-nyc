import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDateRange(start: Date | string, end: Date | string) {
  const startDate = typeof start === "string" ? new Date(start) : start;
  const endDate = typeof end === "string" ? new Date(end) : end;

  const dateTimeFormat = new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    month: "short",
    // timeZoneName: "short",
    weekday: "short"
    // year: "numeric"
  });
  return dateTimeFormat.formatRange(startDate, endDate);
}
