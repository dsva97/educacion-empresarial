import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../styles/Global';

const Button = styled.input`
        opacity: ${props => !props.active ? 0.5 : 1};
        width: 100px;
        text-align: center;
        background-color: ${props => props.value == 'Aceptado' ? "#ABFFAD" : props.value == 'Pendiente' ? "#FCDB7E" : "#FE6D73"};
        outline: none;
        border: none;
        color: ${props => props.value == 'Aceptado' || props.value == 'Pendiente' ? "#000" : "#ffff"};
        font-weight: 500;
        line-height: 21.78px;
        cursor: pointer;
        border-radius: 4px;
        font-size: 13px;
        padding: 2px 9px;
        margin-top: 0px;
`;

const LittleButtons = ({ buttonText, active }) => {
    return (
        <Button active={active} type="submit" value={buttonText}/>
    )
};

export default LittleButtons;