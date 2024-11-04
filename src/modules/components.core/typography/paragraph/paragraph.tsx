import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export interface ParagraphProps {
  className?: string;
}

export function Paragraph({
  className,
  children,
}: PropsWithChildren<ParagraphProps>) {
  return <p className={twMerge("text-sm/6", className)}>{children}</p>;
}
