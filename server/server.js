// Using CommonJS model
const express = require('express');
const axios = require('axios');
const app = express();


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
    const response = await axios.get('https://api.openf1.org/v1/drivers?team_name=Kick Sauber'); // This might have to be let
    console.log(driverName1);
    res.json(response.data);
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).send('Error fetching car data API');
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