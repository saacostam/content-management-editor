import { initContentBlocksTile } from "../../../content-blocks";
import { TEditor } from "../../types";

export const initEditor = (): TEditor => {
  const rootContentBlock = initContentBlocksTile();

  return {
    rootContentBlockTileId: rootContentBlock.id,
    contentBlockTiles: [rootContentBlock],
  };
};
