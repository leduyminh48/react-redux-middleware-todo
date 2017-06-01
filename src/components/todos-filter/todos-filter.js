import React from 'react';
import { connect } from 'react-redux';
import { Input } from '../'

import { toggleShowDone, updateTodoFilterValue } from 'actions';

const SimpleTodosFilter = (props) => {
  const {
    onShowDoneChange,
    onTodoSearchChange,
    showDoneTodos,
    todoSearchValue,
    onCancelClick
  } = props;
  return (
    <div>
      <input type="checkbox" onChange={onShowDoneChange} checked={showDoneTodos}/>
      <label
        className="ta-header__label">Show done</label>
      <Input
        value={todoSearchValue}
        onChange={onTodoSearchChange}
        onCancelClick={onCancelClick}
        onKeyDown={() => {}}
      />
    </div>
  )
};

const mapStateToProps = ({ todosFilter, showDoneTodos }) => ({
  showDoneTodos,
  todoSearchValue: todosFilter
});

const mapDispatchToProps = (dispatch) => ({
  onShowDoneChange: () => {
    dispatch(toggleShowDone());
  },
  onTodoSearchChange: (e) => {
    dispatch(updateTodoFilterValue(e.target.value));
  },
  onCancelClick: () => {
    dispatch(updateTodoFilterValue(''));
  }
});

export const TodosFilter = connect(
  mapStateToProps,
  mapDispatchToProps
)(SimpleTodosFilter);