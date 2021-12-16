import React from "react";
import styled from "styled-components";
import { Colors } from "../../../styles/Global";
import { Row } from "./Row";

const TableStyled = styled.table`
  padding: 1em 0;
  --padding-cell: 1em 0.5em;
`;

const Th = styled.th`
  text-align: left;
  padding: var(--padding-cell);
  white-space: nowrap;
  color: ${Colors.C_1};
  ${(props) => props.full && "width: 100%"}
`;

const Table = ({ users, search }) => {
  const usersFiltereds = React.useMemo(
    () =>
      search === ""
        ? users
        : users.filter((user) =>
            user.fullName.toLowerCase().includes(search.toLowerCase())
          ),
    [users, search]
  );

  return (
    <TableStyled>
      <thead>
        <tr>
          <Th full>Nombres</Th>
          <Th>Rol</Th>
          <Th>Fecha de creación</Th>
          <Th>Última modificación</Th>
          <Th />
        </tr>
      </thead>
      <tbody>
        {usersFiltereds.map((user) => (
          <Row {...user} key={user.id} />
        ))}
      </tbody>
    </TableStyled>
  );
};

export default Table;
