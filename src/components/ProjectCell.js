// React
import React, {Component} from "react";
import PropTypes from 'prop-types';

// Bootstrap
import {Container} from 'reactstrap';
import {sm} from '../breakpoints';

// Styled Components
import styled from "styled-components";

// Components
import Loading from './Loading';

// 3rd party components
import Img from 'react-image'

// links
import {projectsPageLink} from '../links'
import { photosLink } from '../strings';


class ProjectCell extends Component {
  static propTypes = {
    project: PropTypes.object.isRequired
  }

  render() {
    const {project} = this.props;
    var projectLink = projectsPageLink(project).url

    return (
      <CellContainer>
        <WrapperLink href={projectLink} rel='noopener noreferrer'>
          <Image src={photosLink + project.logo} alt={project.title} loader={<Loading/>}/>
          <TitleLink href={projectLink} rel='noopener noreferrer'><Title>{project.title}</Title></TitleLink>
          <Paragraph>{project.shortDescription}</Paragraph>
        </WrapperLink>
      </CellContainer>
    );
  }

}

const CellContainer = styled(Container)`
  margin: 20px 0 20px 0;
  background-color: ${props => props.theme.colors.inner_background};
  border-radius: 8px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.05);
  transition: box-shadow 0.3s ease-in-out;
  padding: 50px 25px;
  width: 300px;
  margin: 25px;
  &:hover {
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.25);
  }
  @media (${sm}) {
    max-width: 250px;
  }
`;

const WrapperLink = styled.a`
  color: ${props => props.theme.colors.primary} !important;
  &:hover {
    text-decoration: none;
  }
`

const Image = styled(Img)`
  border-radius: 10px;
  width: 100%;
  margin-top: 0;
  margin-bottom: auto;
`;

const Title = styled.h2`
  margin: 10px 0 4px 0;
  max-width: 100%;
  font-weight: bold;
  @media (${sm}) {
    max-width: 100%;
    font-size: 125%;
  }
`;

const Paragraph = styled.p`
  margin: 20px 0 12px 0;
  font-size: 10pt;
  text-align: justify;
  @media (${sm}) {
    font-size: 10pt;
  }
`;

const TitleLink = styled.a`
  color: ${props => props.theme.colors.primary} !important;
  &:hover {
    text-decoration: none;
  }
`

export default ProjectCell;
