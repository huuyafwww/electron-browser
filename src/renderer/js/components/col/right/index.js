import React, { Component } from 'react';
import styled from 'styled-components';
import RightColHeader from './header/';
import RightColBody from './body/';

const RightColWrapper = styled.div`
`;

export default class RightCol extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <RightColWrapper>
                <RightColHeader
                    onChangeSearchValue={(v) => this.props.onChangeSearchValue(v)}
                    searchValue={this.props.searchValue}
                    onSearch={() => this.props.onSearch()}
                />
                <RightColBody
                    targetURL={this.props.targetURL}
                />
            </RightColWrapper>
        );
    }
}
