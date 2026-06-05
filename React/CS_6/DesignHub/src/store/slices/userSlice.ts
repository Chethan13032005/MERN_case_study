export interface UserSlice {
  user: { id: string; name: string } | null;
  setUser: (user: { id: string; name: string }) => void;
  clearUser: () => void;
}

export const createUserSlice = (set: any) => ({
  user: null,
  setUser: (user: any) => set({ user }),
  clearUser: () => set({ user: null }),
});