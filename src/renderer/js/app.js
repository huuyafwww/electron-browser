import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Header } from './components';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    UNSAFE_componentWillMount() {}

    render() {
        return (
            <div>
                <Header />
                <h1>りあくと</h1>
            </div>
        );
    }
}

ReactDom.render(
    <App />,
    document.getElementById('app')
);
