import { createSlice } from '@reduxjs/toolkit';
import { IInitialState } from 'types';
import { getRandomId } from 'utils/getRandomId';


const initialState: IInitialState = {
  isConstructorMode: true,
  blocks: {
    display: { id: getRandomId(), type: 'display' },
    equal: { id: getRandomId(), type: 'equal' },
    operators: { id: getRandomId(), type: 'operators' },
    figures: { id: getRandomId(), type: 'figures' },
  },
  sidebar: {
    title: 'sidebar',
    blocks: ['display', 'operators', 'figures', 'equal']
  },
  canvas: {
    title: 'constructor',
    blocks: []
  }
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
