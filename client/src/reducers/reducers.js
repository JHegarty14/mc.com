import { FETCH_POSTS } from '../actions/types';

export default function postList(state = [], action) {
    switch (action.type) {
      case FETCH_POSTS:
        return {
          ...state,
          posts: action.payload
        }
      default:
        return state;
    }
}