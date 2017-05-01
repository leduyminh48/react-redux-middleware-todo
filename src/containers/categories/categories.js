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
    this.onCategoryNameChanged = this.onCategoryNameChanged.bind(this);
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
            onClickAdd={() => {}}
            onClickDelete={() => {}}
            onCategoryAdd={() => {}}
            onCategoryNameChange={this.onCategoryNameChanged}
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

  onCategoryNameChanged(category) {
    const selectedCategory = this.getSelectedCategory(category);

    selectedCategory.name = category.name;

    this.forceUpdate();
  }

  getSelectedCategory(categoryToFind) {
    return this.state.categories.find(category => category.id === categoryToFind.id);
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