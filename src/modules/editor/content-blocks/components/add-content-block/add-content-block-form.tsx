import { useCallback } from "react";
import { Button } from "../../../../components.core";
import { TUseEditorReducerActionType, useEditor } from "../../../editor";
import { TContentBlockVariety } from "../../types";
import { PlusIcon } from "../../../../icons.core";

export function AddContentBlockForm(props: { prefixPathIds: string[] }) {
  const { editorDispatch } = useEditor();

  const onClickAddContentBlock = useCallback(
    () =>
      editorDispatch({
        type: TUseEditorReducerActionType.ADD_CONTENT_BLOCK,
        payload: {
          initContentBlock: {
            variety: TContentBlockVariety.Paragraph,
            content: "",
          },
          prefixPathIds: props.prefixPathIds,
        },
      }),
    [editorDispatch, props.prefixPathIds],
  );

  return (
    <section className="flex justify-center">
      <Button
        className="w-48 relative"
        onClick={onClickAddContentBlock}
        type="accent"
      >
        <PlusIcon className="size-6 absolute left-2" />
        <span>New</span>
      </Button>
    </section>
  );
}
