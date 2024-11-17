import { ContentBlocksTile } from "../../content-blocks";
import { useEditor } from "../contexts";

export function EditorContent() {
  const { editor } = useEditor();

  const { rootContentBlockTileId, contentBlockTiles } = editor;

  const rootContentBlockTile = contentBlockTiles.find(
    (tile) => tile.id === rootContentBlockTileId,
  );

  if (!rootContentBlockTile) return null;

  return (
    <section className="text-white">
      <ContentBlocksTile tile={rootContentBlockTile} />
    </section>
  );
}
