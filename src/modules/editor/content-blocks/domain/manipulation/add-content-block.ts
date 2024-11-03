import { CONTENT_BLOCKS_DOMAIN_ERROR_MESSAGES, ContentBlockDomainError } from "../../errors";
import { TContentBlock, TContentBlockTile, TContentBlockVariety, TTiledContentBlock } from "../../types"

export interface AddContentBlockFromRootTile {
    contentBlock: TContentBlock;
    prefixPathIds: string[];
    rootTile: TContentBlockTile;
}

export const addContentBlockFromRootTile = ({
    contentBlock,
    prefixPathIds,
    rootTile,
}: AddContentBlockFromRootTile) => {
    const pathToTraverse = [...prefixPathIds]
    let currentTile = rootTile;

    while (pathToTraverse.length > 0) {
        const nextPathId = pathToTraverse.shift();

        if (!nextPathId) throw new ContentBlockDomainError(CONTENT_BLOCKS_DOMAIN_ERROR_MESSAGES.INVALID_PREFIX_PATH_ID);

        const _findTileInTiledContentBlock = (tile: TContentBlockTile) => tile.id === nextPathId;

        const nextContentBlock = currentTile.contentBlocks.find((block) => {
            if (block.variety !== TContentBlockVariety.Tiled) return false;
            return block.contentBlocksTiles.find(_findTileInTiledContentBlock);
        }) as TTiledContentBlock | undefined;

        if (!nextContentBlock) throw new ContentBlockDomainError(CONTENT_BLOCKS_DOMAIN_ERROR_MESSAGES.INVALID_PREFIX_PATH_ID);

        const nextTile = nextContentBlock.contentBlocksTiles.find(_findTileInTiledContentBlock);

        if (!nextTile) throw new ContentBlockDomainError(CONTENT_BLOCKS_DOMAIN_ERROR_MESSAGES.INVALID_PREFIX_PATH_ID);

        currentTile = nextTile;
    }

    currentTile.contentBlocks.push(contentBlock);
}
