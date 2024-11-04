import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export interface ParagraphProps {
  className?: string;
}

export function Paragraph({
  className,
  children,
}: PropsWithChildren<ParagraphProps>) {
  return <p className={twMerge("text-sm/6 mb-4", className)}>{children}</p>;
}
