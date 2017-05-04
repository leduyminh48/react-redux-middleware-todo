import React from 'react';
import { Input } from '../'

export const TodosFilter = () => {
  return (
    <div>
      <input id="show-done-check" type="checkbox"/>
      <label
        className="ta-header__label"
        htmlFor="show-done-check">Show done</label>
      <Input value='' onChange={() => {
        console.log()
      }}/>
    </div>
  )
};