// React
import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux';

// Styled Components
import styled, { ThemeProvider } from "styled-components";

// Components
import WebsiteWrapper from './components/WebsiteWrapper';
import FlexWrapper from './components/FlexWrapper';
import Navbar from './components/Navbar';

// Routing & Links
import { withRouter } from 'react-router-dom';

// Themes
import Light from './thems';

class App extends Component {
  render() {
    const theme = Light;
    document.body.style.backgroundColor = theme.colors.background;

    return (
      <ThemeProvider theme={theme}>
        <WebsiteWrapper>
          <FlexWrapper>
            <Navbar />
          </FlexWrapper>
        </WebsiteWrapper>
      </ThemeProvider>
    );
  }
}

function mapStateToProps(theme) {
  return theme;
}

export default withRouter(connect(mapStateToProps, null)(App));