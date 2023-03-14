import { useActions } from 'hooks/useActions';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { FC } from 'react';

import './Equal.css';

const Equal: FC = () => {
  const { isConstructorMode } = useTypedSelector(state => state.app);
  const { calculateResult, setClickedEqualButton } = useActions();

  const handleClick = () => {
    calculateResult();
    setClickedEqualButton();
  };

  return (
    <div className="equal">
      <button
        className={`equal__button ${
          isConstructorMode ? 'pointer-events-none' : ''
        }`}
        onClick={() => handleClick()}
      >
        =
      </button>
    </div>
  );
};

export default Equal;
