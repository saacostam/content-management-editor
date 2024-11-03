import { PropsWithChildren } from "react";
import { EditorContext } from './editor-context';
import { useEditorSource } from "../../hooks";

export function EditorProvider({children}: PropsWithChildren) {
    return <EditorContext.Provider value={useEditorSource()}>
        {children}
    </EditorContext.Provider>
}
