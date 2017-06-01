import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import { Header, ProgressBar } from 'components'
import { Categories, CategoriesForAssigning, Todos, EditTodo } from '../'
import { ROUTES } from 'routes';
import './main-page.css';

export class MainPage extends Component {

  render() {
    return (
      <div className="ta-main-page">
        <Header/>
        <ProgressBar percentage={80}/><br/>
        <div className="ta-main-page__body">
          <div className="ta-main-page__container_left">
            {[ROUTES.CATEGORY, ROUTES.ALL_CATEGORIES].map(path => <Route key={path} exact path={path} component={Categories}/>)}
            <Route exact path={ROUTES.TODO} component={CategoriesForAssigning}/>
          </div>
          <div className="ta-main-page__container_right">
            <Route exact path={ROUTES.CATEGORY} component={Todos}/>
            <Route exact path={ROUTES.TODO} component={EditTodo}/>
          </div>
        </div>
      </div>
    )
  }
}