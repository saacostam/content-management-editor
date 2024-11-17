import { useCallback, useState } from "react";
import { TContentBlock, TContentBlockVariety } from "../../../types";
import { EditContentBlockLayout } from "./edit-content-block-layout";
import { transitionContentBlock } from "../../../domain";

export interface EditContentBlockProps {
  contentBlock: TContentBlock;
}

export function EditContentBlock({ contentBlock }: EditContentBlockProps) {
  const [editableContentBlock, setEditableContentBlock] =
    useState<TContentBlock>({
      ...contentBlock,
    });
  const [variety, setVariety] = useState<TContentBlockVariety>(
    contentBlock.variety,
  );

  const setFormType = useCallback((variety: TContentBlockVariety) => {
    setVariety(variety);
    setEditableContentBlock((prevContentBlock) =>
      transitionContentBlock(prevContentBlock, variety),
    );
  }, []);

  return (
    <EditContentBlockLayout formType={variety} setFormType={setFormType}>
      {JSON.stringify(editableContentBlock)}
    </EditContentBlockLayout>
  );
}
