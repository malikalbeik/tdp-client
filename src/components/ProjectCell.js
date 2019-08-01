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

// Media
// import placeholder from '../images/placeholders/project.svg';


class ProjectCell extends Component {
  static propTypes = {
    project: PropTypes.object.isRequired
  }

  render() {
    const {project} = this.props;

    return (
      <CellContainer>
        <a href={project.url} target='_blank' rel='noopener noreferrer'>
          <Image src={"http://backend.malikalbeik.com/" + project.logo} alt={project.title} loader={<Loading/>}/>
        </a>
        <TitleLink href="" target='_blank' rel='noopener noreferrer'><Title>{project.title}</Title></TitleLink>
        <Paragraph>{project.shortDescription}</Paragraph>
        <Link href="" target='_blank' rel='noopener noreferrer'>{project.title}</Link>
      </CellContainer>
    );
  }

}

const CellContainer = styled(Container)`
  margin: 20px 0 20px 0;
  background-color: ${props => props.theme.colors.inner_background};
  border-radius: 8px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.05);
  padding: 50px 25px;
  width: 300px;
  margin: 25px;
  @media (${sm}) {
    max-width: 250px;
  }
`;

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

const Link = styled.a`
  margin-top: 20px;
  font-size: 12pt;
  font-weight: bold;
  @media (${sm}) {
    font-size: 14pt;
  }
`;

export default ProjectCell;
