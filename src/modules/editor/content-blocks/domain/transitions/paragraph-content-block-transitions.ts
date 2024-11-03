import {
    TContentBlockTransitions,
    TContentBlockVariety,
    THeaderContentBlock,
    TParagraphContentBlock,
    TTiledContentBlock,
    TVideoContentBlock
} from "../../types";

export const ParagraphContentBlockTransitions: TContentBlockTransitions<TParagraphContentBlock> = {
    toHeader: (contentBlock: TParagraphContentBlock): THeaderContentBlock => {
        return {
            content: contentBlock.content,
            variety: TContentBlockVariety.Header,
        };
    },

    toParagraph: (contentBlock: TParagraphContentBlock): TParagraphContentBlock => {
        return {
            ...contentBlock,
        };
    },

    toVideo: (): TVideoContentBlock => {
        return {
            url: "",
            variety: TContentBlockVariety.Video,
        };
    },

    toTiled: (): TTiledContentBlock => {
        return {
            contentBlocksTiles: [],
            variety: TContentBlockVariety.Tiled,
        };
    },
}
