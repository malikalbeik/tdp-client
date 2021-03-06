// Action types
import * as types from './types';

/**
 * Action Creators
 */

export function loadTheme(theme) {
    return { type: types.LOAD_THEME, theme };
}

export function loadBlogPosts({ posts }) {
    return { type: types.LOAD_BLOG_POSTS, posts };
}

export function loadProjects({ projects }) {
    return { type: types.LOAD_PROJECTS, projects };
}

export function addProject({ project }) {
    return { type: types.ADD_PROJECT, project };
}

export function loadContents({ contents }) {
    return { type: types.LOAD_CONTENETS, contents };
}

export function addContent({ content }) {
    return { type: types.ADD_CONTENT, content };
}
