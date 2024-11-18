import { useCallback, useState } from "react";
import { TContentBlock, TContentBlockVariety } from "../../../types";
import { EditContentBlockLayout } from "./edit-content-block-layout";
import { transitionContentBlock } from "../../../domain";
import { EditParagraphContentBlock } from "./edit-paragraph-content-block";
import { TUseEditorReducerActionType, useEditor } from "../../../../editor";
import { EditHeaderContentBlock } from "./edit-header-content-block";
import { EditVideoContentBlock } from "./edit-video-content-block";
import { EditTiledContentBlock } from "./edit-tiled-content-block";

export interface EditContentBlockProps {
  contentBlock: TContentBlock;
  prefixPathIds: string[];
}

export function EditContentBlock({
  contentBlock,
  prefixPathIds,
}: EditContentBlockProps) {
  const { editorDispatch } = useEditor();

  const [editableContentBlock, setEditableContentBlock] =
    useState<TContentBlock>({
      ...contentBlock,
    });

  const exitEditMode = useCallback(() => {
    editorDispatch({
      type: TUseEditorReducerActionType.SET_EDITABLE_CONTENT_BLOCK,
      payload: {
        contentBlockId: null,
      },
    });
  }, [editorDispatch]);

  const setFormType = useCallback(
    (variety: TContentBlockVariety) =>
      setEditableContentBlock((contentBlock) =>
        transitionContentBlock(contentBlock, variety),
      ),
    [],
  );

  return (
    <EditContentBlockLayout
      formType={editableContentBlock.variety}
      setFormType={setFormType}
    >
      {editableContentBlock.variety === TContentBlockVariety.Paragraph ? (
        <EditParagraphContentBlock
          contentBlock={editableContentBlock}
          exitEditMode={exitEditMode}
          prefixPathIds={prefixPathIds}
          setContentBlock={setEditableContentBlock}
        />
      ) : editableContentBlock.variety === TContentBlockVariety.Header ? (
        <EditHeaderContentBlock
          contentBlock={editableContentBlock}
          exitEditMode={exitEditMode}
          prefixPathIds={prefixPathIds}
          setContentBlock={setEditableContentBlock}
        />
      ) : editableContentBlock.variety === TContentBlockVariety.Video ? (
        <EditVideoContentBlock
          contentBlock={editableContentBlock}
          exitEditMode={exitEditMode}
          prefixPathIds={prefixPathIds}
          setContentBlock={setEditableContentBlock}
        />
      ) : (
        <EditTiledContentBlock
          contentBlock={editableContentBlock}
          exitEditMode={exitEditMode}
          prefixPathIds={prefixPathIds}
        />
      )}
    </EditContentBlockLayout>
  );
}
