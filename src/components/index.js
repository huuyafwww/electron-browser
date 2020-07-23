import React, { Component } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
import LeftCol from './col/left/';
import RightCol from './col/right/';

const ContentsWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
`;

const RowStyle = {
    height: '100vh',
    marginLeft: 0,
    marginRight: 0,
    overflowX: 'scroll',
    flexWrap: 'nowrap',
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
        this.state = {};
    }

    render() {
        return (
            <ContentsWrapper>
                <Row style={RowStyle}>
                    <Col sm={2} style={LeftColStyle}>
                        <LeftCol />
                    </Col>
                    <Col sm={10} style={RightColStyle}>
                        <RightCol />
                    </Col>
                    <Col sm={10} style={RightColStyle}>
                        <RightCol />
                    </Col>
                </Row>
            </ContentsWrapper>
        );
    }
}
