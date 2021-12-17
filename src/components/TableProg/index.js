import React from 'react';
import searchIcon from '../../assets/HomeIcons/searchIcon.svg';
import styled from 'styled-components';
import { TR, More } from './style';

const TableProg = ({ Name, Status, Date, Modify }) => {

    return (
        <TR>
            <td>{Name}</td>
            <td>{Status}</td>
            <td>{Date}</td>
            <td>{Modify}<More>...</More></td>
        </TR>
    )
};

export default TableProg;