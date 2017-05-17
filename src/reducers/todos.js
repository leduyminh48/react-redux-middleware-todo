import { TODO_ACTIONS } from 'actions'

const mockCategories = [
  {
    id: '1',
    name: 'todo 1',
    categoryId: '3'
  },
  {
    id: '2',
    name: 'todo 2',
    categoryId: '3'
  },
  {
    id: '3',
    name: 'todo 3',
    categoryId: '3'
  }
];

const todo = (state, { type, payload }) => {
  switch (type) {

    case TODO_ACTIONS.ADD_TODO:
      return payload;

    case TODO_ACTIONS.TOGGLE_DONE_TODO:
      return {
        ...state,
        isDone: !state.isDone
      };

    case TODO_ACTIONS.UPDATE_TODO:
      return {
        ...state,
        ...payload
      };

    default:
      return state;
  }
};

export const todos = (state = mockCategories, { type, payload }) => {
  switch (type) {

    case TODO_ACTIONS.ADD_TODO:
      return [
        ...state,
        todo(undefined, { type, payload })
      ];

    case TODO_ACTIONS.TOGGLE_DONE_TODO:
    case TODO_ACTIONS.UPDATE_TODO:
      return state.map(item => {
        if (item.id !== payload.id) {
          return item;
        }
        return todo(item, { type, payload })
      });

    default:
      return state;
  }
};