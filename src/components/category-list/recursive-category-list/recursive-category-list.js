import React, { Component } from 'react';
import { CategoryItem, CategoryItemForAssigning } from 'components/category-item';

export class RecursiveCategoryList extends Component {
  render() {
    const {
      activeCategory,
      categories
    } = this.props;
    return (
      <ul className="ta-category-list">
        {
          categories.map((category, idx) => {
            const hasSubcategories = category.subcategories &&
              !!category.subcategories.length;
            return (
              <li
                className={
                  `ta-category-list__item
                  ${idx === 0 ? 'ta-category-list__item_first' : ''}`
                }
                key={category.id}>
                <CategoryItem
                  {...this.props}
                  isActive={category.id === activeCategory}
                  category={category}/>
                { hasSubcategories && !category.hideSubcategories &&
                <RecursiveCategoryList
                  {...this.props}
                  categories={category.subcategories}/>}
              </li>
            )
          })
        }
      </ul>
    )
  }
}

RecursiveCategoryList.propTypes = {
  categories: React.PropTypes.array.isRequired,
  onClickCategoryToggle: React.PropTypes.func.isRequired,
  onClickNameSave: React.PropTypes.func.isRequired,
  onClickNameEdit: React.PropTypes.func.isRequired,
  onClickAdd: React.PropTypes.func.isRequired,
  onClickDelete: React.PropTypes.func.isRequired,
  onClickItem: React.PropTypes.func.isRequired
};