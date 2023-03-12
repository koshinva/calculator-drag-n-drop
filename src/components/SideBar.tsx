import { FC } from 'react';
import Display from './Display';
import Equal from './Equal';
import Figures from './Figures';
import Operators from './Operators';
import './SideBar.css';

const SideBar: FC = () => {
  return (
    <div className="sidebar">
      <Display />
      <Operators />
      <Figures />
      <Equal />
    </div>
  );
};

export default SideBar;
