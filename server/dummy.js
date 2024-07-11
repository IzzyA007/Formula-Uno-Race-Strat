const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.get('/api-data', async (req, res) => {
    try {
        const response = await axios.get('https://api.openf1.org/v1/drivers'); // Replace with your API URL
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching data from API sds');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

//dummy server.js
