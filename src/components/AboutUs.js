// React
import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux';
import { addContent } from '../actions';

// Components
import styled from 'styled-components';
import Loading from './Loading';
import { NavLink } from 'react-router-dom';

// Breakpoints
import { md } from '../breakpoints'

// Links
import { aboutLink } from '../links'

// Helpers
import APIHelper from '../utils/APIHelper';


class AboutUs extends Component {

    constructor(props) {
        super(props);
        this.fetchAbout();
    }

    fetchAbout() {
        APIHelper.fetchMainPageAbout().then(content => {
            this.props.addContent({ content });
        });
    }

    render() {
        const { contents } = this.props;
        const about = contents.mainpageabouttext;
        return (
            <Wrapper>
                {this.generateBody(about)}
            </Wrapper>
        );
    }

    generateBody(about) {
        if (!about) {
            return <Loading />
        }

        return [
            <AboutUsTextContainer key='textContainer'>
                <StyledHeader key='header'>Hakkimizda</StyledHeader>
                <StyledParagraphContainer key='body' dangerouslySetInnerHTML={{ __html: about.content }} />
                <NavLink key='link' exact to={aboutLink.url}>Read More</NavLink>
            </AboutUsTextContainer>,
            <StyledImage key='image' src={"http://backend.malikalbeik.com/" + about.image} alt="TDP hakkimizda fotografi" loader={<Loading />} />
        ];
    }
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 0;
  @media (${md}) {
    flex-direction: column;
  }
`;

const AboutUsTextContainer = styled.div`
    width: 45%;
    @media (${md}) {
        width: 100%;
    }
`;

const StyledHeader = styled.h3`
    color: ${props => props.theme.colors.selected};
    margin-bottom: 25px;
`;

const StyledParagraphContainer = styled.div`
    text-align: justify;
`;

const StyledImage = styled.img`
    width: 50%;
    margin: auto;
    @media (${md}) {
        display: none;
    }
`;

function mapStateToProps({ contents }) {
    return { contents }
}

function mapDispatchToProps(dispatch) {
    return {
        addContent: content => dispatch(addContent(content))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutUs);