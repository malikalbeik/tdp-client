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
            <Container>
                <StyledHeader>Son Gönderilerimiz</StyledHeader>
                <BlogContainer />
            </Container>
        );
    }

}

const StyledHeader = styled.h1`
    color: ${props => props.theme.colors.primary};
    margin-top: 25px;
    margin-bottom: 25px;
`;

export default Blog;
