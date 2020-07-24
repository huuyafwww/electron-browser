import React, { Component } from 'react';
import styled from 'styled-components';
import { Icon } from '@images';

const ContentsWrapper = styled.div``;

const HeaderImg = styled.div``;

export default class LeftColHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <ContentsWrapper>
                <HeaderImg className="w-50 m-auto">
                    <img src={Icon} />
                </HeaderImg>
            </ContentsWrapper>
        );
    }
}
