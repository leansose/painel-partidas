import { create } from "zustand"

interface ScoreStore {
  home: number
  away: number
  addHome: () => void
  addAway: () => void
  reset: () => void
}

export const useScoreStore = create<ScoreStore>((set) => ({
  home: 0,
  away: 0,
  addHome: () => set((state) => ({ home: state.home + 1 })),
  addAway: () => set((state) => ({ away: state.away + 1 })),
  reset: () => set({ home: 0, away: 0 }),
}))