const CATEGORY_ACTIONS = {
  ADD_CATEGORY: 'ADD_CATEGORY',
  ADD_SUBCATEGORY: 'ADD_SUBCATEGORY',
  TOGGLE_SUBCATEGORIES: 'TOGGLE_SUBCATEGORIES',
  DELETE_CATEGORY: 'DELETE_CATEGORY',
  ENABLE_EDITING_CATEGORY:  'ENABLE_EDITING_CATEGORY',
  UPDATE_CATEGORY_NAME: 'UPDATE_CATEGORY_NAME',
  UPDATE_ADD_CATEGORY_VALUE: 'UPDATE_ADD_CATEGORY_VALUE'
};

const addRootCategory = ({ name }) => ({
  type: CATEGORY_ACTIONS.ADD_CATEGORY,
  payload: {
    id: `${new Date().getTime()}`,
    name,
    parentId: null
  }
});

const addSubcategory = ({ name, parentId }) => ({
  type: CATEGORY_ACTIONS.ADD_SUBCATEGORY,
  payload: {
    id: `${new Date().getTime()}`,
    parentId,
    name,
    isEditing: true
  }
});

const toggleSubcategories = (id) => ({
  type: CATEGORY_ACTIONS.TOGGLE_SUBCATEGORIES,
  payload: { id }
});

const enableEditingCategory = (id) => ({
  type: CATEGORY_ACTIONS.ENABLE_EDITING_CATEGORY,
  payload: { id }
});

const updateCategoryName = ({ id, name })  => ({
  type: CATEGORY_ACTIONS.UPDATE_CATEGORY_NAME,
  payload: { id, name }
});

const deleteCategory = (id)  => ({
  type: CATEGORY_ACTIONS.DELETE_CATEGORY,
  payload: { id }
});

const updateAddCategoryInputValue = (value) => ({
  type: CATEGORY_ACTIONS.UPDATE_ADD_CATEGORY_VALUE,
  payload: { value }
});

export {
  CATEGORY_ACTIONS,
  addRootCategory,
  addSubcategory,
  toggleSubcategories,
  enableEditingCategory,
  updateCategoryName,
  deleteCategory,
  updateAddCategoryInputValue
}