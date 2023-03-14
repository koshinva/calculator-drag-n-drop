import appReducer from './appSlice';
import calculateReducer from './calculateSlice';

export const reducers = {
  app: appReducer,
  calculate: calculateReducer,
};
