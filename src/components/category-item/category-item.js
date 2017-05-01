import React, { PureComponent } from 'react';
import FontAwesome from 'react-fontawesome';
import './category-item.css';

export class CategoryItem extends PureComponent {
  constructor(props) {
    super(props);

    this.onClickToggle = this.onClickToggle.bind(this);
    this.onClickNameEdit = this.onClickNameEdit.bind(this);
    this.onClickNameSave = this.onClickNameSave.bind(this);
    this.onClickAdd = this.onClickAdd.bind(this);
    this.onClickDelete = this.onClickDelete.bind(this);
  }

  render() {
    const {
      isEditing,
      isSubcategoriesShown,
      category
    } = this.props;

    const hasSubcategories = category.subcategories && category.subcategories.length;

    return (
      <div className="ta-category-item">
        {!!hasSubcategories &&
        <span className="ta-category-item__icon ta-category-item__icon_toggle">
            <FontAwesome
              name={isSubcategoriesShown ? 'angle-down' : 'angle-right'}
              onClick={this.onClickToggle}/>
          </span>}

        {!isEditing &&
        <div className="ta-category-item__name-group">
          <span
            className="ta-category-item__name">
            {category.name}
          </span>
          <span className="ta-category-item__icon">
            <FontAwesome name="pencil" onClick={this.onClickNameEdit}/>
          </span>
        </div>}

        {isEditing &&
        <div className="ta-category-item__name-group">
          <input
            autoFocus
            ref={el => this.nameElement = el}
            type="text"
            defaultValue={category.name}/>
          <span className="ta-category-item__icon">
            <FontAwesome name="check" onClick={this.onClickNameSave}/>
          </span>
        </div>}

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

  onClickNameEdit() {
    this.props.onClickNameEdit(this.props.category);
  }

  onClickNameSave() {
    const newCategoryItem = Object.assign({}, this.props.category, {
      name: this.nameElement.value
    });

    this.props.onClickNameSave(newCategoryItem);
  }

  onClickDelete() {
    this.props.onClickDelete(this.props.category);
  }

  onClickAdd() {
    this.props.onClickAdd(this.props.category);
  }
}

CategoryItem.propTypes = {
  onClickNameSave: React.PropTypes.func.isRequired,
  onClickNameEdit: React.PropTypes.func.isRequired,
  onClickAdd: React.PropTypes.func.isRequired,
  onClickDelete: React.PropTypes.func.isRequired,
  onClickToggle: React.PropTypes.func.isRequired,
  isSubcategoriesShown: React.PropTypes.bool.isRequired,
  category: React.PropTypes.object.isRequired
};