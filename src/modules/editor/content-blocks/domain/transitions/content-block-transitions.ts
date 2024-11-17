import {
  TContentBlock,
  TContentBlockTransitions,
  TContentBlockVariety,
} from "../../types";

import { HeaderContentBlockTransitions } from "./header-content-block-transitions";
import { ParagraphContentBlockTransitions } from "./paragraph-content-block-transitions";
import { TiledContentBlockTransitions } from "./tiled-content-block-transitions";
import { VideoContentBlockTransitions } from "./video-content-block-transitions";

export function transitionContentBlock(
  currentContentBlock: TContentBlock,
  newContentBlockVariety: TContentBlockVariety,
): TContentBlock {
  const Transition: TContentBlockTransitions<TContentBlock> =
    currentContentBlock.variety === TContentBlockVariety.Header
      ? HeaderContentBlockTransitions
      : currentContentBlock.variety === TContentBlockVariety.Paragraph
        ? ParagraphContentBlockTransitions
        : currentContentBlock.variety === TContentBlockVariety.Video
          ? VideoContentBlockTransitions
          : TiledContentBlockTransitions;

  switch (newContentBlockVariety) {
    case TContentBlockVariety.Header:
      return Transition.toHeader(currentContentBlock);
    case TContentBlockVariety.Paragraph:
      return Transition.toParagraph(currentContentBlock);
    case TContentBlockVariety.Video:
      return Transition.toVideo(currentContentBlock);
    case TContentBlockVariety.Tiled:
      return Transition.toTiled(currentContentBlock);
  }
}
