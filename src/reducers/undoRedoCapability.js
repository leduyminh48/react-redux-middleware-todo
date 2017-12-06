import { UNDO_REDO_ACTIONS } from 'actions'

export const undoRedoCapability = (state = { undoAble: false, redoAble: false }, { type, payload }) => {
  switch (type) {

    case UNDO_REDO_ACTIONS.RESET:
      const { undoAble, redoAble } = payload;
      return {
        undoAble,
        redoAble
      };

    default:
      return state;
  }
};