import { combineReducers } from 'redux';
import { categories } from './categories';
import { todos } from './todos';
import { addCategoryInputValue } from './addCategoryInputValue';
import { addTodoInputValue } from './addTodoInputValue';

export const todoApp = combineReducers({
  categories,
  todos,
  addCategoryInputValue,
  addTodoInputValue
});