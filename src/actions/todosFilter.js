export const TODO_FILTER_ACTIONS = {
  TOGGLE_SHOW_DONE: 'TOGGLE_SHOW_DONE',
  UPDATE_TODO_FILTER_VALUE: 'UPDATE_TODO_FILTER_VALUE'
};

export const toggleShowDone = () => ({
  type: TODO_FILTER_ACTIONS.TOGGLE_SHOW_DONE,
  payload: {}
});

export const updateTodoFilterValue = (value) => ({
  type: TODO_FILTER_ACTIONS.UPDATE_TODO_FILTER_VALUE,
  payload: { value }
});