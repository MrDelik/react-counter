import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import Home from '../../views/Home';
import reducer, { makeSelectHomeContainerCounter } from '../../reducers/homeReducers';
import { incrementAction, decrementAction } from '../../actions/homeActions';
import { useInjectReducer } from '../../utils/injectReducer';

//import reducer from './reducer';

const key = 'homeContainer';

function HomeContainer(props) {
  useInjectReducer({ key, reducer });

  return <Home {...props} />;
}

const mapStateToProps = createStructuredSelector({
  counter: makeSelectHomeContainerCounter(),
});

export function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    Increment: () => dispatch(incrementAction()),
    Decrement: () => dispatch(decrementAction())
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
)(HomeContainer);

