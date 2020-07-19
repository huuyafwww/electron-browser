import React, { Component } from 'react';
import styled from 'styled-components';
import LeftColHeader from './header/';

const LeftColWrapper = styled.div`
    color:#fff;
    text-align:center;
`;

const Divider = styled.div`
    height: 0;
    margin: .5rem 0;
    overflow: hidden;
    border-top: 1px solid #e9ecef;
`;

export default class LeftCol extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <LeftColWrapper>
                <LeftColHeader />
                <Divider />
            </LeftColWrapper>
        );
    }
}