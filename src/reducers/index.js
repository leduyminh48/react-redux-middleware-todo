import { combineReducers } from 'redux';

import { categories } from './categories';
import { todos } from './todos';
import { addCategoryInputValue } from './addCategoryInputValue';
import { addTodoInputValue } from './addTodoInputValue';
import { showDoneTodos } from './showDoneTodos';
import { todosFilter } from './todosFilter';
import { undoRedoCapability } from './undoRedoCapability';

import { reducer as form } from 'redux-form';


export const reducers = combineReducers({
  categories,
  todos,
  addCategoryInputValue,
  addTodoInputValue,
  showDoneTodos,
  todosFilter,
  undoRedoCapability,
  form
});