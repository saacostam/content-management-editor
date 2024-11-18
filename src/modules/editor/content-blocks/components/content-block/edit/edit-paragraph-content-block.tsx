import { useEffect, useRef } from "react";
import { Input } from "../../../../../components.core";
import { TParagraphContentBlock } from "../../../types";
import { TUseEditorReducerActionType, useEditor } from "../../../../editor";
import { EditContentBlockFormButtons } from "./edit-content-block-form-buttons";

export interface EditParagraphContentBlockProps {
  contentBlock: TParagraphContentBlock;
  exitEditMode: () => void;
  prefixPathIds: string[];
  setContentBlock: (contentBlock: TParagraphContentBlock) => void;
}

export function EditParagraphContentBlock({
  contentBlock,
  exitEditMode,
  prefixPathIds,
  setContentBlock,
}: EditParagraphContentBlockProps) {
  const { editorDispatch } = useEditor();

  const inputRef = useRef<HTMLInputElement>(null);

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();

    exitEditMode();
    editorDispatch({
      type: TUseEditorReducerActionType.UPDATE_CONTENT_BLOCK,
      payload: {
        contentBlock: contentBlock,
        prefixPathIds: prefixPathIds,
      },
    });
  };

  useEffect(() => inputRef.current?.focus(), []);

  return (
    <form onSubmit={submitForm}>
      <Input
        value={contentBlock.content}
        onChange={(e) =>
          setContentBlock({ ...contentBlock, content: e.target.value })
        }
        ref={inputRef}
        placeholder="✍️ Write something here..."
      />
      <EditContentBlockFormButtons />
    </form>
  );
}
