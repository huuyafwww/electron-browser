import React, { Component } from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

const HeaderWrapper = styled.div`
    background-color:black;
`;


export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Button>
                BootStrap+Stislaのスタイルが乗ったボタン
            </Button>
        );
    }
}
