import { connect } from 'react-redux';
import { RecursiveCategoryList } from './recursive-category-list';

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
    categories: formatCategories(categories)
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

export const CategoriesList =  connect(
  mapStateToProps,
  mapDispatchToProps
)(RecursiveCategoryList);

function formatCategories(categories) { //TODO: use Immutable.js
  const rootCategories = categories
    .filter(category => !category.parentId)
    .map(category => ({...category})); //clone
  return putSubcategoriesIntoParents(rootCategories, categories);
}

function putSubcategoriesIntoParents(rootCategories, categories) {
  const rootCategoriesWithSubs = rootCategories.map(rootCategory => {
    return {
      ...rootCategory,
      subcategories: categories
        .filter(category => category.parentId === rootCategory.id)
        .map(category => ({...category})) //clone
    }
  });

  rootCategoriesWithSubs.forEach(rootCategoryWithSubs => {
    rootCategoryWithSubs.subcategories = putSubcategoriesIntoParents(rootCategoryWithSubs.subcategories, categories);
  });

  return rootCategoriesWithSubs;
}
