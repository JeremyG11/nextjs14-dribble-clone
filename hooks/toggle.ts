import { create } from "zustand";

export type BlockType =
  | "index"
  | "image"
  | "text"
  | "video"
  | "pastwork"
  | "gallery";

type BoardDataType = {
  [key in BlockType]?:
    | {
        files: string[];
      }
    | string[];
};

export interface Block {
  isDrawerOpen: boolean;
  blockType: BlockType | null;
  boardData: BoardDataType;
  onOpenBlock: (type: BlockType) => void;
  setDrawerOpen: (isOpen: boolean) => void;
  updateFiles: (type: BlockType, files: string[]) => void;
}

export const useBlock = create<Block>((set) => ({
  isDrawerOpen: false,
  blockType: null,
  boardData: {},
  onOpenBlock: (type) => set({ blockType: type }),
  setDrawerOpen: (isOpen) => set({ isDrawerOpen: isOpen }),
  updateFiles: (type, files) =>
    set((state) => ({
      boardData: {
        ...state.boardData,
        [type]: {
          files,
        },
      },
    })),
}));
