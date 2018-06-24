import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';
import Counter from './components';
import * as actions from './actions';

export default hot(module)(connect(state => ({
  counter: state.counter
}))(props => {
  const { counter, dispatch } = props;
  const creators = bindActionCreators(actions, dispatch);
  return <Counter {...props} {...creators} />;
}));
