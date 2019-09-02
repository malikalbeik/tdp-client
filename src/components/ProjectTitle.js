// React
import React, { Component } from "react";
import PropTypes from 'prop-types';

// Styled Components
import styled from 'styled-components';

// Breakpoints
import { sm } from '../breakpoints';

class ProjectTitle extends Component {
  static propTypes = {
    project: PropTypes.object.isRequired
  }

  render() {
    const { project } = this.props;

    return (
      <Container>
        <h1>{project.title}</h1>
      </Container>
    );
  }

}

const Container = styled.div`
  width: fit-content;
  margin: 0;
  position: relative;
  h1 {
      font-size: 32px;
      margin: 5px;
      @media (${sm}) {
          font-size: 24px;
          margin: 10px;
      }
  }
`;

export default ProjectTitle;
