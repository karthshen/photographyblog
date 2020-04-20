import React, { Component } from 'react';
import { Router, Switch, Route, Redirect } from "react-router-dom";

import history from './history';
import Portrait from '../../views/pages/PortraitPage'
import FrontPage from '../../views/FrontPage'
import SummaryPage from 'views/pages/SummaryPage';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history} >
                <Switch>
                    <Route path="/FrontPage" exact component={FrontPage} />
                    <Route path="/portrait-page" component={Portrait} />
                    <Route path="/Summary-Page" component={SummaryPage} />
                    <Redirect to="/FrontPage" />
                </Switch>
            </Router>
        )
    }
}
