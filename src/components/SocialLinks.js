// React
import React, {Component} from "react";

// Styled Components
import styled, {withTheme} from "styled-components";

// Links
import social from '../links/social';

import { sm } from '../breakpoints';


class Links extends Component {

  render() {
    const {theme} = this.props;
    return (<SocialLinkWrapper>
      {social(theme).map(l => (
        <SocialLink key={l.name} href={l.url} target='_blank' rel='noopener noreferrer' aria-label={l.name}>
          {l.icon}
        </SocialLink>
      ))}
    </SocialLinkWrapper>);
  }

}

const SocialLink = styled.a`
  padding: 5px;
  margin: 0 10px;
  opacity: 0.75;
  font-size:20px;
  color:${props => props.theme.colors.primary} !important;
  &:hover {
    opacity: 1;
  }
`;

const SocialLinkWrapper = styled.div`
  margin: 12px 8px;
  display: flex;
  flex-direction: row;
  @media (${sm}) {
    justify-content: center;
  }
`;

export default withTheme(Links);
