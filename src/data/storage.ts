import { create } from "zustand";
import { InitialState, AppState, initialState } from "./state";

const getInitialStorageState = (): InitialState => {
  return initialState;
};

export const useAppState = create<AppState>()((set) => ({
  ...getInitialStorageState(),
  setName: (name) => {
    set((state) => ({ ...state, name }));
  },
}));
