import { useTypedSelector } from 'hooks/useTypedSelector';
import { FC } from 'react';
import { TypeKeyBlocks } from 'types';
import Block from './Block';

import './SideBar.css';

const SideBar: FC = () => {
  const {isConstructorMode, blocks, sidebar} = useTypedSelector((store) => store.app)
  
  return (
    <div className={`sidebar ${isConstructorMode ? '' : 'sidebar_hidden'}`}>
      {sidebar.blocks.map(block => (
        <Block key={blocks[block].id} type={blocks[block].type as TypeKeyBlocks} />
      ))}
    </div>
  );
};

export default SideBar;
