import styled from "styled-components";
import { Colors } from '../../styles/Global';

const TR = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    text-align: left;
    padding: 20px;
`
const More = styled.span`
    font-size: 20px;
    line-height: 16px;
    color: #31C3C3;
    align-items: center;
    font-weight: bold;
    margin-left: 14px;
    cursor:pointer;
`

export {TR, More};