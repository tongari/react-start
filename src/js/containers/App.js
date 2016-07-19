import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as actions from '../actions';
import Counter from '../components/Counter';


export default class App extends React.Component {

    render() {

        const { store,actions} = this.props;
        return (
            <Counter
                { ...store }
                onIncrement = { () => actions.increment() }
                onDecrement = { () => actions.decrement() }
                onAdd = { () => actions.add() }
                onRemove = { () => actions.remove() }
            />
        )
    }

    shouldComponentUpdate() {
        console.log('shouldComponentUpdate');
        return true;
    }
}

App.propTypes = {
    store: React.PropTypes.object.isRequired,
    actions: React.PropTypes.object.isRequired
};

const mapStateToProps = state => ({store: state})
const mapDispatchToProps = dispatch => ({actions: bindActionCreators(actions, dispatch)})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)