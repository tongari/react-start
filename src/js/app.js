import React from 'react'
import ReactDOM from 'react-dom'
import configStore from './store/configStore';
import { Router, Route, browserHistory } from 'react-router'
// import routes from './routes'
import App from './containers/App';
import Hoge from './containers/Hoge';

const store = configStore();

const render = ()=>{
    // ReactDOM.render(
    //     <App store={store} />,document.getElementById('app')
    // )

    ReactDOM.render(
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <Route path="hoge" component={Hoge} />
            </Route>
        </Router>,
        document.getElementById('app'))
}

render();
store.subscribe(() => {
   render();
});

