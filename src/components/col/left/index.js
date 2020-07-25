import React, { Component } from 'react';
import styled from 'styled-components';
import LeftColHeader from './header/';
import LeftColBody from './body/';

const LeftColWrapper = styled.div`
    color: #fff;
    text-align: center;
`;

const Divider = styled.div`
    height: 0;
    margin: 0.5rem 0;
    overflow: hidden;
    border-top: 1px solid #e9ecef;
`;

export default class LeftCol extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { tabInfo } = this.props;
        return (
            <LeftColWrapper>
                <LeftColHeader />
                <Divider />
                <LeftColBody tabInfo={tabInfo} />
            </LeftColWrapper>
        );
    }
}
