import { useMemo, useReducer } from "react";
import { addContentBlockFromEditor } from "../../content-blocks";
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
