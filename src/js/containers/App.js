import React from 'react';
import Counter from '../components/Counter';
import { increment, decrement, add , remove } from '../actions/index';

export default class App extends React.Component {

    render() {
        const { store } = this.props;

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

    shouldComponentUpdate() { console.log('shouldComponentUpdate'); return true; }
}

App.propTypes = {
    store: React.PropTypes.object.isRequired
};