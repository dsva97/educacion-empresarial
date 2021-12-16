import React from "react";
import { Button } from "../../../components/Buttons";
import styled from "styled-components";
import { Colors } from "../../../styles/Global";
import { Title } from "./Title";
import { Searcher } from "./Searcher";
import { BtnAdd } from "./BtnAdd";

// Styles
const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Header = ({ amount, headerText, search, setSearch }) => {
  return (
    <HeaderStyled>
      <Title headerText={headerText} amount={amount} />
      <Searcher search={search} setSearch={setSearch} />
      <BtnAdd />
    </HeaderStyled>
  );
};

export default Header;
