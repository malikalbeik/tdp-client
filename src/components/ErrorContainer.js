// React
import React, {Component} from "react";
import PropTypes from 'prop-types';

// Styled Components
import styled from 'styled-components';

// Bootstrap
import {Button} from 'reactstrap';

// Components
import InnerContainer from './InnerContainer';

// Routing & Links
import {NavLink} from 'react-router-dom';
import {homeLink} from '../links';


class ErrorContainer extends Component {
  static propTypes = {
    error: PropTypes.string
  }

  render() {
    const {error} = this.props;
    return (
      <Container>
        <h1>Error!</h1>
        <p>{error}</p>
        <NavLink to={homeLink.url}>
          <Button>Back Home</Button>
        </NavLink>
      </Container>
    );
  }

}

const Container = styled(InnerContainer)`
  text-align: center;
  margin-top: 35px;
  padding: 100px 20px;
  border-radius: 8px;
`;

export default ErrorContainer;
