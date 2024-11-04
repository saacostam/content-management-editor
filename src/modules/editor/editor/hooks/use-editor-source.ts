import { useCallback, useMemo, useState } from "react";
import { initEditor } from "../domain";
import { TInitContentBlock, addContentBlockFromRootTile } from "../../content-blocks";

export function useEditorSource() {
    const [editor] = useState(initEditor());

    const addContentBlock = useCallback((args: {
        initContentBlock: TInitContentBlock,
        prefixPathIds: string[],
    }) => addContentBlockFromRootTile({
        rootTile: editor.rootContentBlockTile,
        initContentBlock: args.initContentBlock,
        prefixPathIds: args.prefixPathIds,
    }), [editor.rootContentBlockTile]);

    return useMemo(() => ({
        addContentBlock,
        editor,
    }), [
        addContentBlock,
        editor,
    ]);
}
