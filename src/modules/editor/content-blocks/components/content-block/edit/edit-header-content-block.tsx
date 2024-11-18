import { useEffect, useRef } from "react";
import { Button, Input } from "../../../../../components.core";
import { THeaderContentBlock } from "../../../types";
import { CheckIcon } from "../../../../../icons.core";
import { TUseEditorReducerActionType, useEditor } from "../../../../editor";

export interface EditHeaderContentBlockProps {
  contentBlock: THeaderContentBlock;
  exitEditMode: () => void;
  prefixPathIds: string[];
  setContentBlock: (contentBlock: THeaderContentBlock) => void;
}

export function EditHeaderContentBlock({
  contentBlock,
  exitEditMode,
  prefixPathIds,
  setContentBlock,
}: EditHeaderContentBlockProps) {
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
      <div className="flex justify-center py-4">
        <Button className="w-48 relative" variant="accent" type="submit">
          <CheckIcon className="size-6 absolute left-1" />
          <span>Save</span>
        </Button>
      </div>
    </form>
  );
}
