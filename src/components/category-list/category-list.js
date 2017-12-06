import { connect } from 'react-redux';
import { RecursiveCategoryList } from './recursive-category-list';
import { CategoryItem } from 'components/category-item';
import { formatCategories } from './format-categories';

import {
  toggleSubcategories,
  enableEditingCategory,
  updateCategoryName,
  addSubcategory,
  deleteCategory
} from 'actions';

import './category-list.css';


const mapStateToProps = ({ categories }) => {
  return {
    categories: formatCategories(categories),
    itemComponent: CategoryItem
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClickCategoryToggle: ({ id }) => {
      dispatch(toggleSubcategories(id));
    },
    onClickNameSave: ({ id, name }) => {
      dispatch(updateCategoryName({ id, name }));
    },
    onClickNameEdit: ({ id }) => {
      dispatch(enableEditingCategory(id));
    },
    onClickAdd: ({ id }) => {
      dispatch(addSubcategory({
        name: '',
        parentId: id
      }));
    },
    onClickDelete: ({ id }) => {
      dispatch(deleteCategory(id));
    }
  };
};

export const CategoriesList = connect(
  mapStateToProps,
  mapDispatchToProps
)(RecursiveCategoryList);