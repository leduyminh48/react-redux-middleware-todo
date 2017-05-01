import React, { Component } from 'react';
import { CategoryItem } from '../'
import './category-list.css';

export class CategoryList extends Component {
  render() {
    const {
      onClickNameSave,
      onClickNameEdit,
      onClickCategoryToggle,
      onClickAdd,
      onClickDelete,
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
                className={`ta-category-list__item ${idx === 0 ? 'ta-category-list__item_first' : ''}`}
                key={category.name}>
                <CategoryItem
                  isEditing={category.isEditing}
                  onClickNameEdit={onClickNameEdit}
                  onClickNameSave={onClickNameSave}
                  onClickToggle={onClickCategoryToggle}
                  onClickAdd={onClickAdd}
                  onClickDelete={onClickDelete}
                  isSubcategoriesShown={!category.hideSubcategories}
                  category={category} />
                { hasSubcategories && !category.hideSubcategories &&
                <CategoryList
                  onClickCategoryToggle={onClickCategoryToggle}
                  onClickNameSave={onClickNameSave}
                  onClickNameEdit={onClickNameEdit}
                  onClickAdd={onClickAdd}
                  onClickDelete={onClickDelete}
                  categories={category.subcategories}/>}
              </li>
            )
          })
        }
      </ul>
    )
  }
}

CategoryList.propTypes = {
  categories: React.PropTypes.array.isRequired,
  onClickCategoryToggle: React.PropTypes.func.isRequired,
  onClickNameSave: React.PropTypes.func.isRequired,
  onClickNameEdit: React.PropTypes.func.isRequired,
  onClickAdd: React.PropTypes.func.isRequired,
  onClickDelete: React.PropTypes.func.isRequired
};