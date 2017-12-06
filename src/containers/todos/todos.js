import React, { PureComponent } from 'react';
import { TodosList, AddTodo } from 'components'
import { getTodoRoute } from 'routes';

export class Todos extends PureComponent {
  constructor(props) {
    super(props);

    this.onClickEdit = this.onClickEdit.bind(this);
  }
  render() {
    const categoryId = this.props.match.params.categoryId;

    return (
      <div className="ta-categories-container">
        <div className="ta-main-page__input ta-main-page__input_right">
          <AddTodo
            btnText='Add'
            placeholder='Enter todo name'
            categoryId={categoryId}/>
        </div>
        <TodosList categoryId={categoryId} onClickEdit={this.onClickEdit}/>
      </div>
    )
  }

  onClickEdit({ id }) {
    this.props.history.push(getTodoRoute(id));
  }
}