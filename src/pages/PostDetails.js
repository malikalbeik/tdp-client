// React
import React, { Component } from "react";

// Redux
import { connect } from 'react-redux';
import { addBlogPost } from '../actions';

// Styled Components
import styled, { withTheme } from 'styled-components';
import { sm } from '../breakpoints';

// Components
import { Container } from 'reactstrap';
import PostTitle from '../components/PostTitle';
import Loading from '../components/Loading';
import ErrorContainer from '../components/ErrorContainer'

// Helpers
import APIHelper from '../utils/APIHelper';
import { arrayFromObject } from '../utils';


class PostDetails extends Component {

    constructor(props) {
        super(props);
        this.state = { error: null };
        this.fetchPostDetails();
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    fetchPostDetails() {
        const { post_slug } = this.props.match.params;
        APIHelper.fetchPostDetails(post_slug).then(posts => {
            this.props.addBlogPost({ posts });
        }).catch(error => {
            const { blogPosts } = this.props;
            const isEmpty = Object.getOwnPropertyNames(blogPosts).length === 0;
            if (isEmpty) {
                this.setState({ error: error });
            }
        });
    }

    setTitle(post) {
        if (post) {
            document.title = `${post.title} | TDP`;
        }
    }

    render() {
        const { blogPosts } = this.props;
        const { post_slug } = this.props.match.params;


        const postsArray = arrayFromObject(blogPosts);
        var post = postsArray.filter(p => (p.slug === post_slug))[0]

        this.setTitle(post);

        const { error } = this.state;
        if (error) {
            return (
                <ErrorContainer error={error} />
            );
        }

        return (
            <Container>
                {this.generateBody(post)}
            </Container>
        );

    }

    generateBody(post) {
        if (!post) {
            return <Loading />
        }

        return [
            <PostTitle key='title' post={post} />,
            <div key='cover'>{this.generateCoverImage(post)}</div>,
            <ContentContainer dangerouslySetInnerHTML={{ __html: post.content }}></ContentContainer>,
        ];
    }

    generateCoverImage(post) {
        if (!post) { return }
        if (!post.coverImage) { return }
        return (
            <CoverImage src={"http://backend.malikalbeik.com/" + post.coverImage} alt={post.title} loader={<Loading />} />
        );
    }

}

const CoverImage = styled.img`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin: 0 -50vw 20px -50vw;
`;

const ContentContainer = styled(Container)`
  background-color: ${props => props.theme.colors.inner_background};
  padding: 75px 80px 50px 80px;
  margin: 10px 0 20px 0;
  border-radius: 8px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.05);
  @media (${sm}) {
    background-color: ${props => props.theme.colors.background};
    box-shadow: none;
    padding: 30px 0;
    border: none;
  }
`;

function mapStateToProps({ blogPosts }) {
    return { blogPosts }
}

function mapDispatchToProps(dispatch) {
    return {
        addBlogPost: post => dispatch(addBlogPost(post))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(PostDetails));
