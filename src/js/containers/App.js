import React from 'react';
import Counter from '../components/Counter';
import { increment, decrement, add , remove } from '../actions/index';
import configStore from '../store/configStore';
import { Link } from 'react-router';

export default class App extends React.Component {

    render() {

        // const { store } = this.props;
        const store = configStore();
        console.log('App class : ',store.getState().counter);

        return (
            <Counter
                { ...store.getState() }
                onIncrement = { () => store.dispatch(increment()) }
                onDecrement = { () => store.dispatch(decrement()) }
                onAdd = { () => store.dispatch(add()) }
                onRemove = { () => store.dispatch(remove()) }
             />
        )
    }

    shouldComponentUpdate() {
        console.log('shouldComponentUpdate');
        return true;
    }
}

// App.propTypes = {
//     store: React.PropTypes.object.isRequired
// };