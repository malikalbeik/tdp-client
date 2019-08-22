// React
import React, {Component} from 'react';

// Routing & Links
import {Switch, Route} from 'react-router-dom';
import * as links from '../links';

// Pages
import Home from '../pages/Home';
import Blog from '../pages/Blog';
import Projects from '../pages/Projects';
import ProjectDetails from '../pages/ProjectDetails';
import PostDetails from '../pages/PostDetails';
import About from '../pages/About';

class Routes extends Component {
  
  render() {
    return [
      <Route key='home' path={links.homeLink.url} component={this.logPageView}/>,
      <Switch key='routes'>
        <Route exact path={links.homeLink.url} component={Home}/>
        <Route exact path={links.blogLink.url} component={Blog} />
        <Route exact path={links.projectLink.url} component={Projects} />
        <Route exact path={`${links.projectLink.url}/:project_title`} component={ProjectDetails} />
        <Route exact path={`${links.blogLink.url}/:post_slug`} component={PostDetails} />
        <Route exact path={links.aboutLink.url} component={About} />
      </Switch>
    ];
  }

}

export default Routes;
