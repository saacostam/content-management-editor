import { useMemo, useReducer } from "react";
import {
  addContentBlockFromEditor,
  setTiledContentBlockSize,
  updateContentBlock,
} from "../../content-blocks";
import { initEditor } from "../domain";
import {
  TEditor,
  TUseEditorReducerAction,
  TUseEditorReducerActionType,
} from "../types";

export function useEditorSource() {
  const [editor, editorDispatch] = useReducer(
    (state: TEditor, action: TUseEditorReducerAction) => {
      switch (action.type) {
        case TUseEditorReducerActionType.ADD_CONTENT_BLOCK:
          return {
            ...state,
            rootContentBlockTile: addContentBlockFromEditor({
              initContentBlock: action.payload.initContentBlock,
              prefixPathIds: action.payload.prefixPathIds,
              editor: state,
            }),
          };
        case TUseEditorReducerActionType.SET_EDITABLE_CONTENT_BLOCK:
          return {
            ...state,
            contentBlockThatIsBeingEditedId: action.payload.contentBlockId,
          };
        case TUseEditorReducerActionType.UPDATE_CONTENT_BLOCK:
          return {
            ...state,
            rootContentBlockTile: updateContentBlock({
              contentBlock: action.payload.contentBlock,
              editor: state,
              prefixPathIds: action.payload.prefixPathIds,
            }),
          };
        case TUseEditorReducerActionType.SET_TILED_CONTENT_BLOCK_SIZE:
          return {
            ...state,
            rootContentBlockTile: setTiledContentBlockSize({
              contentBlockId: action.payload.contentBlockId,
              editor: state,
              prefixPathIds: action.payload.prefixPathIds,
              size: action.payload.size,
            }),
          };
        default:
          return state;
      }
    },
    null,
    initEditor,
  );

  return useMemo(
    () => ({
      editorDispatch,
      editor,
    }),
    [editorDispatch, editor],
  );
}
