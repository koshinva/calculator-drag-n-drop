export type TypeOperators = '+' | 'x' | '-' | '/';
export type TypeFigures = '0' | ',' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';

export interface IInitialState {
  firstNumber: string;
  secondNumber: string;
  currentOperator: TypeOperators | null;
  clickedEqualButton: boolean;
  displayedValue: string;
}