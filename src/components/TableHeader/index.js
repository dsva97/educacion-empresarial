import React, { useState, useEffect } from 'react';
import searchIcon from '../../assets/HomeIcons/searchIcon.svg';
import styled from 'styled-components';
import { HeaderText, UsersAmount } from './style';
import Buttons2 from '../../components/Buttons2';
import ProgramsDB from '../../api/Programs.json';
import TableProg from '../TableProg';

const TableHeader = ({ amount, headerText, inputText, buttonText }) => {
    const [allPrograms, setAllUsers] = useState(ProgramsDB);

    // Styles
    const Header = styled.header`
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 16px;
        border-bottom: 1px solid #E5E7EB;
    `;

    const Container = styled.section`
        margin-top: 25px;
        margin-left: 35px;
        margin-right: 35px;
        background-color: #fff;
        box-shadow: 0px 4px 6px rgba(0,0,0,0.1);
        border-radius: 20px;
    `

    const SearchInput = styled.input`
        margin-left:2px;
        &:focus {
            outline: none;
        }
    `;

    const IconInput = styled.div`
        border: 1px solid #DDD;
        border-radius: 100px;
        box-shadow: 0px 1px 2px rgba(31, 41, 55, 0.08);
        margin-right: 15px;
        padding: 4px 8px 4px 8px;
        display: flex;
        align-items: center;
    `

    const TableH = styled.div`
        font-size: 12px;
        line-height: 16px;
        color: #31C3C3;
    `
    const THead = styled.div`
        border-bottom: 1px solid #E5E7EB;
        height: 52px;
        display: grid;
        align-items: center;
    `
    const TBody = styled.div`
        border-bottom: 1px solid #E5E7EB;
        font-family: Inter;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 20px;
        color: #503E9D;
    `

    const TR = styled.div`
        display: grid;
        grid-template-columns: 2fr 1fr 1fr 1fr;
        text-align: left;
        padding: 20px;
    `

    return (
        <Container>
            <Header>
                <div>
                    <HeaderText>{headerText} <UsersAmount>{amount}</UsersAmount></HeaderText>
                </div>
                <div style={{display:'inline-flex', alignItems: 'center'}}>
                    <IconInput>
                        <img src={searchIcon} alt='Ícono de busqueda' />
                        <SearchInput type="text" placeholder={inputText} src={searchIcon} style={{border: 'none'}}/>
                    </IconInput>
                    <div>
                        <Buttons2 buttonText={buttonText} active={true} />
                    </div>
                </div>
            </Header>
            <TableH>
                <THead>
                    <TR>
                        <th>Nombre</th>
                        <th>Estado</th>
                        <th>Fecha de creación</th>
                        <th>Modificado por última vez</th>
                    </TR>
                </THead>
                <TBody>
                    {allPrograms.programs.length > 0 && allPrograms.programs.map((e) =>
                    <TableProg
                        Name={e.Name}
                        Status={e.Status}
                        Date={e.Date}
                        Modify={e.Modify}
                    />)}
                </TBody>
            </TableH>
        </Container>
    )
};

export default TableHeader;