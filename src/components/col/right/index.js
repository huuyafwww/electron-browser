import React, { Component } from 'react';
import styled from 'styled-components';
import RightColHeader from './header/';
import RightColBody from './body/';

const buildUrl = require('build-url');

const RightColWrapper = styled.div``;

export default class RightCol extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: '',
            targetURL: '',
        };
        this.onSearch = this.onSearch.bind(this);
        this.onChangeSearchValue = this.onChangeSearchValue.bind(this);
    }

    onSearch() {
        const searchValue = this.state.searchValue;
        const targetURL = buildUrl('https://www.google.com', {
            path: 'search',
            queryParams: {
                q: searchValue,
                oq: searchValue,
            },
        });
        this.setState({
            targetURL: targetURL,
        });
    }

    onChangeSearchValue(value) {
        this.setState({
            searchValue: value,
        });
    }

    render() {
        return (
            <RightColWrapper>
                <RightColHeader
                    onChangeSearchValue={this.onChangeSearchValue}
                    searchValue={this.state.searchValue}
                    onSearch={this.onSearch}
                />
                <RightColBody targetURL={this.state.targetURL} />
            </RightColWrapper>
        );
    }
}
