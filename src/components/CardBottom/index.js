import React from 'react';
import searchIcon from '../../assets/HomeIcons/searchIcon.svg';
import styled from 'styled-components';
import { HeaderText, UsersAmount } from './style';

import ImgIcon from '../../assets/HomeIcons/configIcon.svg';
import ApplicantsIcon from '../../assets/HomeIcons/Applicants.svg';

const CardBottom = () => {

    // Styles
    const LinksItems = styled.li`
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
        width: 233px;
        height: 93px;
        background: #D7D7FF;
        box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.04);
        border-radius: 15px;
    `;

    const LinkText = styled.p`
        text-decoration: none;
        width: 143.6px;
        line-height: 20px;
        color: #113255;
    `;

    const Space = styled.div`
        width: 8px;
    `;

    const HeaderCardB = styled.div`
        margin-top: 20px;
        display:flex;
        padding: 14px 0 10px 38px;
        column-gap: 12px;
    `;

    return (
        <HeaderCardB>
            <LinksItems>
                <img src={ ApplicantsIcon } alt=''/>
                <Space />
                <LinkText>Postulantes</LinkText>
            </LinksItems>
            <LinksItems>
                <img src={ ApplicantsIcon } alt=''/>
                <Space />
                <LinkText>Preguntas Frecuentes</LinkText>
            </LinksItems>
            <LinksItems>
                <img src={ ApplicantsIcon } alt=''/>
                <Space />
                <LinkText>Encuestas de satisfacción</LinkText>
            </LinksItems>
        </HeaderCardB>
    )
};

export default CardBottom;