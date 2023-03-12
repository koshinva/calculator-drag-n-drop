import { useTypedSelector } from 'hooks/useTypedSelector';
import { FC } from 'react';
import Display from './Display';
import Equal from './Equal';
import Figures from './Figures';
import Operators from './Operators';
import './SideBar.css';

const SideBar: FC = () => {
  const {isConstructorMode} = useTypedSelector((store) => store.app)
  return (
    <div className={`sidebar ${isConstructorMode ? '' : 'sidebar_hidden'}`}>
      <Display />
      <Operators />
      <Figures />
      <Equal />
    </div>
  );
};

export default SideBar;
