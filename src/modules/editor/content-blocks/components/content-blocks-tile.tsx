import { TContentBlockTile } from "../types";
import { AddContentBlockForm } from "./add-content-block-form";
import { ContentBlock } from "./content-block/content-block";

export interface ContentBlocksTileProps {
  tile: TContentBlockTile;
}

export function ContentBlocksTile({ tile }: ContentBlocksTileProps) {
  const { contentBlocks, prefixPathIds } = tile;

  const contentBlocksList = contentBlocks.map((contentBlock) => {
    return (
      <ContentBlock
        key={contentBlock.id}
        contentBlock={contentBlock}
      ></ContentBlock>
    );
  });

  return (
    <>
      {contentBlocksList}
      <AddContentBlockForm prefixPathIds={prefixPathIds} />
    </>
  );
}
