import { ReactNode } from "react";
import { TContentBlock, TContentBlockVariety } from "../../types";

export interface ContentBlockProps {
  contentBlock: TContentBlock;
}

export function ContentBlock({
  contentBlock,
}: ContentBlockProps): Exclude<ReactNode, undefined> {
  switch (contentBlock.variety) {
    case TContentBlockVariety.Paragraph:
      return "Paragraph";
    case TContentBlockVariety.Header:
      return "Header";
    case TContentBlockVariety.Video:
      return "Video";
    case TContentBlockVariety.Tiled:
      return "Tiled";
  }
}
