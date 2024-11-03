import { useCallback, useMemo, useState } from "react";
import { initEditor } from "../domain";
import { TContentBlock, addContentBlockFromRootTile } from "../../content-blocks";

export function useEditor() {
    const [editor] = useState(initEditor());

    const addContentBlock = useCallback((args: {
        contentBlock: TContentBlock,
        prefixPathIds: string[],
    }) => addContentBlockFromRootTile({
        rootTile: editor.rootContentBlockTile,
        contentBlock: args.contentBlock,
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
