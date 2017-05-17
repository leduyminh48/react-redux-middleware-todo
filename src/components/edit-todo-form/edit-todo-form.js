import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { updateTodo } from 'actions';

import './edit-todo-form.css';


class EditTodoForm extends Component {
  render() {
    return (
      <form className="ta-edit-todo-form" onSubmit={this.props.handleSubmit}>
        <div className="ta-edit-todo-form__btn-group">
          <button className="ta-edit-todo-form__btn" type="submit">Save</button>
          <button className="ta-edit-todo-form__btn" type="button" onClick={this.props.reset}>Cancel</button>
        </div>
        <label htmlFor="isDone">Is Done:</label>
        <Field name="isDone" component="input" type="checkbox"/>
        <div>
          <Field className="ta-edit-todo-form__input" name="name" component="input" type="text"/>
          <Field className="ta-edit-todo-form__input" name="description" component="textarea"/>
        </div>
      </form>
    );
  }
}

EditTodoForm = reduxForm({ form: 'editTodo' })(EditTodoForm);

const mapDispatchToProps = (dispatch, { todoId, afterSubmit }) => ({
  onSubmit: (values) => {
    dispatch(updateTodo(todoId, values));
    afterSubmit();
  }
});

const mapStateToProps = ({ todos }, { todoId }) => {
  return {
    initialValues: todos.find(todo => todo.id === todoId)
  }
};

EditTodoForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditTodoForm);

export { EditTodoForm };