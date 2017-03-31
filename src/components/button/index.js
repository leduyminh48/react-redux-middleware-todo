import React, { PureComponent } from 'react';
import './button.css';

export class Button extends PureComponent {
  render() {
    const { onClick, text } = this.props;

    return (
      <button className="ta-button" onClick={onClick}>
        {text}
      </button>
    )
  }
}

Button.propTypes = {
  onClick: React.PropTypes.func.isRequired,
  text: React.PropTypes.string.isRequired
};