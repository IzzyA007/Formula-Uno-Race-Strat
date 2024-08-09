import React, { useEffect, useState } from 'react';
import TeamSelect from "./components/team-select";
import RaceComponents from "./components/race-parameters";
import './App.css';

function App() {
  const [backendData, setBackendData] = useState([{}]); // Contains backend data obtained from the backend api
  const [counter, setCounter] = useState(1); // Tracks the current step
  const [selectedTeam, setSelectedTeam] = useState(''); // Tracks the selected team

  // Fetch api backend data and store it in a variable
  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data);
      }
    )
  }, []);

  // Moves to next step
  const addRowHandler = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      {counter === 1 && <TeamSelect onNext={addRowHandler} setTeam={setSelectedTeam} />}
      {counter === 2 && <RaceComponents team={selectedTeam} />}
    </div>
  );
}

export default App;
