import React, { Component } from 'react';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';

const ContentsWrapper = styled.div`
    color: black;
`;

const CardBodyStyle = {
    padding: 0,
    margin: '.3rem',
};

const CardTitleStyle = {
    fontSize: '1rem',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
};

export default class LeftColBody extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    generateTabCard() {
        const { tabInfo } = this.props;
        return tabInfo.map((tab, index) => {
            return (
                <Card key={index}>
                    <Card.Body style={CardBodyStyle}>
                        <Card.Title style={CardTitleStyle}>
                            {tab.title}
                        </Card.Title>
                        <img src={tab.image} />
                    </Card.Body>
                </Card>
            );
        });
    }

    render() {
        return <ContentsWrapper>{this.generateTabCard()}</ContentsWrapper>;
    }
}
