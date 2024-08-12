const express = require('express');
const axios = require('axios');
const app = express();

const f1Teams = {
    "Mercedes": [
      { name: "Lewis Hamilton", number: 44 },
      { name: "George Russell", number: 63 }
    ],
    "Red Bull Racing": [
      { name: "Max Verstappen", number: 1 },
      { name: "Sergio Perez", number: 11 }
    ],
    "Ferrari": [
      { name: "Charles Leclerc", number: 16 },
      { name: "Carlos Sainz", number: 55 }
    ],
    "McLaren": [
      { name: "Lando Norris", number: 4 },
      { name: "Oscar Piastri", number: 81 }
    ],
    "Aston Martin": [
      { name: "Fernando Alonso", number: 14 },
      { name: "Lance Stroll", number: 18 }
    ],
    "Alpine": [
        { name: "Pierre Gasly", number: 10 },
        { name: "Esteban Ocon", number: 31 }
      ],
    "RB": [
        { name: "Yuki Tsunado", number: 22 },
        { name: "Daniel Ricciardo", number: 3 }
      ],
    "Kick Sauber": [
        { name: "Zhou Guanyu", number: 24 },
        { name: "Valterri Bottas", number: 77 }
      ],
    "Williams": [
        { name: "Alexander Albon", number: 23 },
        { name: "Logan Sargent", number: 2 }
      ],
    "Haas": [
        { name: "Nico Hulkenburg", number: 27 },
        { name: "Kevin Magnussen", number: 20 }
      ],
  };

// Fetch data from the Open F1 API
app.get("/api-data", async (req, res) => {
    try {
        const response = await axios.get('https://api.openf1.org/v1/drivers'); // Replace with your API URL
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching data from API wtf');
    }
});


// Fetch car data from a team's specifc race
app.get("/race-statistics", async (req, res) =>{
    try{
        const raceStats1 = await axios.get('https://api.openf1.org/v1/car_data?driver_number=&meeting_key=700&session_key=123');  // For racer 1
        const raceStats2 = await axios.get('https://api.openf1.org/v1/car_data?driver_number=55&meeting_key=700&session_key=123');  // For racer 2
        res.json(raceStats1.data);
        res.json(raceStats2.data);
    }catch(error){
        res.status(500).send('Error fetching data from API');
    }
});

// Fetch weather data for a particular race activity
app.get("/weather-data", async (req, res) => {
    try {
        const response = await axios.get('https://api.openf1.org/v1/weather?meeting_key=1229&session_key=9472');
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching weather data from API');
    }
});

app.get("/api", (req, res) => {
    res.json({ "users": ["userOne", "userTwo", "userThree", "userFour"] });
});



app.listen(5000, () => { console.log(`Server started on port 5000`)})
