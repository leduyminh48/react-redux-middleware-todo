import React, { Component } from 'react';
import { CategoryItem } from '../'
import './category-list.css';

export class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: this.props.categories
    };

    this.toggleSubcategories = this.toggleSubcategories.bind(this);
    this.editCategoryName = this.editCategoryName.bind(this);
  }

  render() {
    const { categories } = this.state;

    return (
      <ul className="ta-category-list">
        {
          categories.map((category, idx) => {
            const hasSubcategories = category.subcategories &&
              category.subcategories.length;
            return (
              <li
                className={`ta-category-list__item ${idx === 0 ? 'ta-category-list__item_first' : ''}`}
                key={category.name}>
                <CategoryItem
                  isEditing={category.isEditing}
                  onClickEdit={this.editCategoryName}
                  onClickToggle={this.toggleSubcategories}
                  isSubcategoriesShown={!category.hideSubcategories}
                  hasSubcategories={hasSubcategories}
                  category={category} />
                { hasSubcategories && !category.hideSubcategories &&
                <CategoryList categories={category.subcategories}/>}
              </li>
            )
          })
        }
      </ul>
    )
  }

  editCategoryName(category) {
    category.isEditing = !category.isEditing;
    this.forceUpdate();
  }

  toggleSubcategories(category) {
    category.hideSubcategories = !category.hideSubcategories;
    this.forceUpdate();
  }
}

CategoryList.propTypes = {
  categories: React.PropTypes.array
};