import { TInitContentBlock } from "../../content-blocks";

export enum TUseEditorReducerActionType {
  ADD_CONTENT_BLOCK = "add-content-block",
  SET_EDITABLE_CONTENT_BLOCK = "set-editable-content-block",
}

export type TUseEditorReducerAction =
  | {
      type: TUseEditorReducerActionType.ADD_CONTENT_BLOCK;
      payload: {
        initContentBlock: TInitContentBlock;
        prefixPathIds: string[];
      };
    }
  | {
      type: TUseEditorReducerActionType.SET_EDITABLE_CONTENT_BLOCK;
      payload: {
        contentBlockId?: string | null;
      };
    };
