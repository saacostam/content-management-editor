import { TContentBlockVariety } from "../content-block-variety.types";

export type TInitContentBlock = {
    type: TContentBlockVariety.Header,
    content: string;
} | {
    type: TContentBlockVariety.Paragraph,
    content: string;
} | {
    type: TContentBlockVariety.Video,
    url: string
} | {
    type: TContentBlockVariety.Tiled,
    numberOfTiles: 1 | 2 | 3;
    prefixPathsOfParentTile: string[];
}
