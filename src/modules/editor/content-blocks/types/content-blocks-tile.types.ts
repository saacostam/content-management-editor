import { TContentBlock } from "./content-block";

export interface TContentBlockTile {
  id: string;
  contentBlocks: TContentBlock[];
  prefixPathIds: string[];
}
