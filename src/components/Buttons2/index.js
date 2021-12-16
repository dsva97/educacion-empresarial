import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../styles/Global';

const Button = styled.input`
        opacity: ${props => !props.active ? 0.5 : 1};
        width: 100%;
        text-align: center;
        background-color: ${Colors.C_2};
        outline: none;
        border: none;
        color: ${Colors.White_1};
        font-weight: 500;
        line-height: 21.78px;
        cursor: pointer;
        border-radius: 4px;
        font-size: 13px;
        padding: 2px 9px;
        margin-top: 0px;
`;

const Buttons2 = ({ buttonText, active }) => {
    return (
        <Button active={active} type="submit" value={buttonText}/>
    )
};

export default Buttons2;