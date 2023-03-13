import { FC } from 'react';

import './Display.css';

const Display: FC = () => {
  return (
    <div className="display" draggable={true}>
      <div className="display__body">0</div>
    </div>
  );
};

export default Display;