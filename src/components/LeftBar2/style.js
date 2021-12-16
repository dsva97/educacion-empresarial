import styled from "styled-components";
import { Colors } from "../../styles/Global";

const NavContainer = styled.nav`
    grid-row: 1 / 3;
    background-color: ${Colors.White_2};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 25px 20px 28px 20px;
    box-shadow: 0 0 10px 0 #0000003b;
    z-index: 1;
`;

const LogOut = styled.button`
    background: none;
    border: none;
    font-weight: 400;
    font-size: 16px;
    line-height: 19.36px;
    text-decoration: underline;
    color: ${Colors.C_2};
    cursor: pointer;
    text-align: center;
`;

const LinksItems = styled.li`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 10px;
    border-radius: 4px;
`;   

const LinkText = styled.p`
    text-decoration: none;
`;

const Space = styled.div`
    width: 8px;
`;

export { Space, LinkText, LinksItems, LogOut, NavContainer };