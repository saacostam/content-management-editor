import { TContentBlockVariety } from "../content-block-variety.types";

export type TInitContentBlock =
  | {
      variety: TContentBlockVariety.Header;
      content: string;
    }
  | {
      variety: TContentBlockVariety.Paragraph;
      content: string;
    }
  | {
      variety: TContentBlockVariety.Video;
      url: string;
    }
  | {
      variety: TContentBlockVariety.Tiled;
      numberOfTiles: 1 | 2 | 3;
      prefixPathsOfParentTile: string[];
    };
