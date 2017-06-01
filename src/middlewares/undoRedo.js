import { UNDO_REDO_ACTIONS, TODO_ACTIONS, CATEGORY_ACTIONS, reset } from 'actions';

let savedStates = [];
let currentIdx = 0;

const {
  ADD_TODO,
  TOGGLE_DONE_TODO,
  UPDATE_TODO
} = TODO_ACTIONS;

const {
  ADD_CATEGORY,
  ADD_SUBCATEGORY,
  UPDATE_CATEGORY_NAME,
  DELETE_CATEGORY,
  TOGGLE_SUBCATEGORIES
} = CATEGORY_ACTIONS;

const todosActionsToSave = Object.values({
  ADD_TODO,
  TOGGLE_DONE_TODO,
  UPDATE_TODO
});

const categoriessActionsToSave = Object.values({
  ADD_CATEGORY,
  ADD_SUBCATEGORY,
  UPDATE_CATEGORY_NAME,
  DELETE_CATEGORY,
  TOGGLE_SUBCATEGORIES
});

const actionsToSave = [...todosActionsToSave, ...categoriessActionsToSave];

export const undoRedo = store => next => action => {
  if (!savedStates.length) {
    const { todos, categories } = store.getState();

    savedStates.push({ todos, categories });
  }

  switch(action.type) {
    case UNDO_REDO_ACTIONS.UNDO: {
      if (currentIdx > 0) {
        currentIdx--;
        next(reset({
          ...savedStates[currentIdx],
          undoAble: currentIdx > 0,
          redoAble: true
        }));
      }

      break;
    }

    case UNDO_REDO_ACTIONS.REDO: {
      if (currentIdx < savedStates.length - 1) {
        currentIdx++;
        next(reset({
          ...savedStates[currentIdx],
          redoAble: currentIdx < savedStates.length - 1,
          undoAble: true
        }));
      }

      break;
    }

    default:
      next(action);
      if (actionsToSave.includes(action.type)) {
        const { todos, categories } = store.getState(); //TODO: use Immutable.js

        savedStates = [...savedStates.slice(0, currentIdx + 1), { todos, categories }];
        currentIdx = savedStates.length - 1;
        next(reset({
          undoAble: true,
          redoAble: false
        }));
      }
  }
};
