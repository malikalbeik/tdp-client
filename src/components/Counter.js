// React
import React, { Component } from "react";

// Bootstrap
import { Container } from 'reactstrap';

// Styled Components
import styled from 'styled-components';

// react Countup
import CountUp from 'react-countup';

// Breakpoints
import { xs, sm } from '../breakpoints'

// Counter strings
import { counterStrings } from '../strings'

class Counter extends Component {

    render() {
        return (
            <CounterWrapper>
                {counterStrings.map((counter, index) => {
                    return (
                        <div key={index}>
                            <CounterContainer>
                                <Count end={counter.value} delay={1} duration={5} />
                            </CounterContainer>
                            <StyledParagraph>{counter.title}</StyledParagraph>
                        </div>
                    )
                })}
            </CounterWrapper>
        );
    }

}

const CounterWrapper = styled(Container)`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
`;

const CounterContainer = styled.div`
    width: 150px;
    height: 150px;
    border: ${props => props.theme.colors.inner_background} solid 10px;
    border-radius: 100%;
    text-align: center;
    vertical-align: middle;
    display: table;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.05);
    transition: box-shadow 0.3s ease-in-out;
    margin: 25px;
    &:hover {
        box-shadow: 0 3px 5px rgba(0, 0, 0, 0.25);
    }

    @media (${sm}) {
        border: ${props => props.theme.colors.inner_background} solid 5px;
        width: 100px;
        height: 100px;
        margin: 5px;
    }

    @media (${xs}) {
        width: 65px;
        height: 65px;
        margin: 5px;
    }


`;

const Count = styled(CountUp)`
    display: table-cell;
    vertical-align: middle;
    font-size: 36px;
    color: ${props => props.theme.colors.selected};
    @media (${sm}) {
        font-size: 24px;
    }
    @media (${xs}) {
        font-size: 12px;
    }
`;

const StyledParagraph = styled.p`
    font-size: 200%;
    text-align: center;
    width: 100%;
    @media (${sm}) {
        font-size: 18px;
    }
    @media (${xs}) {
        font-size: 12px;
    }
`;

export default Counter;
