// React
import React, { Component } from "react";

import styled from "styled-components";

import Background from "../images/background.jpg";

class BackgroundImage extends Component {

    render() {
        return (
            <Wrapper>
                <Image src={Background} alt="Logo"/>
                <OverLay></OverLay>
            </Wrapper>
        );
    }
}

const Wrapper = styled.div`
  width: 100vw;
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

const OverLay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0; 
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default BackgroundImage;