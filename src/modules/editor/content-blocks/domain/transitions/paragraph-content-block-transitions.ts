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
            id: contentBlock.id,
            content: contentBlock.content,
            variety: TContentBlockVariety.Header,
        };
    },

    toParagraph: (contentBlock: TParagraphContentBlock): TParagraphContentBlock => {
        return {
            ...contentBlock,
        };
    },

    toVideo: (contentBlock: TParagraphContentBlock): TVideoContentBlock => {
        return {
            id: contentBlock.id,
            url: "",
            variety: TContentBlockVariety.Video,
        };
    },

    toTiled: (contentBlock: TParagraphContentBlock): TTiledContentBlock => {
        return {
            contentBlocksTiles: [],
            id: contentBlock.id,
            variety: TContentBlockVariety.Tiled,
        };
    },
}
