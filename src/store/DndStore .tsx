import { create } from "zustand";
import { doc, updateDoc } from "firebase/firestore"; // Import updateDoc
import { db } from "../firebaseConfig";
import { Profile } from "../entities/profile";

interface DndStore {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;

  tabValue: number;
  setTabValue: (newValue: number) => void;

  profile: Profile | null;
  setProfile: (value: Profile | null) => void;

  updateProfile: (updates: Partial<Profile>) => Promise<void>;
}

export const useDndStore = create<DndStore>((set, get) => ({
  isLoading: false,
  setIsLoading: (value) => set({ isLoading: value }),

  tabValue: 0,
  setTabValue: (newValue) => set({ tabValue: newValue }),

  profile: null,
  setProfile: (value) => set({ profile: value }),

  updateProfile: async (updates) => {
    const currentProfile = get().profile;
    if (!currentProfile || !currentProfile.id) {
      console.error("Profile or profile ID is missing!");
      return;
    }

    try {
      // Merge the updates with the current profile data
      const updatedProfile = { ...currentProfile, ...updates };
      set({ profile: updatedProfile }); // Update Zustand state

      // Firebase update logic
      const docRef = doc(db, "characters", currentProfile.id); // Get the document reference
      await updateDoc(docRef, updates); // Update the document with the changes
    } catch (error) {
      console.error("Error updating profile in Firebase:", error);
    }
  },
}));
