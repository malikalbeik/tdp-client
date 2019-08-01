// React
import React, { Component } from "react";

// Redux
import { connect } from 'react-redux';
import { loadProjects } from '../actions';

// Bootstrap
import { Container } from 'reactstrap';

// Components
import ProjectCell from '../components/ProjectCell';
import ErrorContainer from '../components/ErrorContainer'

// Styled Components
import styled from 'styled-components';

// Links
import { projectLink } from '../links';

// Helpers
import { arrayFromObject } from '../utils';
import APIHelper from '../utils/APIHelper';

class Projects extends Component {

    constructor(props) {
        super(props);
        this.state = { error: null };
        this.fetchProjects();
    }

    componentWillMount() {
        document.title = projectLink.documentTitle;
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    fetchProjects() {
        APIHelper.fetchProjects().then(projects => {
            this.props.loadProjects({ projects })
        }).catch(error => {
            const { projects } = this.props;
            const isEmpty = Object.getOwnPropertyNames(projects).length === 0;
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

        const { projects } = this.props;
        const projectsArray = arrayFromObject(projects)
        // const sortedProjects = projectsArray.sort((p1, p2) => (p1.date_published < p2.date_published ? 1 : -1))

        return (
            <ProjectsContainer>
                {projectsArray.map(p => (<ProjectCell key={p.id} project={p} />))}
            </ProjectsContainer>
        );
    }

}

const ProjectsContainer = styled(Container)`
    margin-top: 100px;
    padding: 25px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
`;


function mapStateToProps({ projects }) {
    return { projects }
}

function mapDispatchToProps(dispatch) {
    return {
        loadProjects: projects => dispatch(loadProjects(projects))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
