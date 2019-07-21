// React
import React, {Component} from 'react';

// Routing & Links
import {Switch, Route} from 'react-router-dom';
import * as links from '../links';

// Pages
import Home from '../pages/Home';

class Routes extends Component {
  
  render() {
    return [
      <Route key='home' path={links.homeLink.url} component={this.logPageView}/>,
      <Switch key='routes'>
        <Route exact path={links.homeLink.url} component={Home}/>
      </Switch>
    ];
  }

}

export default Routes;
