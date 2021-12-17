import React from 'react';
import searchIcon from '../../assets/HomeIcons/searchIcon.svg';
import styled from 'styled-components';
import { HeaderText, UsersAmount } from './style';
import LittleButtons from '../../components/LittleButtons';

import PencilIcon from '../../assets/HomeIcons/edit.svg';
import TrashIcon from '../../assets/HomeIcons/trash.svg';


const Card = ({ Date, Name, Details, Status}) => {

    // Styles
    const Header = styled.header`
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-family: Inter;
        font-style: normal;
        font-weight: 500;
    `;

    const TitleHeader = styled.div`
        font-size: 15px;
        line-height: 18px;
        letter-spacing: 0.01em;
        color: #323C47;
        margin-bottom: 10px;
    `

    const DetailsHeader = styled.div`
        font-size: 12px;
        line-height: 15px;
        text-align: right;
        letter-spacing: 0.01em;
        color: #90A0B7;
    `
    const TitleDate = styled.div`
        font-size: 13px;
        line-height: 16px;
        letter-spacing: 0.01em;
        color: #4C5862;
        opacity: 0.5;
        margin-bottom: 25px;
        margin-right: 10px;
    `
    const DateHeader = styled.div`
        font-weight: normal;
        font-size: 13px;
        line-height: 16px;
        letter-spacing: 0.01em;
        color: #4C5862;
    `

    const NameHeader = styled.div`
        font-weight: normal;
        font-size: 13px;
        line-height: 16px;
        display: flex;
        align-items: center;
        letter-spacing: 0.01em;
        color: #707683;
        margin-left: 15px;
    `
    const Update = styled.div`
        column-gap: 10px;
        display:none;
    `

    const Container = styled.section`
        margin: 25px 110px 0 110px;
        background-color: #fff;
        padding: 16px;
        box-shadow: 0px 4px 6px rgba(0,0,0,0.1);
        border-radius:5px;
        &:hover ${Update}{
            display: flex;
        }
    `

    const IconInput = styled.div`
        border: 1px solid #DDD;
    `

    const Photo = styled.img`
        background-image: url('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png');
        width: 30px;
        height: 30px;
        border-radius: 100px;
        border: 1px solid black;
    `

    

    const ButtonIcon = styled.button`
        border:none;
        background: transparent;
    `
    const ButtonContainer = styled.div`
        display:flex;
        column-gap: 10px;
    `


    return (
        <Container>
            <Header>
                <TitleHeader>Postulación al programa de mentorías</TitleHeader>
                <DetailsHeader>{Details}</DetailsHeader>
            </Header>
            <div style={{display:'flex'}}>
                <TitleDate>Fecha de inscripción:</TitleDate>
                <DateHeader>{Date}</DateHeader>
            </div>
            <Header>
                <div style={{display:'flex'}}>
                    <Photo></Photo>
                    <NameHeader>{Name}</NameHeader>
                </div>
                <ButtonContainer>
                    <Update>
                        <ButtonIcon><img src={PencilIcon} /></ButtonIcon>
                        <ButtonIcon><img src={TrashIcon} /></ButtonIcon>
                    </Update>
                    <LittleButtons buttonText={Status} active={true} />
                </ButtonContainer>            
            </Header>
        </Container>
    )
};

export default Card;