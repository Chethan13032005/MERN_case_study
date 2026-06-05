import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export const useSessionStore = create(
  persist(
    (set) => ({
      userId: '',
      token: '',
      expiresAt: 0,
      role: 'user', 
      login: (userId, token, expiresAt) => set({ userId, token, expiresAt }),
      logout: () => set({ userId: '', token: '', expiresAt: 0, role: 'user' }),
    }),
    {
      name: 'user-session',
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({ userId: state.userId, token: state.token, role: state.role }),
      version: 2,
      migrate: (persisted, version) => {
       
        return persisted;
      },
    }
  )
);