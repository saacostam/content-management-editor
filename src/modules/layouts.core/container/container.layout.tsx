import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export interface ContainerLayoutProps {
    className?: string;
}

export function ContainerLayout({
    className,
    children
}: PropsWithChildren<ContainerLayoutProps>) {
    return (
        <main
            className={
                twMerge(
                    "max-w-7xl mx-auto",
                    className,
                )
            }
        >
            {children}
        </main>
    )
}
