import { createSlice } from '@reduxjs/toolkit';

import {
  IInitialState,
  TypeFigures,
  TypeOperators,
} from 'types/calculate.types';

import {
  calculating,
  setNumber,
  transformNumberToString,
} from 'utils/calculate.helpers';

const initialState: IInitialState = {
  firstNumber: '',
  secondNumber: '',
  currentOperator: null,
  clickedEqualButton: false,
  displayedValue: '0',
};

const calculateSlice = createSlice({
  name: 'calculate',
  initialState,
  reducers: {
    setFirstNumber(state, { payload }: { payload: TypeFigures }) {
      if (state.clickedEqualButton) {
        state.clickedEqualButton = false;
        state.firstNumber = '';
      }
      state.firstNumber = setNumber(state.firstNumber, payload);
      state.displayedValue = state.firstNumber || '0';
    },
    setSecondNumber(state, { payload }: { payload: TypeFigures }) {
      state.secondNumber = setNumber(state.secondNumber, payload);
      state.displayedValue = state.secondNumber || '0';
    },
    setCurrentOperator(state, { payload }: { payload: TypeOperators }) {
      state.currentOperator = payload;
    },
    setClickedEqualButton(state) {
      state.clickedEqualButton = true;
    },
    calculateResult(state) {
      if (state.firstNumber && state.secondNumber && state.currentOperator) {
        if (state.secondNumber === '0' && state.currentOperator === '/') {
          state.displayedValue = 'Не определено';
          state.firstNumber = '';
          state.secondNumber = '';
          state.currentOperator = null;
          return;
        }
        const result = calculating(
          Number(state.firstNumber),
          Number(state.secondNumber),
          state.currentOperator
        );
        state.firstNumber = transformNumberToString(result);
        state.secondNumber = '';
        state.currentOperator = null;
        state.displayedValue = transformNumberToString(result);
      }
    },
  },
});

export const {
  setFirstNumber,
  setSecondNumber,
  setCurrentOperator,
  calculateResult,
  setClickedEqualButton,
} = calculateSlice.actions;
export default calculateSlice.reducer;
