import "./App.css";
import { Button } from "./components/Button";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { Input } from "./components/Input";
import Oscar from "./components/Oscar";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";
import { Container } from "./components/Container";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { Box } from "./components/context/Box";
import { UserContextProvider } from "./components/context/UserContext";
import { User } from "./components/context/User";
import { Counter } from "./components/class/Counter";
import { Private } from "./components/auth/Private";
import { Profile } from "./components/auth/Profile";
import { List } from "./components/generics/List";
import { RandomNumber } from "./components/restriction/RandomNumber";

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
      <Container styles={{ border: "1px solid black", padding: "1rem" }} />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <User />
      </UserContextProvider>
      <Counter message="The count Value " />
      <Private isLoggedIn={true} Component={Profile} />
      {/* <List
        items={["Batman", "Superman", "Wonder Woman"]}
        onClick={(item) => console.log(item)}
      /> */}
      <List
        items={[
          {
            first: "raihan",
            id: 1,
          },
          {
            first: "uddin",
            id: 2,
          },
        ]}
        onClick={(item) => console.log(item)}
      />
      <RandomNumber value={10} isPositive />
    </div>
  );
}

export default App;
