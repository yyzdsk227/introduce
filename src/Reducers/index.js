import { combineReducers } from 'redux';
import { LrnReducer } from './LrnReducer';
import { NalReducer } from './NalReducer';

const Reducers = combineReducers({
  LrnReducer,
  NalReducer,
});

export default Reducers;
