import { PropsWithChildren } from "react";
import { Title } from "../../components.core";

export function AppShell({
    children,
}: PropsWithChildren){
    return (
        <>
            <Header />
            <main>{children}</main>
        </>
    )
}

export function Header(){
    return (
        <header className="border-b-2 border-gray-200 p-4 mb-8 bg-base-200">
            <Title className="text-center text-base-content">Content Management Editor | React</Title>
        </header>
    )
}
