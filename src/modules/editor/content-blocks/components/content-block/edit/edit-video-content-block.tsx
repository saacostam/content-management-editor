import { useEffect, useRef } from "react";
import { Input } from "../../../../../components.core";
import { TVideoContentBlock } from "../../../types";
import { TUseEditorReducerActionType, useEditor } from "../../../../editor";
import { EditContentBlockFormButtons } from "./edit-content-block-form-buttons";

export interface EditVideoContentBlockProps {
  contentBlock: TVideoContentBlock;
  exitEditMode: () => void;
  prefixPathIds: string[];
  setContentBlock: (contentBlock: TVideoContentBlock) => void;
}

export function EditVideoContentBlock({
  contentBlock,
  exitEditMode,
  prefixPathIds,
  setContentBlock,
}: EditVideoContentBlockProps) {
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
        value={contentBlock.url}
        onChange={(e) =>
          setContentBlock({ ...contentBlock, url: e.target.value })
        }
        ref={inputRef}
        placeholder="🔗 Drop a YouTube video URL here..."
      />
      <EditContentBlockFormButtons />
    </form>
  );
}
