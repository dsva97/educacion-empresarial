import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../styles/Global';

const ButtonStyled = styled.button`
    text-align: center;
    background-color: ${Colors.C_2};
    outline: none;
    border: none;
    border-radius: 6px;
    color: ${Colors.White_1};
    font-size: 16px;
    font-weight: 500;
    line-height: 21.78px;
    padding: .2em .6em;
    cursor: pointer;
`;

export const Button = (props) => {
    return <ButtonStyled {...props} />
};