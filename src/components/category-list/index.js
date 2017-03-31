import React, { Component } from 'react';
import { CategoryItem } from '../'

export class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoriesList: this.props.categories || [
        {
          name: 'Category 1'
        },
        {
          name: 'Category 2'
        },
        {
          name: 'Category 3',
          subcategories: [
            {
              name: 'Category 3-1',
              subcategories: [
                {
                  name: 'Category 3-1-1',
                  subcategories: [
                    {
                      name: 'Category 3--1-1'
                    },
                    {
                      name: 'Category 3-4',
                    }
                  ]
                },
                {
                  name: 'Category 3-1-2'
                }
              ]
            },
            {
              name: 'Category 3-2'
            },
            {
              name: 'Category 3-3',

            }
          ]
        }
      ]
    }
  }

  render() {
    const { categoriesList } = this.state;

    return (
      <ul>
        {
          categoriesList.map(category => {
            return (
              <li key={category.name}>
                <CategoryItem category={category}/>
                {category.subcategories &&
                category.subcategories.length &&
                <CategoryList categories={category.subcategories}/>}
              </li>
            )
          })
        }
      </ul>
    )
  }
}

CategoryList.propTypes = {
  categories: React.PropTypes.array
};