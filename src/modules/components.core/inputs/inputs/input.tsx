import { Input as HUIInput } from "@headlessui/react";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

export const Input = forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(function Input({ className, disabled, ...props }, ref) {
  return (
    <HUIInput
      ref={ref}
      disabled={disabled}
      className={twMerge("block w-full input input-ghost", className)}
      {...props}
    />
  );
});
