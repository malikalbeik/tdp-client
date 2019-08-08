// React
import React, { Component } from "react";

// Components
import BlogContainer from '../components/BlogContainer'

// Bootstrap
import { Container } from 'reactstrap';

// Styled Components
import styled from "styled-components";

// Links
import { blogLink } from '../links';


class Blog extends Component {
    componentWillMount() {
        document.title = blogLink.documentTitle;
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <StyledContainer>
                <StyledHeader>Latest Posts</StyledHeader>
                <BlogContainer />
            </StyledContainer>
        );
    }

}

const StyledHeader = styled.h1`
    color: ${props => props.theme.colors.primary};
    margin-bottom: 25px;
`;

const StyledContainer = styled(Container)`
    margin-top: 100px;
  }
`;

export default Blog;
