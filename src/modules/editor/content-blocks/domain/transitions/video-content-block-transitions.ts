import {
    TContentBlockTransitions,
    TContentBlockVariety,
    THeaderContentBlock,
    TParagraphContentBlock,
    TTiledContentBlock,
    TVideoContentBlock
} from "../../types";

export const VideoContentBlockTransitions: TContentBlockTransitions<TVideoContentBlock> = {
    toHeader: (): THeaderContentBlock => {
        return {
            content: "",
            variety: TContentBlockVariety.Header,
        };
    },

    toParagraph: (): TParagraphContentBlock => {
        return {
            content: "",
            variety: TContentBlockVariety.Paragraph,
        };
    },

    toVideo: (contentBlock: TVideoContentBlock): TVideoContentBlock => {
        return {
            ...contentBlock,
        };
    },

    toTiled: (): TTiledContentBlock => {
        return {
            contentBlocksTiles: [],
            variety: TContentBlockVariety.Tiled,
        };
    },
}
