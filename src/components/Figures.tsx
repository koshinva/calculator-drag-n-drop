import { useTypedSelector } from 'hooks/useTypedSelector';
import { FC } from 'react';

const figures = ['0', ',', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const Figures: FC = () => {
  const { isConstructorMode } = useTypedSelector(store => store.app);

  const checkClassButton = (figure: string): string => {
    return `figures__button button-calculator ${
      figure === '0' ? 'figures__button_wide' : ''
    } ${isConstructorMode ? 'button-calculator_pointer_none' : ''}`;
  };

  return (
    <div className="figures">
      <div className="figures__body">
        {figures.map((figure, index) => (
          <button className={checkClassButton(figure)} key={index}>
            {figure}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Figures;
