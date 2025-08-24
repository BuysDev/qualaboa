import { create } from 'zustand'

interface FinalFilter {
    City: string | null
    State: string | null
    setCity: (code: string | null) => void
    setState: (code: string | null) => void
}

export const useFinalFilter = create<FinalFilter>((set) => ({
    City: null,
    setCity: (code) => set({ City: code }),
    State: null,
    setState: (code) => set({ State: code }),
}))