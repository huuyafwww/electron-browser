import React, { Component } from 'react';
import styled from 'styled-components';
const WebView = require('react-electron-web-view');

const ContentsWrapper = styled.div`
    height: calc(100vh - 42px);
`;

export default class RightColBody extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.onDomReady = this.onDomReady.bind(this);
    }

    componentDidMount() {
        this.WebView = this.refs.WebView;
    }

    onDomReady() {
        const { index, targetURL } = this.props;
        this.props.updateTab(
            {
                title: this.WebView.getTitle(),
                url: targetURL,
            },
            index
        );
    }

    render() {
        return (
            <ContentsWrapper>
                <WebView
                    ref="WebView"
                    src={this.props.targetURL}
                    className="webview"
                    onDomReady={this.onDomReady}
                />
            </ContentsWrapper>
        );
    }
}
