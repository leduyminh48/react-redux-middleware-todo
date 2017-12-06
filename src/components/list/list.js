import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class List extends Component {
  render() {
    const { list } = this.props;

    return (
      <ul className="ta-list">
        { list.map((item, i) => <li key={i}>{ item }</li>) }
      </ul>
    )
  }
}

List.propTypes = {
  list: PropTypes.array.isRequired
};