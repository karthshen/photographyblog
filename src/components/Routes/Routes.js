import React, { Component } from 'react';
import { Router, Switch, Route, Redirect } from "react-router-dom";

import history from './history';
import Portrait from 'views/pages/PortraitPage'
import FrontPage from '../../views/FrontPage'
import SummaryPage from 'views/pages/SummaryPage';
import LandscapePage from 'views/pages/LandscapePage'
import StarPage from 'views/pages/StarPage'
import StreetPage from 'views/pages/StreetPage'
import UrbanPage from 'views/pages/UrbanPage'
import WeddingPage from 'views/pages/WeddingPage'

export default class Routes extends Component {
    render() {
        return (
            <Router history={history} >
                <Switch>
                    <Route path="/FrontPage" exact component={FrontPage} />
                    <Route path="/Portrait-Page" component={Portrait} />
                    <Route path="/Summary-Page" component={SummaryPage} />
                    <Route path="/Landscape-Page" component={LandscapePage} />
                    <Route path="/Star-Page" component={StarPage} />
                    <Route path="/Street-Page" component={StreetPage} />
                    <Route path="/Urban-Page" component={UrbanPage} />
                    <Route path="/Wedding-Page" component={WeddingPage} />
                    <Redirect to="/FrontPage" />
                </Switch>
            </Router>
        )
    }
}
