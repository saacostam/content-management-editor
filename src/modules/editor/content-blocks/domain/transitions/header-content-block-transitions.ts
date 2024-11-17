import {
  TContentBlockTransitions,
  TContentBlockVariety,
  THeaderContentBlock,
  TParagraphContentBlock,
  TTiledContentBlock,
  TVideoContentBlock,
} from "../../types";

export const HeaderContentBlockTransitions: TContentBlockTransitions<THeaderContentBlock> =
  {
    toHeader: (contentBlock: THeaderContentBlock): THeaderContentBlock => {
      return {
        ...contentBlock,
      };
    },

    toParagraph: (
      contentBlock: THeaderContentBlock,
    ): TParagraphContentBlock => {
      return {
        content: contentBlock.content,
        id: contentBlock.id,
        variety: TContentBlockVariety.Paragraph,
      };
    },

    toVideo: (contentBlock: THeaderContentBlock): TVideoContentBlock => {
      return {
        id: contentBlock.id,
        url: "",
        variety: TContentBlockVariety.Video,
      };
    },

    toTiled: (contentBlock: THeaderContentBlock): TTiledContentBlock => {
      return {
        contentBlocksTilesIds: [],
        id: contentBlock.id,
        variety: TContentBlockVariety.Tiled,
      };
    },
  };
