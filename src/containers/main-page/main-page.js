import React, { Component } from 'react';
import { CategoryList, InputWithButton, TodoList } from 'components'
import './main-page.css';

export class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newCategoryValue: '',
      newTodoValue:  '',
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
          id: '3',
          subcategories: [
            {
              name: 'Category 3-1',
              id: '3-1',
              subcategories: [
                {
                  name: 'Category 3-1-1',
                  id: '3-1-1',
                  subcategories: [
                    {
                      name: 'Category 3-1-1-1',
                      id: '3-1-1-1',
                    },
                    {
                      name: 'Category 3-1-1-2',
                      id: '3-1-1-2'
                    }
                  ]
                },
                {
                  name: 'Category 3-1-2',
                  id: '3-1-2'
                }
              ]
            },
            {
              name: 'Category 3-2',
              id: '3-2',
            },
            {
              name: 'Category 3-3',
              id: '3-3',
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
      ],
      todos: [
        {
          description: 'haha'
        },
        {
          description: 'haha'
        },
        {
          description: 'haha'
        }
      ]
    };

    this.onCategoryInputChange = this.onCategoryInputChange.bind(this);
    this.onCategoryInputCancel = this.onCategoryInputCancel.bind(this);
    this.onCategoryNameChanged = this.onCategoryNameChanged.bind(this);
    this.onTodoInputChange = this.onTodoInputChange.bind(this);
    this.onTodoInputCancel = this.onTodoInputCancel.bind(this);
  }

  render() {
    const { categories, todos } = this.state;

    return (
      <div className="ta-main-page">
        <div className="ta-main-page__container_left">
          <div className="ta-main-page__input">
            <InputWithButton
              value={this.state.newCategoryValue}
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
            categories={categories}/>
        </div>
        <div className="ta-main-page__container_right">
          <div className="ta-main-page__input ta-main-page__input_right">
            <InputWithButton
              value={this.state.newTodoValue}
              onInputChange={this.onTodoInputChange}
              onCancelClick={this.onTodoInputCancel}
              btnText='Add'
              onBtnClick={() => {}}
              placeholder='Enter todo description'/>
          </div>
          <TodoList
            onClickEdit={()=>{}}
            onClickDone={()=>{}}
            todos={todos}/>
        </div>
      </div>
    )
  }

  onTodoInputChange(e) {
    this.setState({
      newTodoValue: e.target.value
    });
  }

  onTodoInputCancel() {
    this.setState({
      newTodoValue: ''
    });
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
    //will be replace with server request in the future
    console.log(category.id);
  }
}

MainPage.propTypes = {
  categories: React.PropTypes.array
};