import { SET_SCORE } from '../constants';

const initialState = {
  data: 0
};

const score = (state = initialState, action) => {
  return (action.type === SET_SCORE) ? { ...state, data: action.data } : state;
}

export default score;