import { create } from 'zustand'

type Counter = {
  count: number
  setCount: (value: number) => void
}

export const useCounter = create<Counter>((set) => ({
  count: 0,
  setCount: (value) => set({ count: value })
}))
