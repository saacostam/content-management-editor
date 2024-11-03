import {
    TContentBlockTransitions,
    TContentBlockVariety,
    THeaderContentBlock,
    TParagraphContentBlock,
    TTiledContentBlock,
    TVideoContentBlock
} from "../../types";

export const HeaderContentBlockTransitions: TContentBlockTransitions<THeaderContentBlock> = {
    toHeader: (contentBlock: THeaderContentBlock): THeaderContentBlock => {
        return {
            ...contentBlock,
        };
    },

    toParagraph: (contentBlock: THeaderContentBlock): TParagraphContentBlock => {
        return {
            content: contentBlock.content,
            variety: TContentBlockVariety.Paragraph,
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
