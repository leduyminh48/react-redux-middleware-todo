import React, { Component } from 'react';
import './progress-bar.css';

export class ProgressBar extends Component {
  render() {
    const { percentage } = this.props;
    const style = { width: percentage + '%' };

    return (
      <div className="ta-progress-bar">
        <div className="ta-progress-bar__fill" style={style}></div>
      </div>
    )
  }
}

ProgressBar.propTypes = {
  percentage: React.PropTypes.number.isRequired
};