import React, { PureComponent } from 'react';
import './input.css';
import FontAwesome from 'react-fontawesome';

export class Input extends PureComponent {
  constructor(props) {
    super(props);

    this.onCancelClick = this.onCancelClick.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  render() {
    const { placeholder } = this.props;
    return (
      <div className="ta-input__container">
        <input
          className="ta-input"
          type="text"
          onChange={this.onInputChange}
          placeholder={placeholder}
          ref={el => this.textInput = el}/>
        <div
          className="ta-input__icon"
          ref={el => this.cancelIcon = el}
          onClick={this.onCancelClick}>
          <FontAwesome
            name="times"/>
        </div>
      </div>
    )
  }

  onInputChange() {
    const { onChange } = this.props;
    const val = this.textInput.value
    if (val) {
      this.showCancel();
    } else {
      this.hideCancel();
    }

    onChange && onChange(this.textInput.value);
  }

  onCancelClick() {
    this.textInput.value = '';
    this.textInput.focus();
    this.onInputChange();
  }

  showCancel() {
    this.cancelIcon.style.display = 'block';
  }

  hideCancel() {
    this.cancelIcon.style.display = 'none';
  }
}

Input.propTypes = {
  onChange: React.PropTypes.func,
};