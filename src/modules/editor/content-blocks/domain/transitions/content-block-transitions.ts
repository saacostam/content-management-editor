import {
  TContentBlock,
  TContentBlockTransitions,
  TContentBlockVariety,
} from "../../types";

import { HeaderContentBlockTransitions } from "./header-content-block-transitions";
import { ParagraphContentBlockTransitions } from "./paragraph-content-block-transitions";
import { TiledContentBlockTransitions } from "./tiled-content-block-transitions";
import { VideoContentBlockTransitions } from "./video-content-block-transitions";

export function transitionContentBlock<T = TContentBlock>(
  currentContentBlock: TContentBlock,
  newContentBlockVariety: TContentBlockVariety,
): T {
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
      return Transition.toHeader(currentContentBlock) as T;
    case TContentBlockVariety.Paragraph:
      return Transition.toParagraph(currentContentBlock) as T;
    case TContentBlockVariety.Video:
      return Transition.toVideo(currentContentBlock) as T;
    case TContentBlockVariety.Tiled:
      return Transition.toTiled(currentContentBlock) as T;
  }
}
