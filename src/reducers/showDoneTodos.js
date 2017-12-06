import { TODO_FILTER_ACTIONS } from 'actions';

export const showDoneTodos = (state = false, { type }) => {
  switch (type) {

    case TODO_FILTER_ACTIONS.TOGGLE_SHOW_DONE:
      return !state;

    default:
      return state;
  }
};