import React, { Component } from 'react';
import { CategoryItem } from '../'
import './category-list.css';
import { clone } from 'ramda';

export class CategoryList extends Component {
  categoryElements = {};

  constructor(props) {
    super(props);

    this.toggleSubcategories = this.toggleSubcategories.bind(this);
    this.editCategoryName = this.editCategoryName.bind(this);
    this.categories = clone(this.props.categories);
  }

  render() {

    const { onClickAdd, onClickDelete, onCategoryNameChange, onCategoryAdd } = this.props;

    return (
      <ul className="ta-category-list">
        {
          this.categories.map((category, idx) => {
            const hasSubcategories = category.subcategories &&
              category.subcategories.length;
            return (
              <li
                className={`ta-category-list__item ${idx === 0 ? 'ta-category-list__item_first' : ''}`}
                key={category.name}>
                <CategoryItem
                  ref={el => this.categoryElements[category.id] = el}
                  isEditing={category.isEditing}
                  onClickEdit={this.editCategoryName}
                  onClickToggle={this.toggleSubcategories}
                  onClickAdd={onClickAdd}
                  onClickDelete={onClickDelete}
                  isSubcategoriesShown={!category.hideSubcategories}
                  hasSubcategories={hasSubcategories}
                  category={category} />
                { hasSubcategories && !category.hideSubcategories &&
                <CategoryList
                  onClickAdd={onClickAdd}
                  onClickDelete={onClickDelete}
                  onCategoryAdd={onCategoryAdd}
                  onCategoryNameChange={onCategoryNameChange}
                  categories={category.subcategories}/>}
              </li>
            )
          })
        }
      </ul>
    )
  }

  editCategoryName(category) {
    const { onCategoryNameChange } = this.props;
    const selectedCatgory = this.getSelectedCategory(category);
    selectedCatgory.isEditing = !selectedCatgory.isEditing;
    this.categoryElements[category.id].focusOnName();
    if (!selectedCatgory.isEditing) {
      onCategoryNameChange(selectedCatgory);
    }
    this.forceUpdate();
  }

  toggleSubcategories(category) {
    const selectedCatgory = this.getSelectedCategory(category);
    selectedCatgory.hideSubcategories = !selectedCatgory.hideSubcategories;
    this.forceUpdate();
  }

  getSelectedCategory(category) {
    return this.categories.find(el => el.id === category.id);
  }
}

CategoryList.propTypes = {
  categories: React.PropTypes.array.isRequired,
  onCategoryNameChange: React.PropTypes.func.isRequired,
  onCategoryAdd: React.PropTypes.func.isRequired
};