import { PropsWithChildren } from "react";
import { Paragraph, Title } from "../../components.core";
import { PencilIcon } from "../../icons.core";

export function AppShell({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}

export function Header() {
  return (
    <header className="border-b-2 border-gray-200 p-4 mb-8 bg-base-200 text-center ">
      <Title className="text-base-content">
        <PencilIcon /> Content Management Editor
      </Title>
      <Paragraph className="m-0">using React</Paragraph>
    </header>
  );
}
