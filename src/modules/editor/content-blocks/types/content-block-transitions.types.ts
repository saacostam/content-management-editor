import {
    TContentBlock,
    THeaderContentBlock,
    TParagraphContentBlock,
    TTiledContentBlock,
    TVideoContentBlock
} from "../types";

export type TContentBlockTransitions<T extends TContentBlock> = {
    toHeader(contentBlock: T): THeaderContentBlock;
    toParagraph(contentBlock: T): TParagraphContentBlock;
    toTiled(contentBlock: T): TTiledContentBlock;
    toVideo(contentBlock: T): TVideoContentBlock;
}
