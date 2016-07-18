import React from 'react';
import { Link } from 'react-router';

export default class Hoge extends React.Component {

    render() {

        return (
            <div>
                <p>hogehoge</p>
                <Link to="/">toTop</Link>
            </div>
        )
    }
}