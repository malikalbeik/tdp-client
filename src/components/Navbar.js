// React
import React, {Component} from "react";

// Bootstrap
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  // Input
} from 'reactstrap';

// Styled Components
import styled, {withTheme} from 'styled-components';
import {sm} from '../breakpoints';

// Components
import NavLink from './NavLink';

// Links
import {navbarLinks} from '../links';


class Bar extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.listenScrollEvent = this.listenScrollEvent.bind(this);
    this.state = {
      isOpen: false,
      // Color: props => props.theme.colors.scroll,
      // BackgroundColor: 'none'
      Color: props => props.theme.colors.primary,
      BackgroundColor:  props => props.theme.colors.inner_background    
    };
  }

  // Add an event listeneer to change headers colors.
  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  }

  // Change header colors when scrolling.
  listenScrollEvent = e => {
    if (window.scrollY > 50) {
      this.setState({
        Color: props => props.theme.colors.primary,
        // BackgroundColor: props => props.theme.colors.inner_background,
      })
    } else {
      this.setState({
        // Color: props => props.theme.colors.scroll,
        Color: props => props.theme.colors.primary
        // BackgroundColor: 'none',

      })
    }
  }

  open() {
    this.setState({
      isOpen: true
    });
  }

  close() {
    this.setState({
      isOpen: false
    });
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const {menu} = this.props.theme.icons;

    return (
      <Wrapper BackgroundColor={this.state.BackgroundColor}>
        <Container>
          <StyledNavbar expand="md">
            <Brand href='/'>TDP</Brand>
            <Toggler onClick={this.toggle}>
              <img src={menu} alt='Menu' />
            </Toggler>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav navbar className="ml-auto">
                {
                  navbarLinks.map(l => (
                    <Item key={l.name} Color={this.state.Color}>
                      <NavLink activeClassName='active' exact to={l.url} onClick={_ => {this.close()}}>{l.name}</NavLink>
                    </Item>
                  ))
                }
                {/* <SearchInput placeholder="Search" /> */}
              </Nav>
            </Collapse>
          </StyledNavbar>
        </Container>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  background-color: ${(props) => props.BackgroundColor};
  transition: background-color 0.5s ease
  width: 100vw;
  position: fixed;
  margin-left: -50vw;
  left: 50%;
  z-index: 3;
  box-shadow: 0 2px 6px 0 rgba(138,138,138,0.50); 
`;

const StyledNavbar = styled(Navbar)`
  padding-top: 12px;
  padding-bottom: 12px;
  @media (${sm}) {
    padding-left: 0;
    padding-right: 0;
  }
  button {
    background-color: ${props => props.theme.colors.background};
    &:focus {
      background-color: ${props => props.theme.colors.background};
    }
    &:hover {
      background-color: ${props => props.theme.colors.background};
    }
  }
`;

const Brand = styled(NavbarBrand)`
  font-size: 140%;
  color: ${props => props.theme.colors.selected};
  font-family: ${props => props.theme.fonts.title};
  font-weight: bolder;
  &:hover {
    color: ${props => props.theme.colors.highlighted};
  }
  @media (${sm}) {
    font-size: 160%;
  }
`;

const Item = styled(NavItem)`
  padding: 8px 10px 0 10px;
  font-weight: lighter;
  text-transform: uppercase;
  a {
    color: ${(props) => props.Color};
    transition: color 0.5s ease
  }
  .active {
    font-weight: bold;
    color: ${props => props.theme.colors.selected};
  }
  @media (${sm}) {
    text-align: center;
    font-size: 120%;
    margin: 12px 0 0 0;
    padding: 10px;
    border-radius: 8px;
    background-color: ${props => props.theme.colors.inner_background};
  }
`

// const SearchInput = styled(Input)`
//   padding-left: 4px;
//   margin-left: 15px;
//   background-color: white !important;
//   border: none;
//   &:focus {
//     background-color: ${props => props.theme.colors.inner_background};
//     outline: none;
//   }
//   @media (${sm}) {
//     margin-left: 0px;
//   }
// `

const Toggler = styled(NavbarToggler)`
  padding-right: 4px;
  padding-left: 4px;
  background-color: ${props => props.theme.colors.inner_background} !important;
  &:focus {
    background-color: ${props => props.theme.colors.inner_background};
    outline: none;
  }
`

export default withTheme(Bar);
