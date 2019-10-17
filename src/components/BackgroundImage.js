// React
import React, { Component } from "react";

import styled from "styled-components";

import Background from "../images/background.jpg";

class BackgroundImage extends Component {

    render() {
        return (
            <Wrapper>
                <Image src={Background} alt="Logo"/>
            </Wrapper>
        );
    }
}

const Wrapper = styled.div`
  width: calc(100vw - 7.5px);
  position: relative;
  margin-left: -50vw;
  left: 50%;
`;

const Image = styled.img`
  height: auto;
  max-width: 100%;
  min-width: 100%;
  z-index: 0;
  top: -100px;
`;

export default BackgroundImage;