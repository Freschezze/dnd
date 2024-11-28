import { create } from "zustand";

// Define the store
interface DndStore  {
    alignment: string;
    setAlignment: (value: string) => void;
};

export const useDndStore = create<DndStore >((set) => ({
    alignment: '',
    setAlignment: (value: string) => set({alignment: value}),
}));