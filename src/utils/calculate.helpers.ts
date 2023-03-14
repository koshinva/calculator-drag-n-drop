import { TypeFigures, TypeOperators } from 'types/calculate.types';

export const calculating = (
  firstNumber: number,
  secondNumber: number,
  operator: TypeOperators
): number => {
  if (operator === '+') return firstNumber + secondNumber;
  if (operator === '-') return firstNumber - secondNumber;
  if (operator === 'x') return firstNumber * secondNumber;
  return firstNumber / secondNumber;
};

export const setNumber = (
  currentNumber: string,
  figure: TypeFigures
): string => {
  if (figure === ',' && (currentNumber.includes('.') || !currentNumber))
    return currentNumber;
  return currentNumber + figure.replace(',', '.');
};

export const transformNumberToString = (num: number): string => {
  return String(Number(Number(num).toFixed(15)));
};
