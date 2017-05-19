import { connect } from 'react-redux';
import { RecursiveCategoryList } from './recursive-category-list';
import { CategoryItemForAssigning } from 'components/category-item';
import { formatCategories } from './format-categories';


import './category-list.css';


const mapStateToProps = ({ categories }) => {
  return {
    categories: formatCategories(categories),
    itemComponent: CategoryItemForAssigning
  };
};

export const CategoriesListForAssigning = connect(
  mapStateToProps,
  null
)(RecursiveCategoryList);
