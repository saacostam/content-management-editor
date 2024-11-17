import { PropsWithChildren, ReactNode } from "react";

export interface ContentBlockLayoutProps {
  mainCta: ReactNode;
}

export function ContentBlockLayout({
  mainCta,
  children,
}: PropsWithChildren<ContentBlockLayoutProps>) {
  return (
    <section className="flex gap-2">
      {mainCta}
      {children}
    </section>
  );
}
