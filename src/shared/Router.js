import React from 'react';
import { Router, Route} from 'react-router-dom';
import LandingPage from './LandingPage'

const createRoutes = () => (
    <Router>
        <Route exact path='/LandingPage' component={LandingPage} />
    </Router>
);

export default createRoutes;