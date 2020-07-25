import React, { Component } from 'react';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';
import { BsX } from 'react-icons/bs';

const ContentsWrapper = styled.div`
    color: black;
`;

const CardStyle = {
    minHeight: '28.6px',
};

const CardBodyStyle = {
    padding: 0,
    margin: '.3rem',
};

const CardTitleStyle = {
    marginBottom: 0,
    fontSize: '1rem',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
};

const CloseIconWrapper = styled.div`
    position: absolute;
    top: 0px;
    right: 3px;
    font-size: 1.15rem;
`;

const CloseIconStyle = {};

const CardImg = styled.img`
    margintop: '.75rem';
`;

export default class LeftColBody extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.closeTab = this.closeTab.bind(this);
    }

    closeTab(index) {
        const { closeTab } = this.props;
        closeTab(index);
    }

    generateTabCard() {
        const { tabInfo } = this.props;
        const { closeTab } = this;
        return tabInfo.map((tab, index) => {
            return (
                <Card key={index} style={CardStyle}>
                    <Card.Body style={CardBodyStyle}>
                        <Card.Title style={CardTitleStyle}>
                            {tab.title}
                        </Card.Title>
                    </Card.Body>
                    <CloseIconWrapper style={CloseIconStyle} onClick={closeTab}>
                        <BsX />
                    </CloseIconWrapper>
                </Card>
            );
        });
    }

    render() {
        return <ContentsWrapper>{this.generateTabCard()}</ContentsWrapper>;
    }
}
