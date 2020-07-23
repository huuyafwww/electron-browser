import React, { Component } from 'react';
import styled from 'styled-components';
import { InputGroup, Button, FormControl } from 'react-bootstrap/';
import { BsSearch } from 'react-icons/bs';

const ContentsWrapper = styled.div`
    height: 42px;
`;

export default class RightColHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.onChangeSearchValue = this.onChangeSearchValue.bind(this);
        this.onEnterKey = this.onEnterKey.bind(this);
        this.onClickSearchButton = this.onClickSearchButton.bind(this);
    }

    onChangeSearchValue(e) {
        const searchValue = e.target.value;
        this.props.onChangeSearchValue(searchValue);
    }

    onClickSearchButton() {
        this.props.onSearch();
    }

    onEnterKey(e) {
        e.key === 'Enter' && this.onClickSearchButton();
    }

    render() {
        return (
            <ContentsWrapper>
                <InputGroup>
                    <FormControl
                        onChange={this.onChangeSearchValue}
                        onKeyPress={this.onEnterKey}
                        value={this.props.searchValue}
                    />
                    <InputGroup.Append>
                        <Button onClick={this.onClickSearchButton}>
                            <BsSearch />
                        </Button>
                    </InputGroup.Append>
                </InputGroup>
            </ContentsWrapper>
        );
    }
}
