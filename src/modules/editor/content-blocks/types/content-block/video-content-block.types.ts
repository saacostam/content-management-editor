import { TContentBlockVariety } from "../content-block-variety.types";
import { TBaseContentBlock } from "./base-content-block.types";

export interface TVideoContentBlock extends TBaseContentBlock{
    variety: TContentBlockVariety.Video;
    url: string;
}
