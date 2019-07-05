// Redux
import { combineReducers } from 'redux'

// Action types
import * as types from '../actions/types';

// Helpers
import { objectFromArray } from '../utils';

/**
 * Blog Posts Reducers
 */
function blogPosts(state = {}, action) {
  const {posts, post} = action;

  switch (action.type) {
    // load posts to store
    case types.LOAD_BLOG_POSTS:
      return {
        ...objectFromArray(posts)
      };
    // add a post
    case types.ADD_BLOG_POST:
      return {
        ...state,
        [post.id]: post
      };
    // any other action: return all posts
    default:
      return state;
  }
}

/**
 * Contents Reducers
 */
function contents(state = {}, action) {
    const { contents, content } = action;

    switch (action.type) {
        // load projectss to store
        case types.LOAD_CONTENETS:
            return {
                ...state,
                ...objectFromArray(contents)
            };
        // add a content
        case types.ADD_CONTENT:
            return {
                ...state,
                [content.slug]: content
            };
        // any other action: return all projectss
        default:
            return state;
    }
}

// export all above reducers combined
export default combineReducers({ blogPosts, contents });
