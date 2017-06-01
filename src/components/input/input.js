import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './input.css';
import FontAwesome from 'react-fontawesome';

export class Input extends PureComponent {
  constructor(props) {
    super(props);

    this.onCancelClick = this.onCancelClick.bind(this);
  }

  render() {
    const { placeholder, value, onChange, onKeyDown } = this.props;
    const cancelButton = value &&
      <div
        className="ta-input__icon"
        onClick={this.onCancelClick}>
        <FontAwesome
          name="times"/>
      </div>;

    return (
      <div className="ta-input__container">
        <input
          className="ta-input"
          type="text"
          onChange={onChange}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
          ref={el => this.inputElement = el}
          value={value}/>
        {cancelButton}
      </div>
    )
  }

  onCancelClick() {
    const { onCancelClick } = this.props;

    onCancelClick();
    this.inputElement.focus();
  }
}

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onCancelClick: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
};