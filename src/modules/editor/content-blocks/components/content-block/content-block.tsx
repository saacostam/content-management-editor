import { ReactNode, useCallback } from "react";
import { TContentBlock, TContentBlockVariety } from "../../types";
import { TUseEditorReducerActionType, useEditor } from "../../../editor";
import { Button } from "../../../../components.core";
import { PencilIcon } from "../../../../icons.core";
import { EditContentBlock } from "./edit";
import { ContentBlockLayout } from "./core";

export interface ContentBlockProps {
  contentBlock: TContentBlock;
  prefixPathIds: string[];
}

export function ContentBlock({
  contentBlock,
  prefixPathIds,
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
        <EditContentBlock
          contentBlock={contentBlock}
          prefixPathIds={prefixPathIds}
        />
      ) : (
        <>
          <ContentBlockLayout
            mainCta={
              <Button
                className="btn-circle"
                onClick={onClickEditContentBlock}
                variant="ghost"
              >
                <PencilIcon className="size-5" />
              </Button>
            }
          >
            {(() => {
              switch (contentBlock.variety) {
                case TContentBlockVariety.Paragraph:
                  return JSON.stringify(contentBlock);
                case TContentBlockVariety.Header:
                  return JSON.stringify(contentBlock);
                case TContentBlockVariety.Video:
                  return JSON.stringify(contentBlock);
                case TContentBlockVariety.Tiled:
                  return JSON.stringify(contentBlock);
              }
            })()}
          </ContentBlockLayout>
        </>
      )}
    </div>
  );
}
