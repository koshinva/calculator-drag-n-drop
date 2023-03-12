import { FC } from 'react';
import './Calculator.css';
import Canvas from './Canvas';
import SideBar from './SideBar';
import SwitchMenu from './SwitchMenu';

const Calculator: FC = () => {
  return (
    <div className="calculator">
      <SwitchMenu />
      <div className="calculator__wrapper">
        <SideBar />
        <Canvas />
      </div>
    </div>
  );
};

export default Calculator;
