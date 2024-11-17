import { TContentBlockTile } from "../types";
import { AddContentBlockForm } from "./add-content-block";
import { ContentBlock } from "./content-block";

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
        prefixPathIds={prefixPathIds}
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
