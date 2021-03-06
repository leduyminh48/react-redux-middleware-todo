import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class RecursiveCategoryList extends Component {
  render() {
    const {
      activeCategory,
      categories,
      itemComponent: CategoryItem
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
                  categories={null}
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
  categories: PropTypes.array.isRequired,
  activeCategory: PropTypes.string.isRequired,
  itemComponent: PropTypes.func.isRequired
};