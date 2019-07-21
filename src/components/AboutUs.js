// React
import React, { Component } from "react";

// Components
import styled from "styled-components";
import Loading from '../components/Loading';

import AboutImage from "../images/background.jpg";
import {sm} from "../breakpoints"


class AboutUs extends Component {

    render() {
        return (
            <Wrapper>
                <AboutUsText>
                    <StyledHeader>Hakkimizda</StyledHeader>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </AboutUsText>
                <StyledImage key='image' src={AboutImage} alt="TDP hakkimizda fotografi" loader={<Loading />} />,
            </Wrapper>
        );
    }
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 50px 0;
  @media (${sm}) {
    flex-direction: column;
  }
`;

const AboutUsText = styled.p`
    width: 45%;
    @media (${sm}) {
        width: 100%;
    }
`;

const StyledHeader = styled.h3`
    color: ${props => props.theme.colors.selected};
    margin-bottom: 25px;
`;

const StyledImage = styled.img`
    max-width: 45%;
    @media (${sm}) {
        max-width: 100%;
    }
`;

export default AboutUs;