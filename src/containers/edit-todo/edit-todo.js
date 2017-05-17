import React, { PureComponent } from 'react';
import { EditTodoForm } from 'components';

import { connect } from 'react-redux';
import { getCategoryRoute } from 'routes';

class EditTodo extends PureComponent {
  render() {
    const { match: { params }, afterSubmit } = this.props;
    return (
      <div className="ta-categories-container">
        <EditTodoForm todoId={params.todoId} afterSubmit={afterSubmit}/>
      </div>
    )
  }
}

const mapStateToProps = ({ todos }, { match : { params }, history }) => {
  const currentTodo = todos.find(todo => todo.id === params.todoId);
  return {
    afterSubmit: () => {
      currentTodo && history.push(getCategoryRoute(currentTodo.categoryId));
    }
  }
};

EditTodo = connect(
  mapStateToProps,
  null
)(EditTodo);

export { EditTodo };

