import React, { Component } from 'react';
import styled from 'styled-components';
const WebView = require('react-electron-web-view');

const ContentsWrapper = styled.div`
    height:calc(100vh - 42px);
`;

export default class RightColBody extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <ContentsWrapper>
                <WebView
                    src="https://www.google.com"
                    className="webview"
                />
            </ContentsWrapper>
        );
    }
}
