// React
import React, {Component} from "react";
import PropTypes from 'prop-types';

// Styled Components
import styled from 'styled-components';

// Bootstrap
import {sm} from '../breakpoints';

class PostTitle extends Component {
  static propTypes = {
    post: PropTypes.object.isRequired
  }

  render() {
    const {post} = this.props;

    return (
      <Container>
        <h1>{post.title}</h1>
      </Container>
    );
  }

}

const Container = styled.div`
    h1 {
        font-size: 32px;
        color: ${props => props.theme.colors.selected};
        margin-bottom: 25px;
        @media (${sm}) {
            font-size: 24px;
        }
    }
`;

export default PostTitle;
