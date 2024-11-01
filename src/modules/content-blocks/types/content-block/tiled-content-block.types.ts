import { TContentBlockVariety } from "../content-block-variety.types";
import { TContentBlockTile } from "../content-blocks-tile.types";

export interface TTiledContentBlock {
    contentBlocksTiles: TContentBlockTile[];
    variety: TContentBlockVariety.Tiled;
}
