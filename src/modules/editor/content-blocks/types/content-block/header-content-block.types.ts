import { TContentBlockVariety } from "../content-block-variety.types";
import { TBaseContentBlock } from "./base-content-block.types";

export interface THeaderContentBlock extends TBaseContentBlock {
  content: string;
  variety: TContentBlockVariety.Header;
}
