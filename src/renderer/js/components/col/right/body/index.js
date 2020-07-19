import React, { Component } from 'react';
import styled from 'styled-components';

const ContentsWrapper = styled.div`
    height:calc(100vh - 42px);
`;

const HeaderStyle = styled.h3`
`;


export default class RightColBody extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <ContentsWrapper>
            </ContentsWrapper>
        );
    }
}
