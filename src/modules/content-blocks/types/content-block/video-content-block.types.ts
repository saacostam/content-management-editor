import { ContentBlockVariety } from "../content-block-variety.types";

export interface VideoContentBlock {
    variety: ContentBlockVariety.Video;
    url: string;
}
