import { create } from "zustand";

type Layout = "layout1" | "layout2";

type LayoutStore = {
  layout: Layout;
  setLayout1: () => void;
  setLayout2: () => void;
};

export const useLayoutStore = create<LayoutStore>((set) => ({
  layout: "layout1",
  setLayout1: () => set({ layout: "layout1" }),
  setLayout2: () => set({ layout: "layout2" }),
}));
