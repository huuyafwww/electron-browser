import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import LeftCol from './col/left/';
import RightCol from './col/right/';
import styled from 'styled-components';
const buildUrl = require('build-url');

const ContentsWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
`;

const RowStyle = {
    height: '100vh',
    marginLeft: 0,
    marginRight: 0,
};

const LeftColStyle = {
    backgroundColor: '#546E7A',
    padding: '.8em',
};

const RightColStyle = {
    padding: 0,
};

export default class Components extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: '',
            targetURL: '',
        };
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
            <ContentsWrapper>
                <Row style={RowStyle}>
                    <Col sm={2} style={LeftColStyle}>
                        <LeftCol />
                    </Col>
                    <Col sm={10} style={RightColStyle}>
                        <RightCol
                            onChangeSearchValue={v =>
                                this.onChangeSearchValue(v)
                            }
                            searchValue={this.state.searchValue}
                            onSearch={() => this.onSearch()}
                            targetURL={this.state.targetURL}
                        />
                    </Col>
                </Row>
            </ContentsWrapper>
        );
    }
}
