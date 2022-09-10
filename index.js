const express = require('express');
const server = express();


server.use(express.json());

const fishies = ['tilapia', 'pintado', 'tambatinga', 'jatuarana'];

//get a fish
server.get('/fishies/:index', (req, resp) => {
    const { index } = req.params
})















server.listen(3000);
