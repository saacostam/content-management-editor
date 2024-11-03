import { genId } from "../../../../utils.core";
import { TContentBlockTile } from "../../types";

export const initContentBlocksTile = (): TContentBlockTile => {
    return {
        id: genId(),
        contentBlocks: [],
        prefixPathIds: [],
    };
}
