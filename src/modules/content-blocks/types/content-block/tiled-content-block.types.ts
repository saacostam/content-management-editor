import { ContentBlockVariety } from "../content-block-variety.types";
import { ContentBlockTile } from "../content-blocks-tile.types";

export interface TiledContentBlock {
    contentBlocksTiles: ContentBlockTile[];
    variety: ContentBlockVariety.Tiled;
}
