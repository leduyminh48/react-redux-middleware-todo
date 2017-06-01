import React from 'react';
import FontAwesome from 'react-fontawesome';
import { connect } from 'react-redux';

import './undo-redo.css'

import {
  undo,
  redo,
} from 'actions';

let UndoRedo = ({ onClickUndo, onClickRedo, undoAble, redoAble }) => {
  return <div className="ta-undo-redo">
    <button className="ta-undo-redo__btn" onClick={onClickUndo} disabled={!undoAble}>
      <FontAwesome name="undo"/>
    </button>
    <button className="ta-undo-redo__btn" onClick={onClickRedo} disabled={!redoAble}>
      <FontAwesome name="repeat"/>
    </button>
  </div>
};

const mapStateToProps = ({ undoRedoCapability: { undoAble, redoAble } }) => {
  return {
    undoAble,
    redoAble,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClickUndo: ()  => { console.log('haha'); dispatch(undo()); },
    onClickRedo: ()  => { dispatch(redo()); },
  };
};

UndoRedo = connect(
  mapStateToProps,
  mapDispatchToProps
)(UndoRedo);

export { UndoRedo };
