import React, {useEffect, useState} from 'react'
import TeamSelect from "./components/team-select";
import './App.css';

function App() {

  const [backendData, setBackendData] = useState([{}])// Contains backend data obtain from the backend api

  // Fetch api backend data and store it in a variable
  useEffect(() =>{
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  return (
    <div>
      <TeamSelect/>
      {/*{(typeof backendData.users === 'undefined') ? (*/}
      {/*    <p>Loading..</p>*/}
      {/*  ): (*/}
      {/*    backendData.users.map((user, i) =>(*/}
      {/*      <p key={i}>{user}</p>*/}
      {/*    ))*/}
      {/*)}*/}
    </div>
  );
}

export default App;
