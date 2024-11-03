import {
    TContentBlockTransitions,
    TContentBlockVariety,
    THeaderContentBlock,
    TParagraphContentBlock,
    TTiledContentBlock,
    TVideoContentBlock
} from "../../types";

export const TiledContentBlockTransitions: TContentBlockTransitions<TTiledContentBlock> = {
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

    toVideo: (): TVideoContentBlock => {
        return {
            url: "",
            variety: TContentBlockVariety.Video,
        };
    },

    toTiled: (contentBlock: TTiledContentBlock): TTiledContentBlock => {
        return {
            ...contentBlock,
        };
    },
}
