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
  return (
    <Input
      value={contentBlock.content}
      onChange={(e) =>
        setContentBlock({ ...contentBlock, content: e.target.value })
      }
    />
  );
}
