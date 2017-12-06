export const UNDO_REDO_ACTIONS = {
  UNDO: 'UNDO',
  REDO: 'REDO',
  RESET: 'RESET'
};

export const undo = () => ({ type: UNDO_REDO_ACTIONS.UNDO });
export const redo = () => ({ type: UNDO_REDO_ACTIONS.REDO });
export const reset = (payload) => ({ type: UNDO_REDO_ACTIONS.RESET, payload });