// React
import React, {Component} from "react";
import PropTypes from 'prop-types';

// Styled Components
import styled from 'styled-components';

// Bootstrap
import { xs } from '../breakpoints';

// Srtings
import {genericStrings} from '../strings';

// Icons
import { SocialIcon } from 'react-social-icons';

class ProjectSocialLinks extends Component {
  static propTypes = {
    Project: PropTypes.object.isRequired
  }

  render() {
    const { Project } = this.props;

    return (
      <Container>
        <Share>{genericStrings.followUs}</Share>
        <div>
          <SocialIcon url={Project.twitterAccount} network="twitter" style={{ height: 38, width: 38 }} />
        </div>
        <div>
          <SocialIcon url={Project.instagramAccount} network="instagram" style={{ height: 38, width: 38 }} />
        </div>
      </Container>
    );
  }

}

const Share = styled.p`
  line-height: 38px;
  margin: 0;
  margin-right: 12px;
  font-size: 14px;
  font-weight: bold;
  @media (${xs}) {
    display: none;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  width: fit-content;
  margin: 5px;

  > div {
    margin-left: 15px;
    :focus {
      outline: 0;
    }
  }
`;

export default ProjectSocialLinks;
