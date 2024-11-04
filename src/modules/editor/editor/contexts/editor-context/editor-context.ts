import { createContext } from "react";
import { useEditorSource } from "../../hooks";

export const EditorContext = createContext<ReturnType<typeof useEditorSource>>(
  {} as unknown as ReturnType<typeof useEditorSource>,
);
