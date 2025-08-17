import { create } from 'zustand'

interface StateStore {
    stateCode: string | null
    setStateCode: (code: string | null) => void
}

export const useStateStore = create<StateStore>((set) => ({
    stateCode: null,
    setStateCode: (code) => set({ stateCode: code }),
}))
