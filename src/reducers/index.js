// Redux
import { combineReducers } from 'redux'

// Action types
import * as types from '../actions/types';

// Helpers
import { objectFromArray } from '../utils';

/**
 * Theme Reducers
 */
function theme(state = {}, action) {
  const { theme } = action;

  switch (action.type) {
    // load theme to store
    case types.LOAD_THEME:
      return {
        ...theme
      };
    // any other action: return all posts
    default:
      return state;
  }
}

/**
 * Blog Posts Reducers
 */
function blogPosts(state = {}, action) {
  const {posts} = action;

  switch (action.type) {
    // load posts to store
    case types.LOAD_BLOG_POSTS:
      return {
        ...objectFromArray(posts)
      };
    // any other action: return all posts
    default:
      return state;
  }
}

/**
 * Projects Reducers
 */
function projects(state = {}, action) {
  const { projects, project } = action;

  switch (action.type) {
    // load projects to store
    case types.LOAD_PROJECTS:
      return {
        ...objectFromArray(projects)
      };
    // add a project 
    case types.ADD_PROJECT:
      return {
        ...state,
        [project.id]: project
      };
    // any other action: return all projectss
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
        // load content to store
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
        // any other action: return all content
        default:
            return state;
    }
}

// export all above reducers combined
export default combineReducers({ theme, blogPosts, projects, contents });
