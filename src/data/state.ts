export interface InitialState {
  name: string;
}

export interface AppState extends InitialState {
  setName: (name: string) => void;
}

export const initialState: InitialState = {
  name: "",
};
