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
        this.onDidFinishLoad = this.onDidFinishLoad.bind(this);
        this.getCaptureImage = this.getCaptureImage.bind(this);
        this.updateTab = this.updateTab.bind(this);
    }

    componentDidMount() {
        this.WebView = this.refs.WebView;
    }

    getCaptureImage(WebView, index) {
        const { updateTab } = this;
        WebView.capturePage().then(async image => {
            updateTab(
                WebView.getTitle(),
                WebView.getURL(),
                image.toDataURL(),
                index
            );
        });
    }

    updateTab(title, url, image, index) {
        const { updateTab } = this.props;
        updateTab({ title, url, image }, index);
    }

    onDidFinishLoad() {
        const { updateTargetURL, index } = this.props;
        const { getCaptureImage, WebView } = this;
        updateTargetURL(WebView.getURL());
        getCaptureImage(WebView, index);
    }

    render() {
        const { targetURL } = this.props;
        const { onDidFinishLoad } = this;
        return (
            <ContentsWrapper>
                <WebView
                    ref="WebView"
                    src={targetURL}
                    className="webview"
                    onDidFinishLoad={onDidFinishLoad}
                />
            </ContentsWrapper>
        );
    }
}
