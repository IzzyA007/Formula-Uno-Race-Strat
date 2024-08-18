import React, { useEffect, useState } from 'react';
import TeamSelect from "./components/team-select";
import RaceComponents from "./components/race-parameters";
import './App.css';

function App() {
  const [backendData, setBackendData] = useState([{}]); 
  const [counter, setCounter] = useState(1); 
  const [selectedTeam, setSelectedTeam] = useState(''); 

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data);
      }
    )
  }, []);

  // Fetch car data when the team is selected
  useEffect(() => {
    if (selectedTeam) {
      fetch(`/race-statistics?team=${selectedTeam}`)
        .then(response => response.json())
        .then(data => {
          console.log('Car data:', data);
        })
        .catch(error => console.error('Error fetching race data:', error));
    }
  }, [selectedTeam]);

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
