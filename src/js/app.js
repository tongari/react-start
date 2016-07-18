import React from 'react'
import ReactDOM from 'react-dom'
import configStore from './store/configStore';
import Routes from './routes'
import { Router, Route, browserHistory, hashHistory } from 'react-router'

// import App from './containers/App';
// import Hoge from './containers/Hoge';

const store = configStore();

// const myApp = React.createClass({
//     render(){
//         return(
//             <App store={store} />
//         )
//     }
// });


const render = ()=>{

    // ReactDOM.render(
    //     <Router history={browserHistory}>
    //         <Route path="/" component={App} />
    //         <Route path="/hoge" component={Hoge} />
    //     </Router>,
    //     document.getElementById('app'))

    ReactDOM.render(
        <Routes />,
        document.getElementById('app'))
}

render();
store.subscribe(render);

