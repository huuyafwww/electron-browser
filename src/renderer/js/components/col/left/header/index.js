import React, { Component } from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import { BsThreeDots } from 'react-icons/bs';

const ContentsWrapper = styled.div`
    height:20vh;
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
                    Erectron
                    Browser
                </HeaderStyle>
            </ContentsWrapper>
        );
    }
}
