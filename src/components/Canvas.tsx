import { FC } from 'react'
import { canvasIcon } from 'utils/images';

import './Canvas.css';

const Canvas: FC = () => {
  return (
    <div className="canvas">
      <img className="canvas__icon" src={canvasIcon} alt="canvas icon" />
      <h3 className="canvas__text-action">Перетащите сюда</h3>
      <p className="canvas__text">любой элемент из левой панели</p>
    </div>
  );
}

export default Canvas