import React from 'react';
import { Route, IndexRoute } from 'react-router';

/**
 * Import all page components here
 */
import App from './components/App/';
import SomePage from './components/sales/';


/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default (
    <Route path="/" component={App}>
        {/*  <IndexRoute component={App} /> */}
        <Route path="/sales" component={SomePage} />
    </Route>
);