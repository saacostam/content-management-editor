import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import { TContentBlockVariety } from "../../../types";
import { CONTENT_BLOCK_VARIETIES } from "../../../constants";

export interface EditContentBlockLayoutProps {
  formType: TContentBlockVariety;
  setFormType: (formType: TContentBlockVariety) => void;
}

export function EditContentBlockLayout({
  children,
  formType,
  setFormType,
}: PropsWithChildren<EditContentBlockLayoutProps>) {
  return (
    <>
      <nav role="tablist" className="tabs block tabs-bordered">
        {CONTENT_BLOCK_VARIETIES.map((variety) => {
          const isSelected = variety === formType;

          return (
            <button
              className={twMerge("tab w-32", isSelected ? "tab-active" : "")}
              key={variety}
              onClick={() => setFormType(variety)}
              role="tab"
            >
              {isSelected && (
                <span className="badge badge-accent badge-xs absolute left-2" />
              )}
              {variety}
            </button>
          );
        })}
      </nav>
      <section role="tabpanel" className="my-2">
        {children}
      </section>
    </>
  );
}
