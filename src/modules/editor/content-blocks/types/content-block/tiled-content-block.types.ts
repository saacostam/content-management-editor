import { TContentBlockVariety } from "../content-block-variety.types";
import { TBaseContentBlock } from "./base-content-block.types";

export interface TTiledContentBlock extends TBaseContentBlock {
  contentBlocksTilesIds: string[];
  variety: TContentBlockVariety.Tiled;
}

export type TTiledContentBlockSize = 1 | 2 | 3;
