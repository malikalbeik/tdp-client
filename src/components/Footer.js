// React
import React, {Component} from "react";

// Bootstrap
import {Container, Row, Col} from 'reactstrap';

// Styled Components
import styled from 'styled-components';

import {sm} from '../breakpoints';

// Components
import SocialLinks from './SocialLinks';

class Footer extends Component {

  render() {
    return (
      <Container>
        <FooterInnerContainer>
          <Row className='align-items-center'>
            <Col sm={12} md={6}>
              <SocialLinks />
            </Col>
            <Col sm={12} md={6}>
              <Credits>Made with <Heart>❤</Heart> by <a href="https://malikalbeik.me/">Malik Albeik</a></Credits>
            </Col>
          </Row>
        </FooterInnerContainer>
      </Container>
    );
  }

}

const FooterInnerContainer = styled.div`
  margin-top: 60px;
  padding: 20px;
  border-top: solid thin ${props => props.theme.colors.primary};
`;

const Credits = styled.p`
  float: right;
  padding: 10px;
  margin: 12px 8px;
  font-size: 14px;
  @media (${sm}) {
    width: calc(100% - 16px);
    text-align: center;
  }

  a {
    color:${props => props.theme.colors.primary} !important;
    text-decoration: none;
    &:hover {
      opacity: 1;
    }
  }

`;

const Heart = styled.span`
  color: ${props => props.theme.colors.selected};
`;

export default Footer;
