import { connect } from 'react-redux';
import { SimpleTodosList } from './simple-todos-list';
import './todos-list.css'

import {
  toggleDoneTodo
} from 'actions';

import './todos-list.css';


const mapStateToProps = ({ todos, showDone }, { categoryId }) => {
  return {
    todos: todos.filter(todo => todo.categoryId === categoryId)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClickDone: ({ id }) => {
      dispatch(toggleDoneTodo(id));
    },
    onClickEdit: () => {}
  };
};

export const TodosList = connect(
  mapStateToProps,
  mapDispatchToProps
)(SimpleTodosList);