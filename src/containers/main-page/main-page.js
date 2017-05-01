import React, { Component } from 'react';
import { InputWithButton, TodoList } from 'components'
import { CategoriesContainer } from '../'
import './main-page.css';

export class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodoValue:  '',
      todos: [
        {
          id: 1,
          description: 'haha'
        },
        {
          id: 2,
          description: 'haha'
        },
        {
          id: 3,
          description: 'haha'
        }
      ]
    };

    this.onTodoInputChange = this.onTodoInputChange.bind(this);
    this.onTodoInputCancel = this.onTodoInputCancel.bind(this);
  }

  render() {
    const { todos, newTodoValue } = this.state;

    return (
      <div className="ta-main-page">
        <div className="ta-main-page__container_left">
          <CategoriesContainer/>
        </div>
        <div className="ta-main-page__container_right">
          <div className="ta-main-page__input ta-main-page__input_right">
            <InputWithButton
              value={newTodoValue}
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
}

MainPage.propTypes = {
  categories: React.PropTypes.array
};