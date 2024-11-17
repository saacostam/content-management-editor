import { TEditor } from "../../../editor";
import {
  CONTENT_BLOCKS_DOMAIN_ERROR_MESSAGES,
  ContentBlockDomainError,
} from "../../errors";
import { TContentBlock, TContentBlockTile } from "../../types";
import { getTileByPrefixPaths } from "./get-tile-by-prefix-paths";

export interface UpdateContentBlock {
  contentBlock: TContentBlock;
  editor: TEditor;
  prefixPathIds: string[];
}

export const updateContentBlock = ({
  contentBlock,
  editor,
  prefixPathIds,
}: UpdateContentBlock): TContentBlockTile => {
  const { rootContentBlockTileId: rootTileId, contentBlockTiles } = editor;

  const rootTile = contentBlockTiles.find((tile) => tile.id === rootTileId);

  if (!rootTile) {
    throw new ContentBlockDomainError(
      CONTENT_BLOCKS_DOMAIN_ERROR_MESSAGES.NO_ROOT_CONTENT_BLOCK_TILE_FOUND,
    );
  }

  const currentTile = getTileByPrefixPaths({
    prefixPathIds,
    rootTile,
    editor,
  });

  const contentBlockToUpdateIndex = currentTile.contentBlocks.findIndex(
    (block) => block.id === contentBlock.id,
  );

  if (contentBlockToUpdateIndex === -1) {
    throw new ContentBlockDomainError(
      CONTENT_BLOCKS_DOMAIN_ERROR_MESSAGES.INVALID_CONTENT_BLOCK_ID,
    );
  }

  currentTile.contentBlocks[contentBlockToUpdateIndex] = contentBlock;

  return rootTile;
};
