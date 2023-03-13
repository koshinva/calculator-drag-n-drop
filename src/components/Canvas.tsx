import { useActions } from 'hooks/useActions';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { FC, useState } from 'react';
import { TypeKeyBlocks } from 'types';
import { canvasIcon } from 'utils/images';
import Block from './Block';

import './Canvas.css';

const Canvas: FC = () => {
  const [dragOverCanvas, setDragOverCanvas] = useState<boolean>(false);
  const { canvas, blocks } = useTypedSelector(store => store.app);
  const { addBlockInCanvas } = useActions();

  const handlerDragOverCanvas = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (!canvas.blocks.length) {
      setDragOverCanvas(true);
    }
  };

  const handlerDrugLeaveCanvas = () => {
    setDragOverCanvas(false);
  };

  const handlerDragOverBlock = (
    event: React.DragEvent<HTMLDivElement>,
    block: TypeKeyBlocks
  ) => {};

  const handlerDragLeaveBlock = (
    event: React.DragEvent<HTMLDivElement>,
    block: TypeKeyBlocks
  ) => {};

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    addBlockInCanvas();
    setDragOverCanvas(false);
  };

  return (
    <div
      className={`${
        !canvas.blocks.length ? 'canvas_empty' : 'canvas_no-empty'
      } ${dragOverCanvas ? 'canvas_bg_light-blue' : ''}`}
      onDragOver={handlerDragOverCanvas}
      onDragLeave={handlerDrugLeaveCanvas}
      onDrop={event => handleDrop(event)}
    >
      {!canvas.blocks.length ? (
        <>
          <img className="canvas__icon" src={canvasIcon} alt="canvas icon" />
          <h3 className="canvas__text-action">Перетащите сюда</h3>
          <p className="canvas__text">любой элемент из левой панели</p>
        </>
      ) : (
        <>
          {canvas.blocks.map(block => (
            <div
              onDragOver={event => handlerDragOverBlock(event, block)}
              onDragLeave={event => handlerDragLeaveBlock(event, block)}
              className="calculator-block"
            >
              <Block
                key={blocks[block].id}
                type={blocks[block].type as TypeKeyBlocks}
              />
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Canvas;
