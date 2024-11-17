import { TEditor } from "../../../editor";
import {
  CONTENT_BLOCKS_DOMAIN_ERROR_MESSAGES,
  ContentBlockDomainError,
} from "../../errors";
import {
  TContentBlockTile,
  TContentBlockVariety,
  TTiledContentBlock,
} from "../../types";

export const getTileByPrefixPaths = (args: {
  prefixPathIds: string[];
  rootTile: TContentBlockTile;
  editor: TEditor;
}): TContentBlockTile => {
  const { prefixPathIds, rootTile } = args;

  const pathToTraverse = [...prefixPathIds];
  let currentTile = rootTile;

  while (pathToTraverse.length > 0) {
    const nextPathId = pathToTraverse.shift();

    if (!nextPathId)
      throw new ContentBlockDomainError(
        CONTENT_BLOCKS_DOMAIN_ERROR_MESSAGES.INVALID_PREFIX_PATH_ID,
      );

    const _findTileInTiledContentBlock = (tileId: string) => {
      const tile = args.editor.contentBlockTiles.find(
        (tile) => tile.id === tileId,
      );
      return tile?.id === nextPathId;
    };

    const nextContentBlock = currentTile.contentBlocks.find((block) => {
      if (block.variety !== TContentBlockVariety.Tiled) return false;
      return block.contentBlocksTilesIds.find(_findTileInTiledContentBlock);
    }) as TTiledContentBlock | undefined;

    if (!nextContentBlock)
      throw new ContentBlockDomainError(
        CONTENT_BLOCKS_DOMAIN_ERROR_MESSAGES.INVALID_PREFIX_PATH_ID,
      );

    const nextTileId = nextContentBlock.contentBlocksTilesIds.find(
      _findTileInTiledContentBlock,
    );

    const nextTile = args.editor.contentBlockTiles.find(
      (tile) => tile.id === nextTileId,
    );

    if (!nextTile)
      throw new ContentBlockDomainError(
        CONTENT_BLOCKS_DOMAIN_ERROR_MESSAGES.INVALID_PREFIX_PATH_ID,
      );

    currentTile = nextTile;
  }

  return currentTile;
};
