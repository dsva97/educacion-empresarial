import React, { useState, useEffect } from "react";
import Home from "../Home";
import UsersDB from "../../api/Users.json";
import styled from "styled-components";

// Components
import TopSectionBar from "../../components/TopSectionBar";
import Header from "./Header";
import Table from "./Table";

const Container = styled.section`
  margin-top: 25px;
  margin-left: 62px;
  margin-right: 63px;
  background-color: #fff;
  padding: 16px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
`;

const Users = () => {
  const [users, setAllUsers] = useState(UsersDB.users);
  const [search, setSearch] = useState("");
  return (
    <div>
      <Home>
        <TopSectionBar currentSection={"Usuarios"} />
        <Container>
          <Header
            search={search}
            setSearch={setSearch}
            amount={users.length}
            buttonText="Agregar usuario"
            inputText="Buscar usuario"
            headerText="Todos los usuarios"
          />
          <Table users={users} search={search} />
        </Container>
      </Home>
    </div>
  );
};

export default Users;
