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
import { getTileByPrefixPaths } from "./get-tile-by-prefix-paths";

export interface AddContentBlockFromEditor {
  editor: TEditor;
  initContentBlock: TInitContentBlock;
  prefixPathIds: string[];
}

export const addContentBlockFromEditor = ({
  editor,
  initContentBlock,
  prefixPathIds,
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
