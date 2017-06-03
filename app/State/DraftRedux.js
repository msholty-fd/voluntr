import { fromJS } from 'immutable';

export const Types = {
  GET_DRAFT: 'sharpspring/draft/GET_DRAFT',
};

export const INITIAL_STATE = fromJS({
  rooms: [],
  fetching: false,
});

export default (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};