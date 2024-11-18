import { useEffect, useRef } from "react";
import { Button, Input } from "../../../../../components.core";
import { TVideoContentBlock } from "../../../types";
import { TUseEditorReducerActionType, useEditor } from "../../../../editor";
import { CheckIcon } from "../../../../../icons.core";

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
      <div className="flex justify-center py-4">
        <Button className="w-48 relative" variant="accent" type="submit">
          <CheckIcon className="size-6 absolute left-1" />
          <span>Save</span>
        </Button>
      </div>
    </form>
  );
}
