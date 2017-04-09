import React, { PureComponent } from 'react';
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
        <input type="checkbox" onClick={this.onClickDone}/>
        <div className="ta-todo-item__text">{todo.description}</div>
        <FontAwesome name='pencil' onClick={this.onClickEdit}/>
      </div>
    )
  }

  onClickDone() {
    this.props.onClickDone(this.props.todo);
  }

  onClickEdit() {
    this.props.onClickDone(this.props.todo);
  }
}

TodoItem.propTypes = {
  onClickEdit: React.PropTypes.func.isRequired,
  onClickDone: React.PropTypes.func.isRequired,
  todo: React.PropTypes.object
};