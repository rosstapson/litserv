const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("zomg")
})

app.listen(3001, () => {
    console.log('zomg. listserv is listening intently on 3001')
})