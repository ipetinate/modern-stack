import { create } from 'zustand'

type Token = {
  token: string | null
  setToken: (token: string) => void
  removeToken: () => void
}

export const useToken = create<Token>((set) => ({
  token: null,
  setToken: (token) => {
    localStorage.setItem('token', token)
    set({ token })
  },
  removeToken: () => {
    localStorage.removeItem('token')
    set({ token: null })
  }
}))
