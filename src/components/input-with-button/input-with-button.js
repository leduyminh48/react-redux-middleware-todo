import React, { PureComponent } from 'react';
import './input-with-button.css';
import  { Input } from '../'

export class InputWithButton extends PureComponent {
  constructor(props) {
    super(props);

    this.onBtnClick = this.onBtnClick.bind(this);
  }

  render() {
    const { onInputChange, btnText, placeholder, value, onCancelClick } = this.props;
    return (
      <div className="ta-input-w-btn">
        <Input
          value={value}
          onCancelClick={onCancelClick}
          onChange={onInputChange}
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
}

InputWithButton.propTypes = {
  onInputChange: React.PropTypes.func.isRequired,
  onBtnClick: React.PropTypes.func.isRequired,
  btnText: React.PropTypes.string.isRequired,
  placeholder: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired
};