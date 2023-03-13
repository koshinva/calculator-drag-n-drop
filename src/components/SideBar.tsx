import { useActions } from 'hooks/useActions';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { FC } from 'react';
import { TypeKeyBlocks } from 'types';
import Block from './Block';

import './SideBar.css';

const SideBar: FC = () => {
  const { setCurrentDragBlock } = useActions();
  const { isConstructorMode, blocks, sidebar, canvas } = useTypedSelector(
    store => store.app
  );
  const handleDragStart = (
    event: React.DragEvent<HTMLDivElement>,
    block: TypeKeyBlocks
  ) => {
    setCurrentDragBlock(block);
  };

  return (
    <div className={`sidebar ${isConstructorMode ? '' : 'sidebar_hidden'}`}>
      {sidebar.blocks.map(block => (
        <div
          className={`calculator-block ${canvas.blocks.includes(block) ? 'opacity-40' : 'cursor-grab'}`}
          key={blocks[block].id}
          draggable={!canvas.blocks.includes(block)}
          onDragStart={event => handleDragStart(event, block)}
        >
          <Block type={blocks[block].type as TypeKeyBlocks} />
        </div>
      ))}
    </div>
  );
};

export default SideBar;
