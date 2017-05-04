import { CATEGORY_ACTIONS } from 'actions'

const mockCategories = [
  {
    name: 'Category 1',
    id: '1'
  },
  {
    name: 'Category 2',
    id: '2'
  },
  {
    name: 'Category 3',
    id: '3'
  },
  {
    parentId: '3',
    name: 'Category 3-1',
    id: '3-1'
  },
  {
    parentId: '3',
    name: 'Category 3-2',
    id: '3-2'
  },
  {
    parentId: '3',
    name: 'Category 3-3',
    id: '3-3'
  },
  {
    parentId: '3-1',
    name: 'Category 3-1-1',
    id: '3-1-1'
  },
  {
    parentId: '3-1',
    name: 'Category 3-1-2',
    id: '3-1-2'
  },
  {
    parentId: '3-3',
    id: '3-3-1',
    name: 'Category 3-3-1'
  },
  {
    parentId: '3-3',
    id: '3-3-2',
    name: 'Category 3-3-2'
  },
  {
    parentId: '3-1-1',
    name: 'Category 3-1-1-1',
    id: '3-1-1-1',
  },
  {
    parentId: '3-1-1',
    name: 'Category 3-1-1-2',
    id: '3-1-1-2'
  }
];

const category = (state, { type, payload }) => {
  switch (type) {

    case CATEGORY_ACTIONS.ADD_CATEGORY:
    case CATEGORY_ACTIONS.ADD_SUBCATEGORY:
      return payload;

    case CATEGORY_ACTIONS.TOGGLE_SUBCATEGORIES:
      return {
        ...state,
        hideSubcategories: !state.hideSubcategories,
      };

    case CATEGORY_ACTIONS.ENABLE_EDITING_CATEGORY:
      return {
        ...state,
        isEditing: true,
      };

    case CATEGORY_ACTIONS.UPDATE_CATEGORY_NAME:
      return {
        ...state,
        name: payload.name,
        isEditing: false
      };

    default:
      return state;
  }
};

export const categories = (state = mockCategories, action) => {
  switch (action.type) {

    case CATEGORY_ACTIONS.ADD_SUBCATEGORY:
    case CATEGORY_ACTIONS.ADD_CATEGORY:
      return [
        ...state,
        category(undefined, action)
      ];

    case CATEGORY_ACTIONS.DELETE_CATEGORY:
      return state
        .filter(category => category.id !== action.payload.id)
        .map(category => ({...category}));

    case CATEGORY_ACTIONS.ENABLE_EDITING_CATEGORY:
    case CATEGORY_ACTIONS.TOGGLE_SUBCATEGORIES:
    case CATEGORY_ACTIONS.UPDATE_CATEGORY_NAME:
      return state.map(item => {
        if (item.id !== action.payload.id) {
          return item;
        }
        return category(item, action)
      });

    default:
      return state;
  }
};