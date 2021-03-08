import { INCREMENT, DECREMENT } from '../constants/homeConstants';
import { createSelector } from 'reselect';
// import { initialState } from './reducer';


const initialState = {
    counter: 0,
};

const selectHomeContainerDomain = state => state.homeContainer || initialState;
const makeSelectHomeContainerCounter = () => createSelector(selectHomeContainerDomain, substate => substate.counter);

export {
  makeSelectHomeContainerCounter,
};

export default function homeContainerReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };
      case DECREMENT:
        return {
          ...state,
          counter: state.counter - 1
        };
    default:
      return state;
  }
}