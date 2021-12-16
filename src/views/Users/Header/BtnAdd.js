import React from 'react'
import { Button } from "../../../components/Buttons";
import { HiOutlinePlusSm } from 'react-icons/hi'
import styled from 'styled-components'

const Content = styled.span`
    display: flex;
    align-items: center;
`

export const BtnAdd = () => {
    return (
        <Button>
            <Content>
                <HiOutlinePlusSm size="1.25em" />
                Agregar Usuario
            </Content>
        </Button>
    )
}
