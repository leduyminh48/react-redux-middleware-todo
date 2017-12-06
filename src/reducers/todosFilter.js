import { TODO_FILTER_ACTIONS } from 'actions';

export const todosFilter = (state = '', { type, payload }) => {
  switch (type) {

    case TODO_FILTER_ACTIONS.UPDATE_TODO_FILTER_VALUE:
      return payload.value;

    default:
      return state;
  }
};