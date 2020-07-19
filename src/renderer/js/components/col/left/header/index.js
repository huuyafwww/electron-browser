import React, { Component } from 'react';
import styled from 'styled-components';
// import { ElectronIcon } from './../../../svg';

const ContentsWrapper = styled.div`
    height:10vh;
`;

const HeaderStyle = styled.h3`
`;


export default class LeftColHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <ContentsWrapper>
                <HeaderStyle>
                    Electron Browser
                    {/* <ElectronIcon /> */}
                </HeaderStyle>
            </ContentsWrapper>
        );
    }
}
