import { CategoriesListForAssigning } from 'components';
import { connect } from 'react-redux';
import { updateTodo } from 'actions';

const mapStateToProps = ({ todos }, { match: { params }}) => {
  const currentTodo = todos.find(todo => todo.id === params.todoId);

  return {
    activeCategory: currentTodo && currentTodo.categoryId
  }
};

const mapDispatchToProps = (dispatch, { match: { params }}) => ({
  onClickAssigningBtn: (categoryId) => {
    dispatch(updateTodo(params.todoId, { categoryId }));
  }
});

export const CategoriesForAssigning = connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoriesListForAssigning);