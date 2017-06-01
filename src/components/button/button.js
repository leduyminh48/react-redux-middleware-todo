import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

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
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};