import React from 'react';
import './header.css';
import logo from '../../assets/images/logo.svg'
import { TodosFilter } from '../'

export const Header = () => {
  return (
    <div className="ta-header">
      <h1>
        <a className="ta-logo" href="#">
          <img
            className="ta-logo__image"
            src={logo}
            alt="Todo App Logo"
            title="React Todo App"/>
          <strong className="ta-logo__text">To-Do List</strong>
        </a>
      </h1>
      <TodosFilter/>
    </div>
  )
};