// React
import React, { Component } from "react";

// Redux
import { connect } from 'react-redux';
import { addProject } from '../actions';

// Styled Components
import styled, { withTheme } from 'styled-components';

// Components
import { Container } from 'reactstrap';
import PostTitle from '../components/PostTitle';
import Loading from '../components/Loading';
import ErrorContainer from '../components/ErrorContainer'
import BlogContainer from '../components/BlogContainer'

// Helpers
import APIHelper from '../utils/APIHelper';
import { arrayFromObject } from '../utils';


class ProjectDetails extends Component {

    constructor(props) {
        super(props);
        this.state = { error: null };
        this.fetchProjectDetails();
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    fetchProjectDetails() {
        const { project_title } = this.props.match.params;
        APIHelper.fetchProjectDetails(project_title).then(project => {
            this.props.addProject({ project });
        }).catch(error => {
            this.setState({ error: error });
        });
    }

    setTitle(post) {
        if (post) {
            document.title = `${post.title} | TDP`;
        }
    }

    render() {
        const { projects  } = this.props;
        const { project_title } = this.props.match.params;

        const postsArray = arrayFromObject(projects);
        var post = postsArray.filter(p => (p.title === project_title))[0]

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
            <div key='cover'>{this.generateCoverImage(post)}</div>,
            <PostTitle key='title' post={post} />,
            <p>{post.description}</p>,
            <StyledHeader>{post.title}'s Posts</StyledHeader>,
            <BlogContainer ProjectTitle={post.title}/>
        ];
    }

    generateCoverImage(post) {
        if (!post) { return }
        if (!post.backgroundImage) { return }   
        return (
            <CoverContainer>
                <CoverImage src={"http://backend.malikalbeik.com/" + post.backgroundImage} alt={post.title} loader={<Loading />} />
            </CoverContainer>
        );
    }

}

const CoverContainer = styled.div`
  position: relative;
`;

const CoverImage = styled.img`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin: 0 -50vw 20px -50vw;
`;

const StyledHeader = styled.h2`
    color: ${props => props.theme.colors.primary};
    margin-bottom: 25px;
`;

function mapStateToProps({ projects }) {
    return { projects }
}

function mapDispatchToProps(dispatch) {
    return {
        addProject: project => dispatch(addProject(project))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(ProjectDetails));
