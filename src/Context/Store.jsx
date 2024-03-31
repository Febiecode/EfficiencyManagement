import {create} from "zustand"

export const useRangeStore = create((set) => ({
    range: "",   
    updateRange: (newRange) => set({ range: newRange }),
}))