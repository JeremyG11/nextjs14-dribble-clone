import { create } from "zustand";

export type BlockType =
  | "index"
  | "image"
  | "text"
  | "video"
  | "pastwork"
  | "gallery";

export type FileData = {
  file: File;
  type: string;
};

export type BoardDataType = {
  [key in BlockType]?: {
    files: FileData[];
  };
};

export interface Block {
  isDrawerOpen: boolean;
  blockType: BlockType | null;
  boardData: BoardDataType;
  onOpenBlock: (type: BlockType) => void;
  setDrawerOpen: (isOpen: boolean) => void;
  updateFiles: (type: BlockType, files: FileData[]) => void;
  removeFile: (type: BlockType, index: number) => void;
  resetBoardData: () => void;
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
  removeFile: (type, index) =>
    set((state) => {
      const files = state.boardData[type]?.files || [];
      if (files.length > 0) {
        const newFiles = [...files];
        newFiles.splice(index, 1);
        return {
          boardData: {
            ...state.boardData,
            [type]: {
              files: newFiles,
            },
          },
        };
      }
      return state;
    }),
  resetBoardData: () => set({ boardData: {} }),
}));
