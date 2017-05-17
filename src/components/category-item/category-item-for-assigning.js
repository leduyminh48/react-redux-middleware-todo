import React, { PureComponent } from 'react';
import FontAwesome from 'react-fontawesome';
import './category-item.css';

export class CategoryItemForAssigning extends PureComponent {
  render() {
    const {
      isCurrentCategory,
      onClickAssigningBtn,
      category
    } = this.props;

    return (
      <div className="ta-category-item">
        <div className="ta-category-item__name-group">
          <span
            className="ta-category-item__name">
            {category.name}
          </span>
          {!isCurrentCategory &&
          <span className="ta-category-item__icon">
            <FontAwesome name="mail-reply" onClick={onClickAssigningBtn}/>
          </span>}
        </div>
      </div>
    )
  }
}

CategoryItemForAssigning.propTypes = {
  category: React.PropTypes.object.isRequired,
  isCurrentCategory: React.PropTypes.bool.isRequired,
  onClickAssigningBtn: React.PropTypes.func.isRequired,
};