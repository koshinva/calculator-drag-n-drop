import { useActions } from 'hooks/useActions';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { FC, useState } from 'react';
import { TypeKeyBlocks } from 'types';
import { canvasIcon } from 'utils/images';
import Block from './Block';

import './Canvas.css';

const Canvas: FC = () => {
  const [dragOverEmptyCanvas, setDragOverEmptyCanvas] =
    useState<boolean>(false);
  const [dragOverFilledCanvas, setDragOverFilledCanvas] =
    useState<boolean>(false);
  useState<boolean>(false);
  const {
    canvas,
    blocks,
    currentBlockUnderDrag,
    currentDragField,
    isConstructorMode,
  } = useTypedSelector(store => store.app);
  const {
    addBlockInCanvas,
    setCurrentDragBlock,
    setCurrentDragField,
    setBlockUnderDrag,
    removeBlockFromCanvas,
  } = useActions();

  const handlerDragOverCanvas = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (!canvas.blocks.length) {
      setDragOverEmptyCanvas(true);
      return;
    }
    if (currentBlockUnderDrag === null && currentDragField === 'sidebar') {
      setDragOverFilledCanvas(true);
    } else {
      setDragOverFilledCanvas(false);
    }
  };

  const handlerDrugLeaveCanvas = () => {
    setDragOverEmptyCanvas(false);
    setDragOverFilledCanvas(false);
  };

  const handlerDragOverBlock = (
    event: React.DragEvent<HTMLDivElement>,
    block: TypeKeyBlocks
  ) => {
    event.preventDefault();
    if (block === 'display') return;
    setBlockUnderDrag(block);
  };

  const handlerDragLeaveBlock = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setBlockUnderDrag(null);
  };

  const handleDragStart = (block: TypeKeyBlocks) => {
    setCurrentDragBlock(block);
    setCurrentDragField('canvas');
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    addBlockInCanvas();
    setDragOverEmptyCanvas(false);
    setDragOverFilledCanvas(false);
    setBlockUnderDrag(null);
  };

  const handleDoubleClick = (block: TypeKeyBlocks) => {
    if (!isConstructorMode) return;
    removeBlockFromCanvas(block);
  }

  return (
    <div
      className={`${
        !canvas.blocks.length ? 'canvas_empty' : 'canvas_no-empty'
      } ${dragOverEmptyCanvas ? 'canvas_bg_light-blue' : ''} ${
        dragOverFilledCanvas ? 'canvas_last-child-blue-line' : ''
      }`}
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
              key={blocks[block].id}
              draggable={block !== 'display' && isConstructorMode}
              onDragOver={event => handlerDragOverBlock(event, block)}
              onDragLeave={event => handlerDragLeaveBlock(event)}
              onDragStart={() => handleDragStart(block)}
              onDoubleClick={() => handleDoubleClick(block)}
              className={`calculator-block ${
                block === currentBlockUnderDrag ? 'canvas__blue-line' : ''
              } ${
                isConstructorMode
                  ? block !== 'display'
                    ? 'cursor-grab'
                    : 'cursor-no-drop'
                  : 'cursor-auto'
              }`}
            >
              <Block type={blocks[block].type as TypeKeyBlocks} />
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Canvas;
