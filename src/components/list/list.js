import React, { Component } from 'react';

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
  list: React.PropTypes.array.isRequired
};