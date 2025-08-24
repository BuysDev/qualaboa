import { create } from 'zustand'

interface CityStore {
    CityCode: string | null
    setCityCode: (code: string | null) => void
}

export const useCityStore = create<CityStore>((set) => ({
    CityCode: null,
    setCityCode: (code) => set({ CityCode: code }),
}))
