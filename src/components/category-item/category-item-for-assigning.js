import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import FontAwesome from 'react-fontawesome';
import './category-item.css';

export class CategoryItemForAssigning extends PureComponent {
  constructor(props) {
    super(props);

    this.onClickAssigningBtn = this.onClickAssigningBtn.bind(this);
  }

  render() {
    const {
      isActive,
      category
    } = this.props;

    return (
      <div className="ta-category-item">
        <div className="ta-category-item__name-group">
          <span
            className="ta-category-item__name">
            {category.name}
          </span>
          {!isActive &&
          <span className="ta-category-item__icon">
            <FontAwesome name="mail-reply" onClick={this.onClickAssigningBtn}/>
          </span>}
        </div>
      </div>
    )
  }

  onClickAssigningBtn() {
    const {onClickAssigningBtn, category: { id }} = this.props;

    onClickAssigningBtn(id);
  }
}

CategoryItemForAssigning.propTypes = {
  category: PropTypes.object.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClickAssigningBtn: PropTypes.func.isRequired,
};