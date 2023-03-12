import { useTypedSelector } from 'hooks/useTypedSelector';
import { FC } from 'react';

const operators = ['/', 'x', '-', '+'];

const Operators: FC = () => {
  const { isConstructorMode } = useTypedSelector(store => store.app);
  return (
    <div className="operators">
      <div className="operators__body">
        {operators.map((o, index) => (
          <button
            className={`operators__button button-calculator ${
              isConstructorMode ? 'button-calculator_pointer_none' : ''
            }`}
            key={index}
          >
            {o}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Operators;
