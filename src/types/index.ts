export interface IValueBlocks {
  id: string;
  type: string;
}

export type TypeKeyBlocks = 'display' | 'equal' | 'operators' | 'figures';

export interface IConstructor {
  title: string;
  blocks: Array<TypeKeyBlocks>;
}

export interface IInitialState {
  isConstructorMode: boolean;
  currentDragBlock: null | TypeKeyBlocks;
  currentDragField: 'sidebar' | 'canvas' | null;
  blocks: Record<TypeKeyBlocks, IValueBlocks>;
  sidebar: IConstructor;
  canvas: IConstructor;
}
