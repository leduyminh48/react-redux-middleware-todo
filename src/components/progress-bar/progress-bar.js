import React, { Component } from 'react';
import { connect } from 'react-redux';
import './progress-bar.css';

class ProgressBar extends Component {
  render() {
    const { percentage } = this.props;
    const style = { width: percentage + '%' };

    return (
      <div className="ta-progress-bar">
        <div className="ta-progress-bar__fill" style={style}/>
      </div>
    )
  }
}

ProgressBar.propTypes = {
  percentage: React.PropTypes.number.isRequired
};

const mapStateToProps = ({ todos,categories }) => ({
  percentage: getPercentage(categories, todos)
});

function getPercentage(categories, todos) {
  if (!categories.length) return 100;

  return getCompletedCategories(categories, todos).length / categories.length * 100
}

function getCompletedCategories(categories, todos) {
  return categories.filter(category => isCategoryCompleted(category, todos));
}

function isCategoryCompleted(category, todos) {
  const categoryTodos = todos.filter(todo => todo.categoryId === category.id);
  const incompletedCategoryTodos = categoryTodos.filter(todo => !todo.isDone);
  return !categoryTodos.length || !incompletedCategoryTodos.length;
}

ProgressBar = connect(
  mapStateToProps
)(ProgressBar);

export { ProgressBar };