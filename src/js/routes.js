import React from 'react';
import { Router, Route, browserHistory, hashHistory } from 'react-router'

import App from './containers/App';
import Hoge from './containers/Hoge';

export default class Routes extends React.Component {
    render() {
        return(
            <Router history={browserHistory}>
                <Route path="/" component={App} />
                <Route path="/hoge" component={Hoge} />
            </Router>
        );
    }
}