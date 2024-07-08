const express = require('express')
const app = express()

app.get("/api", (req, res) =>{
    res.send("This will be the root URL of the server");
})

app.listen(5000, () => {console.log("Server started on port 500")})