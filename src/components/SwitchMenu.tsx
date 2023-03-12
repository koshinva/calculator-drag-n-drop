import { FC } from 'react';

import { eyeGray, selectorBlue } from '../utils/images';

import './SwitchMenu.css';

const SwitchMenu: FC = () => {
  return (
    <div className="switch-menu">
      <div className="switch-menu__toggle-buttons">
        <button className="switch-menu__toggle-button toggle-button">
          <img
            className="toggle-button__icon"
            src={eyeGray}
            alt="runtime icon"
          />
          <p className="toggle-button__text">Runtime</p>
        </button>
        <button className="switch-menu__toggle-button toggle-button toggle-button_active">
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
