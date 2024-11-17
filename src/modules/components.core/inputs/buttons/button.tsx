import { Button as HUIButton } from "@headlessui/react";
import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export type ButtonVariant = "primary" | "ghost" | "accent";

export interface ButtonProps {
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  type?: "submit" | "reset" | "button";
  variant?: ButtonVariant;
}

export function Button({
  className,
  children,
  disabled,
  onClick,
  type,
  variant: _variant,
}: PropsWithChildren<ButtonProps>) {
  const variant: ButtonVariant = _variant ?? "primary";

  return (
    <HUIButton
      className={twMerge(
        "btn btn-sm",
        variant === "primary"
          ? "btn-primary"
          : variant === "accent"
            ? "btn-accent"
            : "btn-ghost",
        className,
      )}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </HUIButton>
  );
}
