import React, { PureComponent } from 'react';
import FontAwesome from 'react-fontawesome';

export class CategoryItem extends PureComponent {
  render() {
    const { onClickEdit, onClickAdd, onClickDelete, category } = this.props;

    return (
      <div className="ta-category-item">
        {category.name}
        <FontAwesome name='pencil' onClick={onClickEdit}/>
        <FontAwesome name='trash' onClick={onClickDelete}/>
        <FontAwesome name='plus-square-o' onClick={onClickAdd}/>
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