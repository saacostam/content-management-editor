import { initContentBlocksTile } from "../../../content-blocks";
import { TEditor } from "../../types";

export const initEditor = (): TEditor => {
  return {
    rootContentBlockTile: initContentBlocksTile(),
  };
};
