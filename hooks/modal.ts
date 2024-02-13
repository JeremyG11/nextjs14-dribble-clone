import { create } from "zustand";

export type ModalType = "publishShotModal" | "displayShotModal";

interface ShotData {
  id: string;
}

type ModalData = ShotData;

interface ModalStore {
  type: ModalType | null;
  isOpen: boolean;
  onOpen: (type: ModalType) => void;
  onClose: () => void;
  data: ModalData | null;
  setData: (data: ModalData) => void;
}

export const useModal = create<ModalStore>((set) => ({
  type: null,
  isOpen: false,
  data: null,
  onOpen: (type) => set({ isOpen: true, type }),
  onClose: () => set({ type: null, isOpen: false }),
  setData: (data) => set({ data }),
}));
