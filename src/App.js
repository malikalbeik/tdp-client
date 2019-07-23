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
import Footer from './components/Footer';

// Routing & Links
import { withRouter } from 'react-router-dom';
import Routes from './routes';

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
            <PagesWrapper>
              <Routes />
            </PagesWrapper>
            <Footer />
          </FlexWrapper>
        </WebsiteWrapper>
      </ThemeProvider>
    );
  }
}

const PagesWrapper = styled.div`
  min-height: calc(100vh - 97px);
`

function mapStateToProps(theme) {
  return theme;
}

export default withRouter(connect(mapStateToProps, null)(App));