import { twMerge } from "tailwind-merge";
import { IconProps } from "../types";
import { ICON_COMMON_CLASSES } from "../constants";

export function CheckIcon({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      aria-hidden="true"
      className={twMerge(ICON_COMMON_CLASSES, className)}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 12.75 6 6 9-13.5"
      />
    </svg>
  );
}
