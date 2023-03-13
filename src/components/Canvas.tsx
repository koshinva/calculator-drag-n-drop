import { useTypedSelector } from 'hooks/useTypedSelector';
import { FC } from 'react';
import { TypeKeyBlocks } from 'types';
import { canvasIcon } from 'utils/images';
import Block from './Block';

import './Canvas.css';

const Canvas: FC = () => {
  const { sidebar, blocks } = useTypedSelector(store => store.app);
  const handlerDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };
  return (
    <div className="canvas" onDragOver={handlerDragOver}>
      {!sidebar.blocks.length ? (
        <>
          <img className="canvas__icon" src={canvasIcon} alt="canvas icon" />
          <h3 className="canvas__text-action">Перетащите сюда</h3>
          <p className="canvas__text">любой элемент из левой панели</p>
        </>
      ) : (
        <>
          {sidebar.blocks.map(block => (
            <Block
              key={blocks[block].id}
              type={blocks[block].type as TypeKeyBlocks}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default Canvas;
