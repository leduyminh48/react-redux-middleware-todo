import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

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
  onClickEdit: PropTypes.func,
  onClickDone: PropTypes.func,
  todos: PropTypes.array
};