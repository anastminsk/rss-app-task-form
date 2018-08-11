import { FILL_CARD } from '../constants';

const initialState = {
  title: 'Exchange money',
  description: 'Some quick example text to build on the card title; https://github.com/yankouskia/',
  repo: '',
  comments: '',
  time: 0,
};

const card = (state = initialState, action) => {
  switch (action.type) {

    case FILL_CARD:
      return {
        ...state, 
        repo: action.repo,
        comments: action.comments,
        time: action.time
      };

    default:
      return state;
  }
};

export default card;
