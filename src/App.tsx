import "./App.css";
import { Button } from "./components/Button";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { Input } from "./components/Input";
import Oscar from "./components/Oscar";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";

function App() {
  const personName = {
    first: "raihan",
    last: "uddin",
  };
  const nameList = [
    {
      first: "Raihan",
      last: "Uddin",
    },
    {
      first: "Uddin",
      last: "Raihan",
    },
    {
      first: "Rashed",
      last: "Raihan",
    },
  ];
  return (
    <div className="App">
      <Greet name={"raihan"} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="loading" />
      <Heading>PlaceHolder Text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicpario!</Heading>
      </Oscar>
      <Button
        handleClick={(event, id) => console.log("RAIHAN UDDIN ", event, id)}
      />
      <Input value="" handleChange={(event) => console.log(event)} />
    </div>
  );
}

export default App;
