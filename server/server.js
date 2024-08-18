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
  ]
};

function getTeamNameFromRequest(req) {
  const teamName = req.query.team;
  if (!teamName) {
    throw new Error('Missing required query parameter "team"');
  }
  return teamName;
}

// Fetch data from the Open F1 API
app.get("/api-data", async (req, res) => {
  try {
    const response = await axios.get('https://api.openf1.org/v1/drivers');
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error fetching data from API wtf');
  }
});

// Fetch car data from a team's specific race
// Fetch car data from a team's specific race
app.get("/race-statistics", async (req, res) => {
  try {
    const teamName = getTeamNameFromRequest(req);

    if (!f1Teams[teamName]) {
      return res.status(400).send('Invalid team name');
    }

    const driver1Number = f1Teams[teamName][0].number;
    const driver2Number = f1Teams[teamName][1].number;

    // Replace these URLs with the correct ones for the API
    const raceStats1Url = `https://api.openf1.org/v1/car_data?driver_number=${driver1Number}&meeting_key=1229&session_key=9465`;
    const raceStats2Url = `https://api.openf1.org/v1/car_data?driver_number=${driver2Number}&meeting_key=1229&session_key=9465`;

    // Fetch data for both drivers
    const [raceStats1, raceStats2] = await Promise.all([
      axios.get(raceStats1Url),
      axios.get(raceStats2Url)
    ]);

    // Combine the results
    res.json({
      driver1Stats: raceStats1.data,
      driver2Stats: raceStats2.data
    });
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).send('Error fetching data from API');
  }
});


// Fetch weather data for a particular race activity
app.get("/weather-data", async (req, res) => {
  try {
    const teamName = getTeamNameFromRequest(req);

    // Assuming you have a way to determine the meeting and session keys based on the team
    const meetingKey = 1229; // Replace with actual meeting key
    const sessionKey = 9472; // Replace with actual session key

    const response = await axios.get(`https://api.openf1.org/v1/weather?meeting_key=${meetingKey}&session_key=${sessionKey}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error fetching weather data from API');
  }
});

app.get("/api", (req, res) => {
  res.json({ "users": ["userOne", "userTwo", "userThree", "userFour"] });
});

app.listen(5000, () => { console.log(`Server started on port 5000`)});