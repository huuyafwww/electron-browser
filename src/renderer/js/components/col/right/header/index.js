import React, { Component } from 'react';
import styled from 'styled-components';
import { InputGroup, Button, FormControl } from 'react-bootstrap/';
import { BsSearch } from 'react-icons/bs';

const ContentsWrapper = styled.div`
    height:42px;
`;

const HeaderStyle = styled.h3`
`;


export default class RightColHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    onChangeSearchValue(e) {
        const searchValue = e.target.value;
        this.props.onChangeSearchValue(
            searchValue
        );
    }

    onClickSearchButton() {
        this.props.onSearch();
    }

    render() {
        return (
            <ContentsWrapper>
                <InputGroup>
                    <FormControl
                        onChange={(e) => this.onChangeSearchValue(e)}
                        value={this.props.searchValue}
                    />
                    <InputGroup.Append>
                        <Button
                            onClick={() => this.onClickSearchButton()}
                        >
                            <BsSearch />
                        </Button>
                    </InputGroup.Append>
                </InputGroup>
            </ContentsWrapper>
        );
    }
}
