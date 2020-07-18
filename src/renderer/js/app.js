import React, { Component } from 'react';
import ReactDom from 'react-dom';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {}

    render() {
        return (
            <div>
                <h1>Reactの環境構築できた！</h1>
            </div>
        );
    }
}

ReactDom.render(<App />, document.getElementById('app'));
