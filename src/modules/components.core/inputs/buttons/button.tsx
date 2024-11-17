import { Button as HUIButton } from "@headlessui/react";
import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export type ButtonType = "primary" | "ghost" | "accent";

export interface ButtonProps {
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  type?: ButtonType;
}

export function Button({
  className,
  children,
  disabled,
  onClick,
  type: _type,
}: PropsWithChildren<ButtonProps>) {
  const type: ButtonType = _type ?? "primary";

  return (
    <HUIButton
      className={twMerge(
        "btn btn-sm",
        type === "primary"
          ? "btn-primary"
          : type === "accent"
            ? "btn-accent"
            : "btn-ghost",
        className,
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </HUIButton>
  );
}
