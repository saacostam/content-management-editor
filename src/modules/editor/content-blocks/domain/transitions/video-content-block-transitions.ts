import {
  TContentBlockTransitions,
  TContentBlockVariety,
  THeaderContentBlock,
  TParagraphContentBlock,
  TTiledContentBlock,
  TVideoContentBlock,
} from "../../types";

export const VideoContentBlockTransitions: TContentBlockTransitions<TVideoContentBlock> =
  {
    toHeader: (contentBlock: TVideoContentBlock): THeaderContentBlock => {
      return {
        content: "",
        id: contentBlock.id,
        variety: TContentBlockVariety.Header,
      };
    },

    toParagraph: (contentBlock: TVideoContentBlock): TParagraphContentBlock => {
      return {
        content: "",
        id: contentBlock.id,
        variety: TContentBlockVariety.Paragraph,
      };
    },

    toVideo: (contentBlock: TVideoContentBlock): TVideoContentBlock => {
      return {
        ...contentBlock,
      };
    },

    toTiled: (TVideoContentBlock): TTiledContentBlock => {
      return {
        contentBlocksTilesIds: [],
        id: TVideoContentBlock.id,
        variety: TContentBlockVariety.Tiled,
      };
    },
  };
