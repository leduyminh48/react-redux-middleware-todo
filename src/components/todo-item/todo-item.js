import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import FontAwesome from 'react-fontawesome';
import './todo-item.css';

export class TodoItem extends PureComponent {

  constructor(props) {
    super(props);

    this.onClickEdit = this.onClickEdit.bind(this);
    this.onClickDone = this.onClickDone.bind(this);
  }
  render() {
    const { todo } = this.props;

    return (
      <div className="ta-todo-item">
        <input type="checkbox" onChange={this.onClickDone} defaultChecked={todo.isDone}/>
        <div className="ta-todo-item__text">
          <p>{todo.name}</p>
          <p className="ta-todo-item__text_blur">{todo.description}</p>
        </div>
        <FontAwesome name='pencil' onClick={this.onClickEdit}/>
      </div>
    )
  }

  onClickDone() {
    this.props.onClickDone(this.props.todo);
  }

  onClickEdit() {
    this.props.onClickEdit(this.props.todo);
  }
}

TodoItem.propTypes = {
  onClickEdit: PropTypes.func.isRequired,
  onClickDone: PropTypes.func.isRequired,
  todo: PropTypes.object
};