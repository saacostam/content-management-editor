import { genId } from "../../../../utils.core";
import { TEditor } from "../../../editor";
import {
  CONTENT_BLOCKS_DOMAIN_ERROR_MESSAGES,
  ContentBlockDomainError,
} from "../../errors";
import {
  TContentBlockTile,
  TContentBlockVariety,
  TTiledContentBlock,
  TTiledContentBlockSize,
} from "../../types";
import { transitionContentBlock } from "../transitions";
import { getTileByPrefixPaths } from "./get-tile-by-prefix-paths";

export interface SetTiledContentBlockSize {
  contentBlockId: string;
  editor: TEditor;
  prefixPathIds: string[];
  size: TTiledContentBlockSize;
}

export const setTiledContentBlockSize = ({
  contentBlockId,
  editor,
  prefixPathIds,
  size,
}: SetTiledContentBlockSize) => {
  const { rootContentBlockTileId, contentBlockTiles } = editor;

  const rootTile = contentBlockTiles.find(
    (tile) => tile.id === rootContentBlockTileId,
  );

  if (!rootTile) {
    throw new ContentBlockDomainError(
      CONTENT_BLOCKS_DOMAIN_ERROR_MESSAGES.NO_ROOT_CONTENT_BLOCK_TILE_FOUND,
    );
  }

  const currenTile = getTileByPrefixPaths({
    editor,
    prefixPathIds,
    rootTile,
  });

  const contentBlockToUpdateIndex = currenTile.contentBlocks.findIndex(
    (block) => block.id === contentBlockId,
  );

  if (contentBlockToUpdateIndex === -1) {
    throw new ContentBlockDomainError(
      CONTENT_BLOCKS_DOMAIN_ERROR_MESSAGES.INVALID_CONTENT_BLOCK_ID,
    );
  }

  const contentBlock: TTiledContentBlock = (() => {
    // Get the current content block, and cast to tiled type if necessary

    const contentBlock = currenTile.contentBlocks[contentBlockToUpdateIndex];

    if (contentBlock.variety === TContentBlockVariety.Tiled)
      return contentBlock;

    const newContentBlock = transitionContentBlock<TTiledContentBlock>(
      contentBlock,
      TContentBlockVariety.Tiled,
    );
    currenTile.contentBlocks[contentBlockToUpdateIndex] = newContentBlock;

    return newContentBlock;
  })();

  const currentSize = contentBlock.contentBlocksTilesIds.length;
  if (currentSize >= size) {
    const keep = contentBlock.contentBlocksTilesIds.slice(0, size);
    const discard = contentBlock.contentBlocksTilesIds.slice(size);

    contentBlock.contentBlocksTilesIds = [...keep];
    editor.contentBlockTiles = editor.contentBlockTiles.filter(
      (tile) => !discard.find((id) => tile.id === id),
    );
  } else {
    const numberOfTilesToAdd = size - currentSize;
    for (let i = 0; i < numberOfTilesToAdd; i++) {
      const newTileId = genId();
      const newTile: TContentBlockTile = {
        id: newTileId,
        contentBlocks: [],
        prefixPathIds: [...prefixPathIds, contentBlockId],
      };

      contentBlock.contentBlocksTilesIds.push(newTileId);
      editor.contentBlockTiles.push(newTile);
    }
  }

  return rootTile;
};
