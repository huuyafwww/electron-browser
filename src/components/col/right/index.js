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
        this.updateTargetURL = this.updateTargetURL.bind(this);
    }

    onChangeSearchValue(searchValue) {
        this.updateSearchValue(searchValue);
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
        this.updateTargetURL(targetURL);
        this.clearSearchValue();
    }

    clearSearchValue() {
        const searchValue = '';
        this.updateSearchValue(searchValue);
    }

    updateTargetURL(targetURL) {
        this.setState({ targetURL });
    }

    updateSearchValue(searchValue) {
        this.setState({ searchValue });
    }

    render() {
        const { searchValue, targetURL } = this.state;
        const { updateTab, index } = this.props;
        const { onChangeSearchValue, onSearch, updateTargetURL } = this;
        return (
            <RightColWrapper>
                <RightColHeader
                    onChangeSearchValue={onChangeSearchValue}
                    searchValue={searchValue}
                    onSearch={onSearch}
                />
                <RightColBody
                    targetURL={targetURL}
                    updateTab={updateTab}
                    updateTargetURL={updateTargetURL}
                    index={index}
                />
            </RightColWrapper>
        );
    }
}
