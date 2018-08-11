import { combineReducers } from 'redux';
import card from './card';
import score from './score';

const rootReducer = combineReducers({
  card,
  score
});

export default rootReducer;
