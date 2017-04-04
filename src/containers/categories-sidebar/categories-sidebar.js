import React, { Component } from 'react';
import { CategoryList, InputWithButton } from 'components'
import './categories-sidebar.css';

export class CategoriesSidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newCategoryValue: 'new',
      categories: [
        {
          name: 'Category 1',
          index: '1'
        },
        {
          name: 'Category 2',
          index: '2'
        },
        {
          name: 'Category 3',
          index: '3',
          subcategories: [
            {
              name: 'Category 3-1',
              index: '3-1',
              subcategories: [
                {
                  name: 'Category 3-1-1',
                  index: '3-1-1',
                  subcategories: [
                    {
                      name: 'Category 3-1-1-1',
                      index: '3-1-1-1',
                    },
                    {
                      name: 'Category 3-1-1-2',
                      index: '3-1-1-2'
                    }
                  ]
                },
                {
                  name: 'Category 3-1-2',
                  index: '3-1-2'
                }
              ]
            },
            {
              name: 'Category 3-2',
              index: '3-2',
            },
            {
              name: 'Category 3-3',
              index: '3-3',
              subcategories: [
                {
                  name: 'Category 3-3-1'
                },
                {
                  name: 'Category 3-3-2'
                }
              ]
            }
          ]
        }
      ]
    };

    this.onCategoryInputChange = this.onCategoryInputChange.bind(this);
    this.onCategoryInputCancel = this.onCategoryInputCancel.bind(this);
  }

  render() {
    const { categories } = this.state;

    return (
      <div className="ta-categories-sidebar">
        <div className="ta-categories-sidebar__input">
          <InputWithButton
            value={this.state.newCategoryValue}
            onInputChange={this.onCategoryInputChange}
            onCancelClick={this.onCategoryInputCancel}
            btnText={'Add'}
            onBtnClick={() => {}}
            placeholder='Enter category title'/>
        </div>
        <CategoryList categories={categories}/>
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
}

CategoriesSidebar.propTypes = {
  categories: React.PropTypes.array
};