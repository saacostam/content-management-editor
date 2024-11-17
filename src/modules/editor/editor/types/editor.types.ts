import { TContentBlockTile } from "../../content-blocks";

export interface TEditor {
  rootContentBlockTileId: string;
  contentBlockTiles: TContentBlockTile[];
}
