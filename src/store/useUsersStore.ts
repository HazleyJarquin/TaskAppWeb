import { IUsers } from "hjarquin-cross/interfaces";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type UsersStore = {
  users: IUsers[] | null;
  setUsers: (users: IUsers[]) => void;
};

export const useUsersStore = create(
  persist<UsersStore>(
    (set) => ({
      users: null,
      setUsers: (users) => set({ users }),
    }),
    {
      name: "users-store",
    }
  )
);
