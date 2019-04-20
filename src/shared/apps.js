import { hot } from 'react-hot-loader/root';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from './components';
import * as actions from './actions';


const App = connect(state => ({
  counter: state.counter
}))(props => {
  const { dispatch } = props;
  const creators = bindActionCreators(actions, dispatch);
  return <Counter {...props} {...creators} />;
});

export default hot(App);
