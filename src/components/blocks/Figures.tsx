import { useActions } from 'hooks/useActions';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { FC } from 'react';
import { TypeFigures } from 'types/calculate.types';

import './Figures.css';

const figures = ['0', ',', '1', '2', '3', '4', '5', '6', '7', '8', '9'] as TypeFigures[];

const Figures: FC = () => {
  const { isConstructorMode } = useTypedSelector(store => store.app);
  const { currentOperator } = useTypedSelector(store => store.calculate);
  const { setFirstNumber, setSecondNumber } = useActions();

  const checkClassButton = (figure: string): string => {
    return `figures__button ${figure === '0' ? 'figures__button_wide' : ''} ${
      isConstructorMode ? 'pointer-events-none' : ''
    }`;
  };

  const handleClick = (figure: TypeFigures) => {
    if (!currentOperator) return setFirstNumber(figure);
    setSecondNumber(figure)
  };

  return (
    <div className="figures">
      <div className="figures__body">
        {figures.map((figure) => (
          <button
            className={checkClassButton(figure)}
            key={figure}
            onClick={() => handleClick(figure)}
          >
            {figure}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Figures;
