import { genId } from "../../../../utils.core";
import { TEditor } from "../../../editor";
import {
  CONTENT_BLOCKS_DOMAIN_ERROR_MESSAGES,
  ContentBlockDomainError,
} from "../../errors";
import {
  TContentBlock,
  TContentBlockTile,
  TContentBlockVariety,
  THeaderContentBlock,
  TParagraphContentBlock,
  TTiledContentBlock,
  TVideoContentBlock,
  TInitContentBlock,
} from "../../types";

export interface AddContentBlockFromEditor {
  initContentBlock: TInitContentBlock;
  prefixPathIds: string[];
  editor: TEditor;
}

export const addContentBlockFromEditor = ({
  initContentBlock,
  prefixPathIds,
  editor,
}: AddContentBlockFromEditor): TContentBlockTile => {
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

  const contentBlock = createContentBlock(initContentBlock);
  currentTile.contentBlocks.push(contentBlock);

  return rootTile;
};

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

export const createContentBlock = (
  initContentBlock: TInitContentBlock,
): TContentBlock => {
  if (initContentBlock.variety === TContentBlockVariety.Header) {
    const headerContentBlock: THeaderContentBlock = {
      id: genId(),
      content: initContentBlock.content,
      variety: TContentBlockVariety.Header,
    };

    return headerContentBlock;
  } else if (initContentBlock.variety === TContentBlockVariety.Paragraph) {
    const paragraphContentBlock: TParagraphContentBlock = {
      id: genId(),
      content: initContentBlock.content,
      variety: TContentBlockVariety.Paragraph,
    };

    return paragraphContentBlock;
  } else if (initContentBlock.variety === TContentBlockVariety.Video) {
    const videoContentBlock: TVideoContentBlock = {
      id: genId(),
      url: initContentBlock.url,
      variety: TContentBlockVariety.Video,
    };

    return videoContentBlock;
  } else if (initContentBlock.variety === TContentBlockVariety.Tiled) {
    const tiledContentBlock: TTiledContentBlock = {
      id: genId(),
      contentBlocksTilesIds: [],
      variety: TContentBlockVariety.Tiled,
    };

    return tiledContentBlock;
  }

  throw new ContentBlockDomainError(
    CONTENT_BLOCKS_DOMAIN_ERROR_MESSAGES.INVALID_CONTENT_BLOCK_INITIALIZATION_TYPE,
  );
};
