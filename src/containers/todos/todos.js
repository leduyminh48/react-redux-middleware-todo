import React, { PureComponent } from 'react';
import { TodosList, AddTodo } from 'components'

export class Todos extends PureComponent {
  render() {
    return (
      <div className="ta-categories-container">
        <div className="ta-main-page__input ta-main-page__input_right">
          <AddTodo
            btnText='Add'
            placeholder='Enter todo description'
            categoryId={this.props.match.params.categoryId}/>
        </div>
        <TodosList categoryId={this.props.match.params.categoryId}/>
      </div>
    )
  }
}