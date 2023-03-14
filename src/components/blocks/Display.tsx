import { useTypedSelector } from 'hooks/useTypedSelector';
import { FC } from 'react';

import './Display.css';

const Display: FC = () => {
  const { displayedValue } = useTypedSelector(
    store => store.calculate
  );

  return (
    <div className="display">
      <div className="display__body">
        <p
          className={`display__content ${
            displayedValue.length > 8 ? 'text-[19px] leading-[22px]' : ''
          }`}
        >
          {displayedValue.replace('.', ',')}
        </p>
      </div>
    </div>
  );
};

export default Display;
