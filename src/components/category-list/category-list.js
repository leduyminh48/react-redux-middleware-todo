import React, { Component } from 'react';
import { CategoryItem } from '../'
import './category-list.css';

export class CategoryList extends Component {
  categoryElements = {};

  constructor(props) {
    super(props);

    this.toggleSubcategories = this.toggleSubcategories.bind(this);
    this.editCategoryName = this.editCategoryName.bind(this);
    this.state = {
      categories: this.props.categories.slice(0)
    }
  }

  render() {
    const { onClickAdd, onClickDelete, onCategoryNameChange, onCategoryAdd } = this.props;
    const { categories } = this.state;

    return (
      <ul className="ta-category-list">
        {
          categories.map((category, idx) => {
            const hasSubcategories = category.subcategories &&
              !!category.subcategories.length;
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
    const selectedCategory = this.getSelectedCategory(category);

    selectedCategory.isEditing = !selectedCategory.isEditing;

    if (!selectedCategory.isEditing) {
      onCategoryNameChange(category);
    } else {
      this.categoryElements[category.id].focusOnName();
    }

    this.forceUpdate();
  }

  toggleSubcategories(category) {
    const selectedCategory = this.getSelectedCategory(category);
    selectedCategory.hideSubcategories = !selectedCategory.hideSubcategories;
    this.forceUpdate();
  }

  getSelectedCategory(category) {
    return this.state.categories.find(el => el.id === category.id);
  }

}

CategoryList.propTypes = {
  categories: React.PropTypes.array.isRequired,
  onCategoryNameChange: React.PropTypes.func.isRequired,
  onCategoryAdd: React.PropTypes.func.isRequired
};