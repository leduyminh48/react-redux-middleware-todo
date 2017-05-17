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
    this.onClickItem = this.onClickItem.bind(this);
  }

  render() {
    const {
      forAssigning,
      isActive,
      category
    } = this.props;

    const hasSubcategories = category.subcategories && category.subcategories.length;

    return (
      <div className={`
            ta-category-item
            ${ isActive ? 'ta-category-item_active' : ''}`}
           onClick={this.onClickItem}>

        {!!hasSubcategories &&
        <span className="ta-category-item__icon ta-category-item__icon_toggle">
          <FontAwesome
            name={category.hideSubcategories ? 'angle-right' : 'angle-down'}
            onClick={this.onClickToggle}/>
        </span>}

        {!category.isEditing &&
        <div className="ta-category-item__name-group">
          <span
            className="ta-category-item__name">
            {category.name}
          </span>
          <span className="ta-category-item__icon">
            <FontAwesome name="pencil" onClick={this.onClickNameEdit}/>
          </span>
        </div>}

        {category.isEditing &&
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

  onClickItem(e) {
    e.stopPropagation();
    this.props.onClickItem(this.props.category);
  }

  onClickToggle(e) {
    e.stopPropagation();
    this.props.onClickCategoryToggle(this.props.category);
  }

  onClickNameEdit(e) {
    e.stopPropagation();
    this.props.onClickNameEdit(this.props.category);
  }

  onClickNameSave(e) {
    e.stopPropagation();
    const newCategoryItem = {
      ...this.props.category,
      name: this.nameElement.value
    };

    this.props.onClickNameSave(newCategoryItem);
  }

  onClickDelete(e) {
    e.stopPropagation();
    this.props.onClickDelete(this.props.category);
  }

  onClickAdd(e) {
    e.stopPropagation();
    this.props.onClickAdd(this.props.category);
  }
}

CategoryItem.propTypes = {
  onClickNameSave: React.PropTypes.func.isRequired,
  onClickNameEdit: React.PropTypes.func.isRequired,
  onClickAdd: React.PropTypes.func.isRequired,
  onClickDelete: React.PropTypes.func.isRequired,
  onClickCategoryToggle: React.PropTypes.func.isRequired,
  onClickItem: React.PropTypes.func.isRequired,
  category: React.PropTypes.object.isRequired
};