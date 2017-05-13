import React, {Component} from 'react';
import {Route, Switch} from 'react-router';

import Layout from '../pages/_layout';
import App from '../pages/app';
import Other from '../pages/other';

class RoutesContainer extends Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/other" component={Other} />
                </Switch>
            </Layout>
        );
    }
}

export default RoutesContainer;
