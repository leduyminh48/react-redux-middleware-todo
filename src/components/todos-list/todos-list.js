import { connect } from 'react-redux';
import { SimpleTodosList } from './simple-todos-list';
import './todos-list.css'

import {
  toggleDoneTodo
} from 'actions';

import './todos-list.css';

const mapStateToProps = ({ todos, showDoneTodos, todosFilter = '' }, { categoryId }) => {
  let visibleTodos = todos
    .filter(todo => {
      const belongToCurrentCategory = todo.categoryId === categoryId;
      const visibleWhenDone = todo.isDone && showDoneTodos;
      return belongToCurrentCategory && (visibleWhenDone || !todo.isDone);
    })
    .filter(({description = '', name = ''}) => {
      return description.match(todosFilter) || name.match(todosFilter)
    });
  return {
    todos: visibleTodos
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClickDone: ({ id }) => {
      dispatch(toggleDoneTodo(id));
    }
  };
};

export const TodosList = connect(
  mapStateToProps,
  mapDispatchToProps
)(SimpleTodosList);