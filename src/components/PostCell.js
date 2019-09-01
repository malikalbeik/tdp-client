// React
import React, { Component } from "react";
import PropTypes from 'prop-types';

// Bootstrap
import { Container } from 'reactstrap';
import { sm } from '../breakpoints';

// Styled Components
import styled from "styled-components";

// Components
import Loading from './Loading';

// 3rd party components
import Img from 'react-image'

import { blogPostLink } from '../links'


class PostCell extends Component {
    static propTypes = {
        post: PropTypes.object.isRequired
    }

    render() {
      const { post } = this.props;
      var postLink = blogPostLink(post).url

      return (
          <CellContainer>
            <WrapperLink href={postLink} rel='noopener noreferrer'>
              <Image src={"http://backend.malikalbeik.com/" + post.coverImage} alt={post.title} loader={<Loading />} />
              <ProjectImage src={"http://backend.malikalbeik.com/" + post.project.logo} alt={post.project.title} loader={<Loading />}/>
              <Title>{post.title}</Title>
            </WrapperLink>
          </CellContainer>
      );
    }

}

const CellContainer = styled(Container)`
  margin: 20px 0 20px 0;
  background-color: ${props => props.theme.colors.inner_background};
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.05);
  transition: box-shadow 0.3s ease-in-out;
  padding: 0;
  width: 275px;
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
  width: 100%;
  margin-top: 0;
  margin-bottom: auto;
`;

const ProjectImage = styled(Img)`
  width: 75px;
  height: 75px;
  border: solid 5px white;
  border-radius: 50px;
  display: block;
  position: relative;
  z-index: 1;
  margin-left: auto;
  margin-right: auto;
  margin-top: -40px;
  box-shadow: 0 2px 4px 0 rgba(155,155,155,0.50);
  background-color: white;
`

const Title = styled.h2`
  margin: 35px 0px;
  padding: 0 25px !important;
  max-width: 100%;
  text-align: center;
  @media (${sm}) {
    max-width: 100%;
    font-size: 125%;
  }
`;


export default PostCell;
