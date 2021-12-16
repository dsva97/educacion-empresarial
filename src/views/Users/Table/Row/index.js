import React from "react";
import styled from "styled-components";
import { RiMoreFill } from "react-icons/ri";
import { Colors } from "../../../../styles/Global";

const transformDate = (time) => {
  time = new Date(time);
  const date = time.getDate();
  const month = time.toDateString().split(" ")[1];
  const year = time.getYear();
  return `${date} ${month} ${year}`;
};

const isToday = (someDate) => {
  const today = new Date();
  return (
    someDate.getDate() === today.getDate() &&
    someDate.getMonth() === today.getMonth() &&
    someDate.getFullYear() === today.getFullYear()
  );
};

const transformDateTime = (time) => {
  time = new Date(time);
  const today = new Date();

  const textDate = isToday(time) ? `Hoy a las ` : time.toLocaleDateString();
  const textTime = time.toLocaleTimeString();

  return `${textDate} ${textTime}`;
};

const Td = styled.td`
  white-space: nowrap;
  padding: var(--padding-cell);
  color: ${Colors.C_2};
`;

const PopperStyled = styled.div`
  position: absolute;
  right: 100%;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
  border: 1px;
  background: white;
  border: 1px solid black;
  display: ${({ show }) => (show ? "block" : "none")};

  & > * {
    padding: 0.5em;
    cursor: pointer;
  }
`;
const Popper = ({ show, close }) => {
  return (
    <PopperStyled show={show}>
      <div onClick={close}>Editar</div>
      <div onClick={close}>Eliminar</div>
    </PopperStyled>
  );
};

const ContainerOptions = styled.div`
  position: relative;
`;

const Options = ({ id }) => {
  const [show, setShow] = React.useState(false);
  const containerRef = React.useRef();

  React.useEffect(() => {
    const container = containerRef?.current;

    const handleClickOutside = (e) => {
      if (container && !show && e.target !== container) {
        setShow(false);
      }
    };

    const handleClickOtherPopper = (e) => {
      if (container && e.detail.container !== container) {
        setShow(false);
      }
    };

    const dispatchCustomEvent = () => {
      window.dispatchEvent(
        new CustomEvent("click-some-popper", {
          detail: {
            container,
          },
        })
      );
    };

    container?.addEventListener("click", dispatchCustomEvent);
    window.addEventListener("click-some-popper", handleClickOtherPopper);
    window.addEventListener("click", handleClickOutside);

    return () => {
      container?.removeEventListener("click", dispatchCustomEvent);
      window.removeEventListener("click", handleClickOutside);
      window.removeEventListener("click-some-popper", handleClickOtherPopper);
    };
  }, []);

  return (
    <ContainerOptions onClick={(e) => e.stopPropagation()} ref={containerRef}>
      <RiMoreFill
        cursor={"pointer"}
        color={Colors.C_1}
        onClick={() => setShow(!show)}
      />
      <Popper id={id} show={show} close={() => setShow(false)} />
    </ContainerOptions>
  );
};

export const Row = ({ fullName, roleId, createdDate, updateDate }) => {
  const created = React.useMemo(
    () => transformDate(createdDate),
    [createdDate]
  );
  const update = React.useMemo(
    () => transformDateTime(updateDate),
    [updateDate]
  );
  return (
    <tr>
      <Td>{fullName}</Td>
      <Td>{roleId}</Td>
      <Td>{created}</Td>
      <Td>{update}</Td>
      <Td>
        {" "}
        <Options />{" "}
      </Td>
    </tr>
  );
};
