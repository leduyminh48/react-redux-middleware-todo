import React, { Component } from 'react';
import { CategoryList, InputWithButton } from 'components'
import './categories.css';

export class CategoriesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newCategoryValue: '',
      categories: [
        {
          name: 'Category 1',
          id: '1'
        },
        {
          name: 'Category 2',
          id: '2'
        },
        {
          name: 'Category 3',
          id: '3'
        },
        {
          parentId: '3',
          name: 'Category 3-1',
          id: '3-1'
        },
        {
          parentId: '3',
          name: 'Category 3-2',
          id: '3-2'
        },
        {
          parentId: '3',
          name: 'Category 3-3',
          id: '3-3'
        },
        {
          parentId: '3-1',
          name: 'Category 3-1-1',
          id: '3-1-1'
        },
        {
          parentId: '3-1',
          name: 'Category 3-1-2',
          id: '3-1-2'
        },
        {
          parentId: '3-3',
          id: '3-3-1',
          name: 'Category 3-3-1'
        },
        {
          parentId: '3-3',
          id: '3-3-2',
          name: 'Category 3-3-2'
        },
        {
          parentId: '3-1-1',
          name: 'Category 3-1-1-1',
          id: '3-1-1-1',
        },
        {
          parentId: '3-1-1',
          name: 'Category 3-1-1-2',
          id: '3-1-1-2'
        }
      ]
    };

    this.onCategoryInputChange = this.onCategoryInputChange.bind(this);
    this.onCategoryInputCancel = this.onCategoryInputCancel.bind(this);
    this.onClickNameEdit = this.onClickNameEdit.bind(this);
    this.onCategoryNameChanged = this.onCategoryNameChanged.bind(this);
    this.onClickCategoryToggle = this.onClickCategoryToggle.bind(this);
  }

  render() {
    const { categories, newCategoryValue } = this.state;
    const categoriesAsList = this.formatCategories(categories);

    return (
      <div className="ta-categories-container">
          <div className="ta-categories-container__input">
            <InputWithButton
              value={newCategoryValue}
              onInputChange={this.onCategoryInputChange}
              onCancelClick={this.onCategoryInputCancel}
              btnText='Add'
              onBtnClick={() => {}}
              placeholder='Enter category title'/>
          </div>
          <CategoryList
            onClickNameEdit={this.onClickNameEdit}
            onClickNameSave={this.onCategoryNameChanged}
            onClickCategoryToggle={this.onClickCategoryToggle}
            onClickAdd={() => {}}
            onClickDelete={() => {}}
            onCategoryAdd={() => {}}
            categories={categoriesAsList}/>
      </div>
    )
  }

  onCategoryInputChange(e) {
    this.setState({
      newCategoryValue: e.target.value
    });
  }

  onCategoryInputCancel() {
    this.setState({
      newCategoryValue: ''
    });
  }

  onClickNameEdit({ id }) {
    this.updateCategoriesById(id, { isEditing: true });
  }

  onCategoryNameChanged({ id, name }) {
    this.updateCategoriesById(id, { name, isEditing: false });
  }

  onClickCategoryToggle({ id, hideSubcategories }) {
    this.updateCategoriesById(id, { hideSubcategories: !hideSubcategories });
  }

  updateCategoriesById(categoryId, changeObj) {
    const newCategories = this.state.categories.map(category => {
      if (category.id === categoryId) {
        return Object.assign({}, category, changeObj);
      }
      return Object.assign({}, category);
    });

    this.setState({
      categories: newCategories
    });
  }

  formatCategories(categories) {
    const rootCategories = categories.filter(category => !category.parentId);
    return this.putSubcategoriesIntoParents(rootCategories, categories);
  }

  putSubcategoriesIntoParents(rootCategories, categories) {
    rootCategories.forEach(rootCategory => {
      rootCategory.subcategories = categories.filter(category => category.parentId === rootCategory.id);
    });

    rootCategories.forEach(rootCategory => {
      this.putSubcategoriesIntoParents(rootCategory.subcategories, categories);
    });

    return rootCategories;
  }
}