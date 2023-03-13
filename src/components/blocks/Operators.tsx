import { useTypedSelector } from 'hooks/useTypedSelector';
import { FC } from 'react';

import './Operators.css';

const operators = ['/', 'x', '-', '+'];

const Operators: FC = () => {
  const { isConstructorMode } = useTypedSelector(store => store.app);
  return (
    <div className="operators">
      <div className="operators__body">
        {operators.map((operator, index) => (
          <button
            className={`operators__button ${
              isConstructorMode ? 'pointer-events-none' : ''
            }`}
            key={index}
          >
            {operator}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Operators;
