import { create } from "zustand";

// Define the store
interface DndStore  {
    isLoading: boolean;
    setIsLoading: (isLoading:boolean) => void;
    
    profile: any;
    setProfile: (value: any) => void;
};

export const useDndStore = create<DndStore >((set) => ({
    isLoading: false,
    setIsLoading: (value: boolean) => set({isLoading: value}),

    profile: null,
    setProfile: (value: any) => set({profile: value}),
}));