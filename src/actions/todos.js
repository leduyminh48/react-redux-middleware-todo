export const TODO_ACTIONS = {
  ADD_TODO: 'ADD_TODO',
  TOGGLE_DONE_TODO: 'TOGGLE_DONE_TODO',
  UPDATE_TODO: 'UPDATE_TODO',
  UPDATE_ADD_TODO_VALUE: 'UPDATE_ADD_TODO_VALUE'
};

export const addTodo = ({ description, categoryId }) => ({
  type: TODO_ACTIONS.ADD_TODO,
  payload: {
    id: new Date().getTime(),
    description,
    categoryId,
    isDone: false
  }
});

export const toggleDoneTodo = (id) => ({
  type: TODO_ACTIONS.TOGGLE_DONE_TODO,
  payload: { id }
});

export const updateTodo = (newTodoValue) => ({
  type: TODO_ACTIONS.ENABLE_EDITING_CATEGORY,
  payload: { ...newTodoValue }
});

export const updateAddTodoInputValue = (value) => ({
  type: TODO_ACTIONS.UPDATE_ADD_TODO_VALUE,
  payload: { value }
});