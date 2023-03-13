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
  blocks: Record<TypeKeyBlocks, IValueBlocks>;
  sidebar: IConstructor;
  canvas: IConstructor;
}
