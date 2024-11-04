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
      className={twMerge(
        "block w-full rounded-md border-0 p-2 text-base ring-1 ring-inset ring-base-300 placeholder:text-base-100 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm/6",
        className,
      )}
      {...props}
    />
  );
});
