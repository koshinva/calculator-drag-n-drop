import { FC } from 'react';
import { TypeKeyBlocks } from 'types';
import Display from './blocks/Display';
import Equal from './blocks/Equal';
import Figures from './blocks/Figures';
import Operators from './blocks/Operators';

interface IBlockProps {
  type: TypeKeyBlocks;
}

const Block: FC<IBlockProps> = ({ type }) => {
  if (type === 'display') return <Display />;
  if (type === 'equal') return <Equal />;
  if (type === 'operators') return <Operators />;
  if (type === 'figures') return <Figures />;
  return null;
};

export default Block;
