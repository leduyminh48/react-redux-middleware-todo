import React, { PureComponent } from 'react';
import './input.css';
import FontAwesome from 'react-fontawesome';

export class Input extends PureComponent {
  constructor(props) {
    super(props);

    this.onCancelClick = this.onCancelClick.bind(this);
  }

  render() {
    const { placeholder, value, onChange } = this.props;
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
  value: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  onCancelClick: React.PropTypes.func.isRequired,
};