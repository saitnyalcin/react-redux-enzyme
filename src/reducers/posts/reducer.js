import { ACTION_TYPES } from "../../actions/actionTypes";

export default (state = [], action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_POSTS:
      return action.payload;

    default:
      return state;
  }
};
