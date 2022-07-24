import React, { useState } from "react";
import SearchBar from "./components/SearchBar";

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
  const [count, setCount] = useState(0);

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

  return (
    <div>
      <button onClick={handleClick} name="all">
        All
      </button>
      <button onClick={handleClick} name="people">
        People
      </button>
      <button onClick={handleClick} name="calendar">
        Calendar
      </button>
      <button onClick={handleClick} name="emails">
        Emails
      </button>

      <button onClick={() => setCount(count + 1)}>{count}</button>

      <SearchBar items={data} onItemSelected={() => {}} />
    </div>
  );
}

export default App;
