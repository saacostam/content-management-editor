import {
    TContentBlockTransitions,
    TContentBlockVariety,
    THeaderContentBlock,
    TParagraphContentBlock,
    TTiledContentBlock,
    TVideoContentBlock
} from "../../types";

export const TiledContentBlockTransitions: TContentBlockTransitions<TTiledContentBlock> = {
    toHeader: (contentBlock: TTiledContentBlock): THeaderContentBlock => {
        return {
            content: "",
            id: contentBlock.id,
            variety: TContentBlockVariety.Header,
        };
    },

    toParagraph: (contentBlock: TTiledContentBlock): TParagraphContentBlock => {
        return {
            content: "",
            id: contentBlock.id,
            variety: TContentBlockVariety.Paragraph,
        };
    },

    toVideo: (contentBlock: TTiledContentBlock): TVideoContentBlock => {
        return {
            id: contentBlock.id,
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
