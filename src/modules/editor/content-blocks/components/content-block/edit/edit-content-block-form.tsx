import { useCallback, useState } from "react";
import { TContentBlock, TContentBlockVariety } from "../../../types";
import { EditContentBlockLayout } from "./edit-content-block-layout";
import { transitionContentBlock } from "../../../domain";
import { EditParagraphContentBlock } from "./edit-paragraph-content-block";
import { Button } from "../../../../../components.core";
import { TUseEditorReducerActionType, useEditor } from "../../../../editor";

export interface EditContentBlockProps {
  contentBlock: TContentBlock;
  prefixPathIds: string[];
}

export function EditContentBlock({
  contentBlock,
  prefixPathIds,
}: EditContentBlockProps) {
  const { editorDispatch } = useEditor();

  const [editableContentBlock, setEditableContentBlock] =
    useState<TContentBlock>({
      ...contentBlock,
    });

  const onClickSave = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      editorDispatch({
        type: TUseEditorReducerActionType.UPDATE_CONTENT_BLOCK,
        payload: {
          contentBlock: { ...editableContentBlock },
          prefixPathIds: prefixPathIds,
        },
      });
      editorDispatch({
        type: TUseEditorReducerActionType.SET_EDITABLE_CONTENT_BLOCK,
        payload: {
          contentBlockId: null,
        },
      });
    },
    [editableContentBlock, editorDispatch, prefixPathIds],
  );

  const setFormType = useCallback(
    (variety: TContentBlockVariety) =>
      setEditableContentBlock((contentBlock) =>
        transitionContentBlock(contentBlock, variety),
      ),
    [],
  );

  return (
    <EditContentBlockLayout
      formType={editableContentBlock.variety}
      setFormType={setFormType}
    >
      <form onSubmit={onClickSave}>
        {editableContentBlock.variety === TContentBlockVariety.Paragraph ? (
          <EditParagraphContentBlock
            contentBlock={editableContentBlock}
            setContentBlock={setEditableContentBlock}
          />
        ) : (
          JSON.stringify(editableContentBlock)
        )}
        <Button className="w-48 block mx-auto my-4" type="accent">
          Save
        </Button>
      </form>
    </EditContentBlockLayout>
  );
}