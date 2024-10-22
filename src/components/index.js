import React, { Component } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
import LeftCol from './col/left/';
import RightCol from './col/right/';
import FixedMenu from './fixedMenu';

const ContentsWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
`;

const RowStyle = {
    height: '100vh',
    marginLeft: 0,
    marginRight: 0,
    overflowX: 'scroll',
    flexWrap: 'nowrap',
};

const LeftColStyle = {
    backgroundColor: '#546E7A',
    padding: '.8em',
};

const RightColStyle = {
    padding: 0,
};

export default class Components extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabCount: 1,
            tabInfo: [],
        };
        this.addTab = this.addTab.bind(this);
        this.closeTab = this.closeTab.bind(this);
        this.updateTab = this.updateTab.bind(this);
    }

    updateTab(info, index) {
        const { tabInfo } = this.state;
        tabInfo[index] = info;
        this.updateTabInfo(tabInfo);
    }

    addTab() {
        let { tabInfo, tabCount } = this.state;
        tabCount++;
        this.updateTabCount(tabCount);
        tabInfo.push([]);
        this.updateTabInfo(tabInfo);
    }

    closeTab(index) {
        let { tabInfo, tabCount } = this.state;
        tabCount--;
        this.updateTabCount(tabCount);
        tabInfo.splice(index, 1);
        this.updateTabInfo(tabInfo);
    }

    updateTabCount(tabCount) {
        this.setState({ tabCount });
    }

    updateTabInfo(tabInfo) {
        this.setState({ tabInfo });
    }

    generateTab() {
        const tabCount = this.state.tabCount;
        const { updateTab } = this;
        return Array(tabCount)
            .fill(null)
            .map((_, index) => {
                return (
                    <Col key={index} sm={9} style={RightColStyle}>
                        <RightCol index={index} updateTab={updateTab} />
                    </Col>
                );
            });
    }

    render() {
        const { tabInfo } = this.state;
        const { addTab, closeTab } = this;
        return (
            <div>
                <ContentsWrapper>
                    <Row style={RowStyle}>
                        <Col sm={2} style={LeftColStyle}>
                            <LeftCol tabInfo={tabInfo} closeTab={closeTab} />
                        </Col>
                        {this.generateTab()}
                    </Row>
                </ContentsWrapper>
                <FixedMenu addTab={addTab} />
            </div>
        );
    }
}
