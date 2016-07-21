import React from 'react';
import { Link } from 'react-router';

const Counter = props => {
    const {
        counter,
        stack,
        onIncrement,
        onDecrement,
        onAdd,
        onRemove,
        routing
    } = props;

    return (
        <div>
            <p> counter : { counter }</p>
            <p> stack : { stack }</p>
            <button onClick={ onIncrement }>INCREMENT</button>
            <button onClick={ onDecrement }>DECREMENT</button>
            <button onClick={ onAdd }>ADD</button>
            <button onClick={ onRemove }>REMOVE</button>
            <Link to="/hoge">hogeへ</Link>
            <p>{routing.locationBeforeTransitions.pathname}</p>
        </div>
    );
};

Counter.propTypes = {
    counter: React.PropTypes.number.isRequired,
    stack: React.PropTypes.number.isRequired,
    onIncrement: React.PropTypes.func.isRequired,
    onDecrement: React.PropTypes.func.isRequired,
    onAdd: React.PropTypes.func.isRequired,
    onRemove: React.PropTypes.func.isRequired
};

export default Counter;
