import { ReactNode, useCallback } from "react";
import { TContentBlock, TContentBlockVariety } from "../../types";
import { TUseEditorReducerActionType, useEditor } from "../../../editor";
import { Button } from "../../../../components.core";
import { PencilIcon } from "../../../../icons.core";
import { EditContentBlock } from "./edit";

export interface ContentBlockProps {
  contentBlock: TContentBlock;
}

export function ContentBlock({
  contentBlock,
}: ContentBlockProps): Exclude<ReactNode, undefined> {
  const { editorDispatch, editor } = useEditor();

  const onClickEditContentBlock = useCallback(
    () =>
      editorDispatch({
        type: TUseEditorReducerActionType.SET_EDITABLE_CONTENT_BLOCK,
        payload: {
          contentBlockId: contentBlock.id,
        },
      }),
    [editorDispatch, contentBlock],
  );

  const isInEditorMode =
    editor.contentBlockThatIsBeingEditedId === contentBlock.id;

  return (
    <div className="w-full py-2">
      {isInEditorMode ? (
        <EditContentBlock contentBlock={contentBlock} />
      ) : (
        <>
          <Button
            className="btn-circle"
            onClick={onClickEditContentBlock}
            type="ghost"
          >
            <PencilIcon className="size-5" />
          </Button>
          {(() => {
            switch (contentBlock.variety) {
              case TContentBlockVariety.Paragraph:
                return "Paragraph";
              case TContentBlockVariety.Header:
                return "Header";
              case TContentBlockVariety.Video:
                return "Video";
              case TContentBlockVariety.Tiled:
                return "Tiled";
            }
          })()}
        </>
      )}
    </div>
  );
}
