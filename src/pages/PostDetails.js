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
import ShareButtons from '../components/ShareButtons';
import ErrorContainer from '../components/ErrorContainer'

// Helpers
import APIHelper from '../utils/APIHelper';
import { arrayFromObject } from '../utils';
import { Fade } from 'react-slideshow-image';


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
            <PostContainer>
                {this.generateBody(post)}
            </PostContainer>
        );

    }

    generateBody(post) {
        if (!post) {
            return <Loading />
        }

        return [
            <PostTitle key='title' post={post} />,
            <div key='cover'>{this.generateCoverImage(post)}</div>,
            <ShareButtons key='share' post={post} />,
            <ContentContainer>
                <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
                {this.generateImageSlider(arrayFromObject(post.images, post.title))}
            </ContentContainer>
        ];
    }

    generateCoverImage(post) {
        if (!post) { return }
        if (!post.coverImage) { return }
        return (
            <CoverImage src={"http://backend.malikalbeik.com/" + post.coverImage} alt={post.title} loader={<Loading />} />
        );
    }

    generateImageSlider(images, postTitle) {
        if (images === undefined || images.length === 0) { return }
        let table = [];
        Object.values(images).forEach(function (image) {
            image = image.image;
            table.push(
                <Fader className="each-fade">
                    <ImageContainer className="image-container">
                        <img src={"http://backend.malikalbeik.com/" + image} alt={postTitle} />
                    </ImageContainer>
                </Fader>
            )
        });
        return [
            <h1>This post's Images</h1>,
            <ImageSlider className="slide-container">
                <Fade {...fadeProperties}>
                    {table}
                </Fade>
            </ImageSlider>
        ]
    }
}

const PostContainer = styled(Container)`
    padding-top: 25px;
`

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
const ImageSlider = styled.div`
  width: 100%;
  border-radius: 25px;
  overflow: hidden;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.25);
`;

const fadeProperties = {
    duration: 5000,
    transitionDuration: 500,
}

const Fader = styled.div`
    width: 100%;
`;

const ImageContainer = styled.div`
    width: 100%;

    img {
        max-width: 100%;
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
