import React, { Component } from 'react';
import { Router, Switch, Route, Redirect } from "react-router-dom";

import history from './history';
import Portrait from '../../views/pages/PortraitPage'
import Index from '../../views/Index'

export default class Routes extends Component {
    render() {
        return (
            <Router history={history} >
                <Switch>
                    <Route path="/index" exact component={Index} />
                    <Route path="/portrait-page" component={Portrait} />
                    <Redirect to="/index" />
                </Switch>
            </Router>
        )
    }
}
