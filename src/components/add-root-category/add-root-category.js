import { connect } from 'react-redux';
import { InputWithButton } from '../';

import {
  addRootCategory,
  updateAddCategoryInputValue
} from 'actions';

const mapStateToProps = ({ addCategoryInputValue }) => {
  return {
    value: addCategoryInputValue
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onBtnClick: (name) => {
      dispatch(addRootCategory({ name }));
      dispatch(updateAddCategoryInputValue(''));
    },
    onInputChange: (e) => {
      dispatch(updateAddCategoryInputValue(e.target.value));
    },
    onCancelClick: () => {
      dispatch(updateAddCategoryInputValue(''));
    }
  };
};

export const AddRootCategory =  connect(
  mapStateToProps,
  mapDispatchToProps
)(InputWithButton);
