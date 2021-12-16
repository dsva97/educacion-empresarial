import React from "react";
import styled from "styled-components";
import searchIcon from "../../../assets/HomeIcons/searchIcon.svg";

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0.25em;
  cursor: pointer;
  border-radius: 1.25em;
  border: 1px solid rgba(0, 0, 0, 0);
  --shadow-size: 3px;
  -webkit-box-shadow: 0px var(--shadow-size) 30px 0px rgba(0, 0, 0, 0.22);
  box-shadow: 0px var(--shadow-size) 30px 0px rgba(0, 0, 0, 0.22);
  margin-right: 1em;
  overflow: hidden;
  transition: box-shadow 0.3s;

  &:hover {
    --shadow-size: 5px;
  }
`;

const Input = styled.input`
  border: none;
  outline: none;
`;

export const Searcher = ({ search, setSearch }) => {
  const inputRef = React.createRef();
  return (
    <Container onClick={() => inputRef.current?.focus()}>
      <img draggable={false} src={searchIcon} alt="Ícono de busqueda" />
      <Input
        ref={inputRef}
        type="text"
        placeholder="Buscar usuario"
        search={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </Container>
  );
};
