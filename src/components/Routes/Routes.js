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

import * as Utility from 'components/Helpers/Utility'

export default class Routes extends Component {

    render() {
        return (
            <Router history={history} >
                <Switch>
                    <Route path={Utility.DEFAULT_URL + "/FrontPage"} exact component={FrontPage} />
                    <Route path={Utility.DEFAULT_URL + "/Portrait-Page"} component={Portrait} />
                    <Route path={Utility.DEFAULT_URL + "/Summary-Page"} component={SummaryPage} />
                    <Route path={Utility.DEFAULT_URL + "/Landscape-Page"} component={LandscapePage} />
                    <Route path={Utility.DEFAULT_URL + "/Star-Page"} component={StarPage} />
                    <Route path={Utility.DEFAULT_URL + "/Street-Page"} component={StreetPage} />
                    <Route path={Utility.DEFAULT_URL + "/Urban-Page"} component={UrbanPage} />
                    <Route path={Utility.DEFAULT_URL + "/Wedding-Page"} component={WeddingPage} />
                    <Redirect to={Utility.DEFAULT_URL + "/FrontPage"} />
                </Switch>
            </Router>
        )
    }
}
