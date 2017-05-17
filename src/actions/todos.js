const TODO_ACTIONS = {
  ADD_TODO: 'ADD_TODO',
  TOGGLE_DONE_TODO: 'TOGGLE_DONE_TODO',
  UPDATE_TODO: 'UPDATE_TODO',
  UPDATE_ADD_TODO_VALUE: 'UPDATE_ADD_TODO_VALUE'
};

const addTodo = ({ name, categoryId }) => ({
  type: TODO_ACTIONS.ADD_TODO,
  payload: {
    id: `${new Date().getTime()}`,
    name,
    categoryId,
    isDone: false
  }
});

const toggleDoneTodo = (id) => ({
  type: TODO_ACTIONS.TOGGLE_DONE_TODO,
  payload: { id }
});

const updateTodo = (id, newTodoValue) => ({
  type: TODO_ACTIONS.UPDATE_TODO,
  payload: { id, ...newTodoValue }
});

const updateAddTodoInputValue = (value) => ({
  type: TODO_ACTIONS.UPDATE_ADD_TODO_VALUE,
  payload: { value }
});

export {
  TODO_ACTIONS,
  addTodo,
  toggleDoneTodo,
  updateTodo,
  updateAddTodoInputValue
}