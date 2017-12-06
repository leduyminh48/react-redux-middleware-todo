import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './input-with-button.css';
import  { Input } from '../'

export class InputWithButton extends PureComponent {
  constructor(props) {
    super(props);

    this.onBtnClick = this.onBtnClick.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  render() {
    const { onInputChange, btnText, placeholder, value, onCancelClick } = this.props;
    return (
      <div className="ta-input-w-btn">
        <Input
          value={value}
          onCancelClick={onCancelClick}
          onChange={onInputChange}
          onKeyDown={this.onKeyDown}
          placeholder={placeholder}/>
        <button
          disabled={!value}
          className="ta-input-w-btn__btn"
          onClick={this.onBtnClick}>
          {btnText}
        </button>
      </div>
    )
  }

  onBtnClick() {
    const { value, onBtnClick } = this.props;
    onBtnClick(value);
  }

  onKeyDown(e) {
    if (e.keyCode === 13) {
      this.onBtnClick();
    }
  }
}

InputWithButton.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  onBtnClick: PropTypes.func.isRequired,
  btnText: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};