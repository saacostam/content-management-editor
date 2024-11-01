import { THeaderContentBlock } from "./header-content-block.types";
import { TParagraphContentBlock } from "./paragraph-content-block.types";
import { TTiledContentBlock } from "./tiled-content-block.types";
import { TVideoContentBlock } from "./video-content-block.types";

export type TContentBlock =
    THeaderContentBlock
    | TParagraphContentBlock
    | TTiledContentBlock
    | TVideoContentBlock;
