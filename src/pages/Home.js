// React
import React, {Component} from "react";

// Bootstrap
import {Container} from 'reactstrap';

// Styled Components
import styled from "styled-components";

// Components
import ErrorContainer from '../components/ErrorContainer'
import BackgroundImage from '../components/BackgroundImage'
import AboutUs from '../components/AboutUs'
import BlogContainer from '../components/BlogContainer'

// Links
import {homeLink} from '../links';


class Home extends Component {

  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  componentWillMount() {
    document.title = homeLink.documentTitle;
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    const {error} = this.state;
    if (error) {
      return (
        <ErrorContainer error={error}/>
      );
    }

    return (
      <Container>
        <BackgroundImage />
        <AboutUs />
        <StyledHeader>Latest Posts</StyledHeader>
        <BlogContainer />
      </Container>
    );
  }

}

const StyledHeader = styled.h3`
    color: ${props => props.theme.colors.selected};
    margin-bottom: 25px;
`;

export default Home;
