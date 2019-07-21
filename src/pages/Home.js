// React
import React, {Component} from "react";

// Bootstrap
import {Container} from 'reactstrap';

// Components

import ErrorContainer from '../components/ErrorContainer'
import BackgroundImage from '../components/BackgroundImage'
import AboutUs from '../components/AboutUs'

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
      </Container>
    );
  }

}

export default Home;
