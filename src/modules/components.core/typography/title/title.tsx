import { PropsWithChildren } from "react"
import { twMerge } from "tailwind-merge"

export interface HeaderProps{
    className?: string
}

export function Title({
    className,
    children,
}: PropsWithChildren<HeaderProps>){
    return <h1 className={twMerge(
        "text-xl text-primary font-bold",
        className
    )}>{children}</h1>
}
