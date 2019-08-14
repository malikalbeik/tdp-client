// React
import React, { Component } from "react";
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
import { loadBlogPosts } from '../actions';

// Bootstrap
import { Container } from 'reactstrap';

// Components
import PostCell from '../components/PostCell';
import ErrorContainer from '../components/ErrorContainer'

// Styled Components
import styled from 'styled-components';

// Helpers
import { arrayFromObject } from '../utils';
import APIHelper from '../utils/APIHelper';

class BlogContainer extends Component {
    static propTypes = {
        projectTitle: PropTypes.string
    }

    constructor(props) {
        super(props);
        this.state = { error: null };
        this.fetchBlogPosts(this.props.ProjectTitle);
    }

    fetchBlogPosts(Project) {
        APIHelper.fetchBlogPosts(Project).then(posts => {
            this.props.loadBlogPosts({ posts });
        }).catch(error => {
            const { blogPosts } = this.props;
            const isEmpty = Object.getOwnPropertyNames(blogPosts).length === 0;
            if (isEmpty) {
                this.setState({ error: error });
            }
        });
    }

    render() {
        const { error } = this.state;
        if (error) {
            return (
                <ErrorContainer error={error} />
            );
        }

        const { blogPosts } = this.props;
        const postsArray = arrayFromObject(blogPosts)
        const sortedPosts = postsArray.sort((p1, p2) => (p1.title > p2.title ? 1 : -1))

        return (
            <PostsContainer>
                {sortedPosts.map(p => (<PostCell key={p.id} post={p} />))}
            </PostsContainer>
        );
    }

}

const PostsContainer = styled(Container)`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
`;


function mapStateToProps({ blogPosts }) {
    return { blogPosts }
}

function mapDispatchToProps(dispatch) {
    return {
        loadBlogPosts: posts => dispatch(loadBlogPosts(posts))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogContainer);
