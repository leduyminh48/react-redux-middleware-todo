import React, { PureComponent } from 'react';
import { TodoItem } from 'components';

export class SimpleTodosList extends PureComponent {
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

SimpleTodosList.propTypes = {
  onClickEdit: React.PropTypes.func,
  onClickDone: React.PropTypes.func,
  todos: React.PropTypes.array
};