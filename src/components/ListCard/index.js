import React, { useState, useEffect } from 'react';
import searchIcon from '../../assets/HomeIcons/searchIcon.svg';
import styled from 'styled-components';
import { HeaderText, UsersAmount } from './style';
import Buttons2 from '../Buttons2';
import Card from '../Card';
import ApplicantsDB from '../../api/Applicants.json';


const ListCard = ({ amount, headerText, inputText, buttonText }) => {
    const [allApplicants, setAllUsers] = useState(ApplicantsDB);

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
        margin-left: 62px;
        margin-right: 63px;
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
            {allApplicants.applicants.length>0 && allApplicants.applicants.map((e) =>
            <Card
                Date={e.EnrollmentDate}
                Name={e.fullName}
                Details={e.Details}
                Status={e.status}
            />)}
        </Container>
    )
};

export default ListCard;