import { createSlice } from '@reduxjs/toolkit';
import { IInitialState, TypeKeyBlocks } from 'types';
import { getRandomId } from 'utils/getRandomId';

const initialState: IInitialState = {
  isConstructorMode: true,
  currentDragBlock: null,
  currentDragField: 'sidebar',
  currentBlockUnderDrag: null,
  blocks: {
    display: { id: getRandomId(), type: 'display' },
    equal: { id: getRandomId(), type: 'equal' },
    operators: { id: getRandomId(), type: 'operators' },
    figures: { id: getRandomId(), type: 'figures' },
  },
  sidebar: {
    title: 'sidebar',
    blocks: ['display', 'operators', 'figures', 'equal'],
  },
  canvas: {
    title: 'constructor',
    blocks: [],
  },
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleConstructorMode(state) {
      state.isConstructorMode = !state.isConstructorMode;
    },
    setCurrentDragBlock(state, { payload }: { payload: TypeKeyBlocks }) {
      state.currentDragBlock = payload;
    },
    setCurrentDragField(state, { payload }: { payload: 'sidebar' | 'canvas' }) {
      state.currentDragField = payload;
    },
    setBlockUnderDrag(state, { payload }: { payload: TypeKeyBlocks | null }) {
      state.currentBlockUnderDrag = payload;
    },
    addBlockInCanvas(state) {
      if (state.currentDragBlock) {
        const indexBlockUnderDrop = state.canvas.blocks.findIndex(
          block => block === state.currentBlockUnderDrag
        );

        if (state.currentDragField === 'sidebar') {
          if (state.currentDragBlock === 'display') {
            state.canvas.blocks = [
              state.currentDragBlock,
              ...state.canvas.blocks,
            ];
            return;
          }

          if (indexBlockUnderDrop === -1) {
            state.canvas.blocks.push(state.currentDragBlock);
          } else {
            state.canvas.blocks = [
              ...state.canvas.blocks.slice(0, indexBlockUnderDrop),
              state.currentDragBlock,
              ...state.canvas.blocks.slice(indexBlockUnderDrop),
            ];
          }
        } else {
          const indexCurrentDragBlock = state.canvas.blocks.findIndex(
            block => block === state.currentDragBlock
          );
          if (state.currentDragBlock === state.currentBlockUnderDrag) {
            return;
          }

          state.canvas.blocks.splice(indexCurrentDragBlock, 1);

          state.canvas.blocks = [
            ...state.canvas.blocks.slice(0, indexBlockUnderDrop),
            state.currentDragBlock,
            ...state.canvas.blocks.slice(indexBlockUnderDrop),
          ];
        }
      }
    },
  },
});

export const {
  toggleConstructorMode,
  setCurrentDragBlock,
  addBlockInCanvas,
  setCurrentDragField,
  setBlockUnderDrag,
} = appSlice.actions;

export default appSlice.reducer;
