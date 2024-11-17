import { TInitContentBlock } from "../../content-blocks";

export enum TUseEditorReducerActionType {
  ADD_CONTENT_BLOCK = "add-content-block",
}

export type TUseEditorReducerAction = {
  type: TUseEditorReducerActionType;
  payload: {
    initContentBlock: TInitContentBlock;
    prefixPathIds: string[];
  };
};
