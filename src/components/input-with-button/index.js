import React, { PureComponent } from 'react';
import './input-with-button.css';
import  { Input } from '../'

export class InputWithButton extends PureComponent {
  render() {
    const { onInputChange, onBtnClick, btnText, placeholder } = this.props;
    return (
      <div className="ta-input-w-btn">
        <Input onChange={onInputChange} placeholder={placeholder}/>
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
  onInputChange: React.PropTypes.func,
  onBtnClick: React.PropTypes.func,
  btnText: React.PropTypes.string,
  placeholder: React.PropTypes.string
};