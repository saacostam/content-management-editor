import { useEffect, useRef } from "react";
import { Input } from "../../../../../components.core";
import { TParagraphContentBlock } from "../../../types";

export interface EditParagraphContentBlockProps {
  contentBlock: TParagraphContentBlock;
  setContentBlock: (contentBlock: TParagraphContentBlock) => void;
}

export function EditParagraphContentBlock({
  contentBlock,
  setContentBlock,
}: EditParagraphContentBlockProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => inputRef.current?.focus(), []);

  return (
    <Input
      value={contentBlock.content}
      onChange={(e) =>
        setContentBlock({ ...contentBlock, content: e.target.value })
      }
      ref={inputRef}
      placeholder="✍️ Write something here..."
    />
  );
}
