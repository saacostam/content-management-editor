import { ContentBlocksTile } from "../../content-blocks";
import { useEditor } from "../contexts";

export function EditorContent() {
  const { editor } = useEditor();

  const { rootContentBlockTile } = editor;

  return (
    <section className="text-white">
      <ContentBlocksTile tile={rootContentBlockTile} />
    </section>
  );
}
