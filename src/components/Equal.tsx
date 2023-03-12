import { useTypedSelector } from 'hooks/useTypedSelector';
import { FC } from 'react';

const Equal: FC = () => {
  const { isConstructorMode } = useTypedSelector(state => state.app);
  return (
    <div className="equal">
      <button
        className={`equal__button ${
          isConstructorMode ? 'equal__button_pointer_none' : ''
        }`}
      >
        =
      </button>
    </div>
  );
};

export default Equal;
