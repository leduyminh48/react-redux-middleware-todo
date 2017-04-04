import React, { PureComponent } from 'react';
import FontAwesome from 'react-fontawesome';
import './category-item.css';

export class CategoryItem extends PureComponent {
  constructor(props) {
    super(props);

    this.onClickToggle = this.onClickToggle.bind(this);
    this.onClickEdit = this.onClickEdit.bind(this);
    this.onClickAdd = this.onClickAdd.bind(this);
    this.onClickDelete = this.onClickDelete.bind(this);
  }

  render() {
    const {
      hasSubcategories,
      category,
      isEditing,
      isSubcategoriesShown
    } = this.props;


    return (
      <div className="ta-category-item">
        {hasSubcategories &&
        <span className="ta-category-item__icon ta-category-item__icon_toggle">
            <FontAwesome
              name={isSubcategoriesShown ? 'angle-down' : 'angle-right'}
              onClick={this.onClickToggle}/>
          </span>}
        <span
          className="ta-category-item__name"
          contentEditable={isEditing}
          ref={el => this.nameElement = el}>
          {category.name}
        </span>
        <span className="ta-category-item__icon">
          <FontAwesome name={isEditing ? 'check' : 'pencil'} onClick={this.onClickEdit}/>
        </span>
        <span className="ta-category-item__icon ta-category-item__icon_right">
          <FontAwesome name='trash' onClick={this.onClickDelete}/>
        </span>
        <span className="ta-category-item__icon ta-category-item__icon_right">
          <FontAwesome name='plus-square-o' onClick={this.onClickAdd}/>
        </span>
      </div>
    )
  }

  onClickToggle() {
    this.props.onClickToggle(this.props.category);
  }

  onClickEdit() {
    this.props.onClickEdit(this.props.category);
    setTimeout(() => { //bug with contenteditable
      this.nameElement.focus();
    }, 0);
  }

  onClickDelete() {
    this.props.onClickDelete(this.props.category);
  }

  onClickAdd() {
    this.props.onClickAdd(this.props.category);
  }
}

CategoryItem.propTypes = {
  onClickEdit: React.PropTypes.func,
  onClickAdd: React.PropTypes.func,
  onClickDelete: React.PropTypes.func,
  onClickToggle: React.PropTypes.func,
  isSubcategoriesShown: React.PropTypes.bool,
  category: React.PropTypes.object
};