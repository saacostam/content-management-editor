import { EditorProvider } from "../contexts";
import { EditorContent } from "./editor-content";

export function Editor() {
  return (
    <EditorProvider>
      <EditorContent />
    </EditorProvider>
  );
}
