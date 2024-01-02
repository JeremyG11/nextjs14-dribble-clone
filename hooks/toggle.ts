import { create } from "zustand";

export type BlockType =
  | "index"
  | "image"
  | "text"
  | "video"
  | "pastwork"
  | "gallery";
export type FileType = "image" | "video";

export interface ImageBlock {
  id: number;
  type: "image";
  items: File[];
}

export interface TextBlock {
  id: number;
  type: "text";
  items: string[];
}

export interface VideoBlock {
  id: number;
  type: "video";
  items: File[];
}

export interface PastWorkBlock {
  id: number;
  type: "pastwork";
  items: File[];
}

export interface GalleryItem {
  id: number;
  items: File[];
}

export interface GalleryBlock {
  id: number;
  type: "gallery";
  items: GalleryItem[];
}

export type BlockContents =
  | ImageBlock
  | TextBlock
  | VideoBlock
  | PastWorkBlock
  | GalleryBlock;

export interface Block {
  isDrawerOpen: boolean;
  blockType: BlockType | null;
  isOpen: boolean;
  blocks: BlockContents[];
  onOpenBlock: (type: BlockType) => void;
  setDrawerOpen: (isOpen: boolean) => void;
  addBoardBlock: (block: BlockContents) => void;
  removeBoardBlock: (id: number) => void;
}

export const useBlock = create<Block>((set) => ({
  isDrawerOpen: false,
  blockType: null,
  isOpen: false,
  blocks: [],
  onOpenBlock: (type) => set({ isOpen: true, blockType: type }),
  setDrawerOpen: (isOpen) => set({ isDrawerOpen: isOpen }),
  addBoardBlock: (block) => {
    set((state) => ({
      blocks: [...state.blocks, { ...block, id: state.blocks.length + 1 }],
    }));
  },
  removeBoardBlock: (id) => {
    set((state) => ({
      blocks: state.blocks.filter((block) => block.id !== id),
    }));
  },
}));

export default useBlock;
