import { connect } from 'react-redux';
import { InputWithButton } from '../';

import {
  addTodo,
  updateAddTodoInputValue
} from 'actions';

const mapStateToProps = ({ addTodoInputValue }) => {
  return {
    value: addTodoInputValue
  };
};

const mapDispatchToProps = (dispatch, { categoryId }) => {
  return {
    onBtnClick: (description) => {
      dispatch(addTodo({ description, categoryId }));
      dispatch(updateAddTodoInputValue(''));
    },
    onInputChange: (e) => {
      dispatch(updateAddTodoInputValue(e.target.value));
    },
    onCancelClick: () => {
      dispatch(updateAddTodoInputValue(''));
    }
  };
};

export const AddTodo =  connect(
  mapStateToProps,
  mapDispatchToProps
)(InputWithButton);
