import React, {Component} from 'react';
import {Route, Switch} from 'react-router';

import Layout from '../pages/_layout';
import App from '../pages/app';
import Senate from '../pages/senate';
import House from '../pages/house';
import StateNj from '../pages/state-nj';
import About from '../pages/about';
import Issue from '../pages/issue';
import Report from '../pages/report';

class RoutesContainer extends Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/senate" component={Senate} />
                    <Route path="/house" component={House} />
                    <Route path="/state/nj" component={StateNj} />
                    <Route path="/about" component={About} />
                    <Route path="/issue/:issueId" component={Issue} />
                    <Route path="/report/:legislator" component={Report} />
                </Switch>
            </Layout>
        );
    }
}

export default RoutesContainer;
