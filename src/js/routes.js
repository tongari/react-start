import React from 'react';
import { Router, Route, browserHistory, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import App from './containers/App';
import Hoge from './containers/Hoge';

export default class Routes extends React.Component {

    render() {

        const { store } = this.props;
        const history = syncHistoryWithStore(browserHistory, store);

        return(
            <Router history={history}>
                <Route path="/" component={App} />
                <Route path="/hoge" component={Hoge} />
            </Router>
        );
    }
}