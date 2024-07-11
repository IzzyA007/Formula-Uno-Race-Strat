const express = require('express');
const axios = require('axios');
const app = express();

// Fetch data from the Open F1 API
//app.get("/api-data", async (req, res) => {
//    try {
//        const response = await axios.get('https://api.openf1.org/v1/car_data'); // Replace with your API URL
//        res.json(response.data);
//    } catch (error) {
//        res.status(500).send('Error fetching data from API');
//    }
//});

app.get("/api", (req, res) => {
    res.json({ "users": ["userOne", "userTwo", "userThree", "userFour"] });
});



app.listen(5000, () => { console.log(`Server started on port 5000`)})
