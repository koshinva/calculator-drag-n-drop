import { useActions } from 'hooks/useActions';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { FC } from 'react';

import { eyeGray, selectorBlue } from '../utils/images';

import './SwitchMenu.css';

const SwitchMenu: FC = () => {
  const { toggleConstructorMode, resetCalculator } = useActions();
  const { isConstructorMode, canvas, sidebar } = useTypedSelector(
    state => state.app
  );

  const handleSwitchButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (sidebar.blocks.length !== canvas.blocks.length) return;

    toggleConstructorMode();
    
    resetCalculator();
  };

  return (
    <div className="switch-menu">
      <div className="switch-menu__toggle-buttons">
        <button
          className={`switch-menu__toggle-button toggle-button ${
            !isConstructorMode ? 'toggle-button_active' : ''
          } ${
            sidebar.blocks.length !== canvas.blocks.length
              ? 'cursor-default'
              : ''
          }`}
          onClick={handleSwitchButton}
        >
          <img
            className="toggle-button__icon"
            src={eyeGray}
            alt="runtime icon"
          />
          <p className="toggle-button__text">Runtime</p>
        </button>
        <button
          className={`switch-menu__toggle-button toggle-button ${
            isConstructorMode ? 'toggle-button_active' : ''
          }`}
          onClick={handleSwitchButton}
        >
          <img
            className="toggle-button__icon"
            src={selectorBlue}
            alt="constructor icon"
          />
          <p className="toggle-button__text">Constructor</p>
        </button>
      </div>
    </div>
  );
};

export default SwitchMenu;
