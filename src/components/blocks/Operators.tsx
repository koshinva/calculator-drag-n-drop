import { useActions } from 'hooks/useActions';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { FC } from 'react';
import { TypeOperators } from 'types/calculate.types';

import './Operators.css';

const operators = ['/', 'x', '-', '+'] as TypeOperators[];

const Operators: FC = () => {
  const { isConstructorMode } = useTypedSelector(store => store.app);
  const { currentOperator } = useTypedSelector(store => store.calculate);
  const { setCurrentOperator, calculateResult  } = useActions();

  const handleClick = (operator: TypeOperators) => {
    if (!currentOperator) {
      setCurrentOperator(operator);
      return;
    }
    calculateResult();
    setCurrentOperator(operator);
  }

  return (
    <div className="operators">
      <div className="operators__body">
        {operators.map((operator, index) => (
          <button
            className={`operators__button ${
              isConstructorMode ? 'pointer-events-none' : ''
            }`}
            key={index}
            onClick={() => handleClick(operator)}
          >
            {operator}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Operators;
