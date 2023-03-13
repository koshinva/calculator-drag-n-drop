import { useTypedSelector } from 'hooks/useTypedSelector';
import { FC } from 'react';

import './Equal.css';

const Equal: FC = () => {
  const { isConstructorMode } = useTypedSelector(state => state.app);
  return (
    <div className="equal">
      <button
        className={`equal__button ${
          isConstructorMode ? 'pointer-events-none' : ''
        }`}
      >
        =
      </button>
    </div>
  );
};

export default Equal;
