import React, { Component } from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap/';
import { BsPlus } from 'react-icons/bs';

const FixedMenuWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
`;

const ButtonStyle = {
    fontSize: '20px',
    padding: '.5rem',
    lineHeight: '1',
};

export default class FixedMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <FixedMenuWrapper>
                <Button style={ButtonStyle} onClick={this.props.addTab}>
                    <BsPlus />
                </Button>
            </FixedMenuWrapper>
        );
    }
}
