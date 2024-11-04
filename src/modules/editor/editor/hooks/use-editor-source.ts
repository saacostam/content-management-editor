import { useCallback, useMemo, useState } from "react";
import { TInitContentBlock, addContentBlockFromEditor } from "../../content-blocks";
import { initEditor } from "../domain";

export function useEditorSource() {
    const [editor, setEditor] = useState(initEditor());

    const addContentBlock = useCallback((args: {
        initContentBlock: TInitContentBlock,
        prefixPathIds: string[],
    }) => setEditor(prevEditor => ({
        ...prevEditor,
        rootContentBlockTile: addContentBlockFromEditor({
            initContentBlock: args.initContentBlock,
            prefixPathIds: args.prefixPathIds,
            editor: prevEditor,
        })
    })), []);

    return useMemo(() => ({
        addContentBlock,
        editor,
    }), [
        addContentBlock,
        editor,
    ]);
}
