import React, { useState } from "react";
import SearchBar from "./components/SearchBar";

import styled from "styled-components";

const Button = styled.button`
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  border: none;
  background-color: white;
  border: solid 2px #ccc;
  cursor: pointer;
  width: 80px;
  &:hover {
    background-color: #efefef;
  }
  .activated{
    background-color: #00366
    color: white;
    border: solid 2px #26aeff;
  }
`;

const AppContainer = styled.div`
  margin: 30px auto;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const people = [
  { id: "people-01", title: "John Perez" },
  { id: "people-02", title: "Sergio Gonzalez" },
  { id: "people-03", title: "Laura Garcia" },
  { id: "people-04", title: "Sofia Martinez" },
  { id: "people-05", title: "Agustin Torres" },
];

const calendar = [
  { id: "calendar-01", title: "Junta semanal equipo" },
  { id: "calendar-02", title: "Donación" },
  { id: "calendar-03", title: "Revisión propuestas" },
  { id: "calendar-04", title: "Sesión seguimiento" },
  { id: "calendar-05", title: "Reunion cliente" },
];

const emails = [
  { id: "email-01", title: "Reporte de resultados" },
  { id: "email-02", title: "Requisitos para el cambio" },
  { id: "email-03", title: "Status funcionalidad" },
  { id: "email-04", title: "Próximos eventos" },
  { id: "email-05", title: "Participa en la encuesta" },
];

function App() {
  const [data, setData] = useState([...people, ...calendar, ...emails]);
  const [selection, setSelection] = useState(null);
  const [currentOption, setCurrentOption] = useState("all");

  const handleClick = (e) => {
    const option = e.target.name;

    switch (option) {
      case "all":
        setData([...people, ...calendar, ...emails]);
        setCurrentOption("all");
        break;

      case "people":
        setData([...people]);
        setCurrentOption("people");
        break;

      case "calendar":
        setData([...calendar]);
        setCurrentOption("calendar");
        break;

      case "emails":
        setData([...emails]);
        setCurrentOption("emails");
        break;

      default:
    }
  };

  const handleItemSelected = (item) => {
    setSelection(item);
  };

  return (
    <div>
      <AppContainer>
        <Button onClick={handleClick} name="all">
          All
        </Button>
        <Button onClick={handleClick} name="people">
          People
        </Button>
        <Button onClick={handleClick} name="calendar">
          Calendar
        </Button>
        <Button onClick={handleClick} name="emails">
          Emails
        </Button>
      </AppContainer>
      <AppContainer>
        {selection ? <div>You selected: {selection.title}</div> : ""}
      </AppContainer>
      <SearchBar items={data} onItemSelected={handleItemSelected} />
    </div>
  );
}

export default App;
