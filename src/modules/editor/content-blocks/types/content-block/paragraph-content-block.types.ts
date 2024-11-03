import { TContentBlockVariety } from "../content-block-variety.types";
import { TBaseContentBlock } from "./base-content-block.types";

export interface TParagraphContentBlock extends TBaseContentBlock {
    content: string;
    variety: TContentBlockVariety.Paragraph;
}
