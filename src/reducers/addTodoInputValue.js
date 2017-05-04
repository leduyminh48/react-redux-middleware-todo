import { TODO_ACTIONS } from 'actions';

export const addTodoInputValue = (state = '', action) => {
  switch (action.type) {

    case TODO_ACTIONS.UPDATE_ADD_TODO_VALUE:
      return action.payload.value;

    default:
      return state;
  }
};