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
            targetURL: 'https://www.google.com',
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
        this.setTargetURL(targetURL);
    }

    setTargetURL(targetURL) {
        this.setState({ targetURL });
    }

    onChangeSearchValue(searchValue) {
        this.setState({ searchValue });
    }

    render() {
        return (
            <RightColWrapper>
                <RightColHeader
                    onChangeSearchValue={this.onChangeSearchValue}
                    searchValue={this.state.searchValue}
                    onSearch={this.onSearch}
                />
                <RightColBody
                    targetURL={this.state.targetURL}
                    updateTab={this.props.updateTab}
                    index={this.props.index}
                />
            </RightColWrapper>
        );
    }
}
