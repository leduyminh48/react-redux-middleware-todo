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
      isEditing,
      isSubcategoriesShown,
      category
    } = this.props;

    return (
      <div className="ta-category-item">
        {hasSubcategories &&
          <span className="ta-category-item__icon ta-category-item__icon_toggle">
            <FontAwesome
              name={isSubcategoriesShown ? 'angle-down' : 'angle-right'}
              onClick={this.onClickToggle}/>
          </span>}

        {!isEditing &&
        <span
          className="ta-category-item__name">
          {category.name}
        </span>}

        {isEditing &&
        <input
          ref={el => this.nameElement = el}
          type="text"
          defaultValue={category.name}/>}

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

  focusOnName() {
    setTimeout(() => {
      this.nameElement && this.nameElement.focus();
    }, 0);
  }

  onClickEdit() {
    if (this.props.isEditing) {
      const newCategoryItem = Object.assign({}, this.props.category, {
        name: this.nameElement.value
      });
      this.props.onClickEdit(newCategoryItem);
    } else {
      this.props.onClickEdit(this.props.category);
    }
  }

  onClickDelete() {
    this.props.onClickDelete(this.category);
  }

  onClickAdd() {
    this.props.onClickAdd(this.category);
  }
}

CategoryItem.propTypes = {
  onClickEdit: React.PropTypes.func.isRequired,
  onClickAdd: React.PropTypes.func.isRequired,
  onClickDelete: React.PropTypes.func.isRequired,
  onClickToggle: React.PropTypes.func.isRequired,
  isSubcategoriesShown: React.PropTypes.bool.isRequired,
  category: React.PropTypes.object.isRequired
};