import React, { PureComponent } from 'react';
import FontAwesome from 'react-fontawesome';

export class CategoryItem extends PureComponent {
  render() {
    const { onClickEdit, onClickDone, todo } = this.props;

    return (
      <div className="ta-todo-item">
        <input type="checkbox" onClick={onClickDone}/>
        {todo.description}
        <FontAwesome name='pencil' onClick={onClickEdit}/>
      </div>
    )
  }
}

CategoryItem.propTypes = {
  onClickEdit: React.PropTypes.func,
  onClickAdd: React.PropTypes.func,
  onClickDelete: React.PropTypes.func,
  category: React.PropTypes.object
};