import { createSlice } from '@reduxjs/toolkit';

interface IInitialState {
  isConstructorMode: boolean;
}

const initialState: IInitialState = {
  isConstructorMode: true,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleConstructorMode(state) {
      state.isConstructorMode = !state.isConstructorMode;
    },
  },
});

export const { toggleConstructorMode } = appSlice.actions;

export default appSlice.reducer;
