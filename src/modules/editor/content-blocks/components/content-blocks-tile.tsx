import { TContentBlockTile } from "../types";
import { ContentBlock } from "./content-block/content-block";

export interface ContentBlocksTileProps {
    tile: TContentBlockTile;
}

export function ContentBlocksTile({
    tile,
}: ContentBlocksTileProps) {
    const {
        contentBlocks,
    } = tile;

    const contentBlocksList = contentBlocks.map((contentBlock) => {
        return <ContentBlock
            key={contentBlock.id}
            contentBlock={contentBlock}
        ></ContentBlock>;
    });

    return <>
        {contentBlocksList}
    </>
}
