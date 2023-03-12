import { FC } from 'react';

const figures = ['0', ',', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const Figures: FC = () => {
  return (
    <div className="figures">
      <div className="figures__body">
        {figures.map((figure, index) => (
          <button
            className={`figures__button button-calculator ${
              figure === '0' ? 'figures__button_wide' : ''
            }`}
            key={index}
          >
            {figure}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Figures;
