import React, { PureComponent } from 'react';
import { CategoriesList, AddRootCategory } from 'components'
import './categories.css';

export class Categories extends PureComponent {
  constructor(props) {
    super(props);

    this.onClickItem = this.onClickItem.bind(this);
  }

  render() {
    return (
      <div className="ta-categories-container">
          <div className="ta-categories-container__input">
            <AddRootCategory
              btnText='Add'
              placeholder='Enter category title'/>
          </div>
          <CategoriesList
            activeCategory={this.props.match.params.categoryId}
            onClickItem={this.onClickItem}
          />
      </div>
    )
  }

  onClickItem(category) {
    this.props.history.push(`/categories/${category.id}`);
  }
}