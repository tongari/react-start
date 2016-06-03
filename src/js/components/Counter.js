import React from 'react';

const Counter = props => {
    const {
        counter,
        stack,
        onIncrement,
        onDecrement,
        onAdd,
        onRemove
    } = props;

    return (
        <div>
            <p> counter : { counter }</p>
            <p> stack : { stack }</p>
            <button onClick={ onIncrement }>INCREMENT</button>
            <button onClick={ onDecrement }>DECREMENT</button>
            <button onClick={ onAdd }>ADD</button>
            <button onClick={ onRemove }>REMOVE</button>
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
