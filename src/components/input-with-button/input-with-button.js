import React, { PureComponent } from 'react';
import './input-with-button.css';
import  { Input } from '../'

export class InputWithButton extends PureComponent {
  render() {
    const { onInputChange, onBtnClick, btnText, placeholder, value, onCancelClick } = this.props;
    return (
      <div className="ta-input-w-btn">
        <Input
          value={value}
          onCancelClick={onCancelClick}
          onChange={onInputChange}
          placeholder={placeholder}/>
        <button
          className="ta-input-w-btn__btn"
          onClick={onBtnClick}>
          {btnText}
        </button>
      </div>
    )
  }
}

InputWithButton.propTypes = {
  onInputChange: React.PropTypes.func.isRequired,
  onBtnClick: React.PropTypes.func.isRequired,
  btnText: React.PropTypes.string.isRequired,
  placeholder: React.PropTypes.string.isRequired
};