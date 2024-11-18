import { useEffect, useRef, useState } from "react";
import { Input } from "../../../../../components.core";
import { TTiledContentBlock, TTiledContentBlockSize } from "../../../types";
import { TUseEditorReducerActionType, useEditor } from "../../../../editor";
import { EditContentBlockFormButtons } from "./edit-content-block-form-buttons";

export interface EditTiledContentBlockProps {
  contentBlock: TTiledContentBlock;
  exitEditMode: () => void;
  prefixPathIds: string[];
}

const validateTileCount = (
  tileCount: number,
): TTiledContentBlockSize | false =>
  tileCount >= 1 && tileCount <= 3
    ? (tileCount as TTiledContentBlockSize)
    : false;

export function EditTiledContentBlock({
  contentBlock,
  exitEditMode,
  prefixPathIds,
}: EditTiledContentBlockProps) {
  const { editorDispatch } = useEditor();

  const [tileCount, setTileCount] = useState(
    contentBlock.contentBlocksTilesIds.length === 0
      ? 1
      : contentBlock.contentBlocksTilesIds.length,
  );

  const inputRef = useRef<HTMLInputElement>(null);

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();

    const cleanTileCount = validateTileCount(tileCount);

    if (!cleanTileCount) return;

    exitEditMode();
    editorDispatch({
      type: TUseEditorReducerActionType.SET_TILED_CONTENT_BLOCK_SIZE,
      payload: {
        contentBlockId: contentBlock.id,
        prefixPathIds: prefixPathIds,
        size: cleanTileCount,
      },
    });
  };

  useEffect(() => inputRef.current?.focus(), []);

  return (
    <form onSubmit={submitForm}>
      <Input
        value={tileCount}
        ref={inputRef}
        type="number"
        onChange={(e) => setTileCount(Number(e.target.value))}
        min={1}
        max={3}
      />
      <EditContentBlockFormButtons />
    </form>
  );
}
