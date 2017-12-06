import { applyMiddleware } from 'redux';
import { undoRedo } from './undoRedo';

export const middlewares = applyMiddleware(undoRedo);
