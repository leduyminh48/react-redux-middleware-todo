import { CATEGORY_ACTIONS } from 'actions';

export const addCategoryInputValue = (state = '', action) => {
  switch (action.type) {

    case CATEGORY_ACTIONS.UPDATE_ADD_CATEGORY_VALUE:
      return action.payload.value;

    default:
      return state;
  }
};