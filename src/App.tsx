import "./App.css";
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";

function App() {
  const personName = {
    first: 'raihan',
    last: 'uddin',
  }
  const nameList = [
    {
      first: 'Raihan',
      last: 'Uddin',
    },
    {
      first: 'Uddin',
      last: 'Raihan',
    },
    {
      first: 'Rashed',
      last: 'Raihan'
    }
  ]
  return (
    <div className="App">
      <Greet name={"raihan"} messageCount={100} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
    </div>
  );
}

export default App;
