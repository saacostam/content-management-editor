import { TContentBlockVariety } from "../content-block-variety.types";
import { TContentBlockTile } from "../content-blocks-tile.types";
import { TBaseContentBlock } from "./base-content-block.types";

export interface TTiledContentBlock extends TBaseContentBlock{
    contentBlocksTiles: TContentBlockTile[];
    variety: TContentBlockVariety.Tiled;
}
