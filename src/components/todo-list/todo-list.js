import React, { PureComponent } from 'react';
import { TodoItem } from '../'

import './todo-list.css'

export class TodoList extends PureComponent {
  render() {
    const { onClickEdit, onClickDone, todos } = this.props;

    return (
      <ul>
        {
          todos.map(todo => {
            return (
              <li className="ta-todo-list__item" key={todo.id}>
                <TodoItem
                  onClickEdit={onClickEdit}
                  onClickDone={onClickDone}
                  todo={todo}/>
              </li>
            )
          })
        }
      </ul>
    )
  }
}

TodoList.propTypes = {
  onClickEdit: React.PropTypes.func,
  onClickDone: React.PropTypes.func,
  todos: React.PropTypes.array
};