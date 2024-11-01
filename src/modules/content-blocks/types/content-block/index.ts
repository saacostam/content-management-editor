import { HeaderContentBlock } from "./header-content-block.types";
import { ParagraphContentBlock } from "./paragraph-content-block.types";
import { TiledContentBlock } from "./tiled-content-block.types";
import { VideoContentBlock } from "./video-content-block.types";

export type ContentBlock =
    HeaderContentBlock
    | ParagraphContentBlock
    | TiledContentBlock
    | VideoContentBlock;
