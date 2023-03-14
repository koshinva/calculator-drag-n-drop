import * as appActions from './appSlice';
import * as calculateActions from './calculateSlice';

export const allActions = { ...appActions, ...calculateActions };