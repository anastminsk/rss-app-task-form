import {
  FILL_CARD,
  SET_SCORE
} from '../constants';

export const fillCard = (repo, comments, time) => ({
  type: FILL_CARD,
  repo,
  comments,
  time
});

export const setScore = (data) => ({
  type: SET_SCORE,
  data
});