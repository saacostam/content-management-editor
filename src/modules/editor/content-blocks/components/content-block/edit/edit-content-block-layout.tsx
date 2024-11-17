import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import { TContentBlockVariety } from "../../../types";
import { CONTENT_BLOCK_VARIETIES } from "../../../constants";
import { Button } from "../../../../../components.core";
import { XIcon } from "../../../../../icons.core";
import { TUseEditorReducerActionType, useEditor } from "../../../../editor";
import { ContentBlockLayout } from "../core";

export interface EditContentBlockLayoutProps {
  formType: TContentBlockVariety;
  setFormType: (formType: TContentBlockVariety) => void;
}

export function EditContentBlockLayout({
  children,
  formType,
  setFormType,
}: PropsWithChildren<EditContentBlockLayoutProps>) {
  const { editorDispatch } = useEditor();

  const exitEditMode = () => {
    editorDispatch({
      type: TUseEditorReducerActionType.SET_EDITABLE_CONTENT_BLOCK,
      payload: {
        contentBlockId: null,
      },
    });
  };

  return (
    <ContentBlockLayout
      mainCta={
        <Button
          className="btn-circle shrink-0"
          onClick={exitEditMode}
          type="ghost"
        >
          <XIcon />
        </Button>
      }
    >
      <div className="grow">
        <nav role="tablist" className="tabs tabs-bordered">
          {CONTENT_BLOCK_VARIETIES.map((variety) => {
            const isSelected = variety === formType;

            return (
              <button
                className={twMerge("tab", isSelected ? "tab-active" : "")}
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
        <div role="tabpanel" className="my-2">
          {children}
        </div>
      </div>
    </ContentBlockLayout>
  );
}
