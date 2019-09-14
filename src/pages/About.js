// React
import React, {Component} from "react";

// Redux
import {connect} from 'react-redux';
import {addContent} from '../actions';

// Styled Components
import styled from 'styled-components';
import {sm} from '../breakpoints';

// Components
import {Container} from 'reactstrap';
// import PageTitle from '../components/PageTitle';
// import ContactForm from '../components/ContactForm';
import Loading from '../components/Loading';

// Links
import {aboutLink} from '../links';

// Strings
import {genericStrings} from '../strings';
import {photosLink} from '../strings'

// Helpers
import APIHelper from '../utils/APIHelper';



class About extends Component {

  constructor(props) {
    super(props);
    this.fetchAbout();
  }

  componentWillMount() {
    document.title = aboutLink.documentTitle;
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  fetchAbout() {
    APIHelper.fetchAbout().then(content => {
      this.props.addContent({content});
    });
  }

  render() {
    const {contents} = this.props;
    const about = contents.about;
    return (
      <AboutContainer>
        {/* <PageTitle>{aboutLink.title}</PageTitle> */}
        {this.generateBody(about)}
        {/* <ContactForm/> */}
      </AboutContainer>
    );
  }

  generateBody(about) {
    if (!about) {
      return <Loading/>
    }
    return [
      <StyledImage key='image' src={photosLink + about.image} alt={genericStrings.name} loader={<Loading/>}/>,
      <StyledTitle key='title'>{about.title}</StyledTitle>,
      <ContentContainer key='body' dangerouslySetInnerHTML={{ __html: about.content}}/>
    ];
  }

}


const AboutContainer = styled(Container)`
  padding-top: 25px;
`

const ContentContainer = styled(Container)`
  background-color: ${props => props.theme.colors.inner_background};
  padding: 75px 80px 50px 80px;
  margin: 10px 0 20px 0;
  border-radius: 8px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.05);
  @media (${sm}) {
    background-color: ${props => props.theme.colors.background};
    box-shadow: none;
    padding: 30px 0;
    border: none;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  border-radius: 8px;
  border-color: red;
`;

const StyledTitle = styled.h1`
  margin-top: 30px;
  font-family: ${props => props.theme.fonts.body};
  @media (${sm}) {
    font-size: 200%;
  }
`;

function mapStateToProps({contents}) {
  return {contents}
}

function mapDispatchToProps(dispatch) {
  return {
    addContent: content => dispatch(addContent(content))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(About);
