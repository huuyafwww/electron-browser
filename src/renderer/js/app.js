import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Components from './components';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    UNSAFE_componentWillMount() {}

}

ReactDom.render(
    <Components />,
    document.getElementById('app')
);
