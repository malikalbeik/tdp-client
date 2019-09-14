// React
import React, { Component } from "react";

// Redux
import { connect } from 'react-redux';
import { addProject } from '../actions';

// Styled Components
import styled, { withTheme } from 'styled-components';

// Components
import { Container } from 'reactstrap';
import ProjectTitle from '../components/ProjectTitle';
import Loading from '../components/Loading';
import ErrorContainer from '../components/ErrorContainer'
import BlogContainer from '../components/BlogContainer'
import ProjectSocialLinks from '../components/ProjectSocialLinks'

// Breakpoints
import { sm } from '../breakpoints';

// Helpers
import APIHelper from '../utils/APIHelper';
import { arrayFromObject } from '../utils';

// links
import { photosLink} from '../strings';


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

    setTitle(project) {
        if (project) {
            document.title = `${project.title} | TDP`;
        }
    }

    render() {
        const { projects  } = this.props;
        const { project_title } = this.props.match.params;

        const projectsArray = arrayFromObject(projects);
        var project = projectsArray.filter(p => (p.title === project_title))[0]

        this.setTitle(project);

        const { error } = this.state;
        if (error) {
            return (
                <ErrorContainer error={error} />
            );
        }

        return (
            <Container>
                {this.generateBody(project)}
            </Container>
        );

    }

    generateBody(project) {
        if (!project) {
            return <Loading />
        }
        
        return [
            <div key='cover'>{this.generateCoverImage(project)}</div>,
            <HeadContainer key='Head container'>
                <ProjectTitle key='title' project={project} />
                <ProjectSocialLinks Project={project} />
            </HeadContainer>,
            <StyledParagraph key='project description'>{project.description}></StyledParagraph>,
            <StyledHeader key='Header'>{project.title}'s Posts</StyledHeader>,
            <BlogContainer key='blog' ProjectTitle={project.title}/>
        ];
    }

    generateCoverImage(project) {
        if (!project) { return }
        if (!project.backgroundImage) { return }   
        return (
            <CoverContainer>
                <CoverImage src={photosLink + project.backgroundImage} alt={project.title} loader={<Loading />} />
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

const HeadContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
    @media (${sm}) {
        padding: 0;
    }
`;

const StyledParagraph = styled.p`
    text-align: justify;
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
