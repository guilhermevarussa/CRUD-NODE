const express = require('express');
const server = express();


server.use(express.json());

const fishies = ['tilapia', 'pintado', 'tambatinga', 'jatuarana'];

//get a fish
server.get('/fishies/:index', (req, resp) => {
    const { index } = req.params

    return resp.json(fishies[index]);
});


//get all fishies

server.get('/fishies', (req, resp) => {
    return resp.json(fishies)
});


//create 

server.post('/fishies', (req, resp) => {
    const name = req.body
    fishies.push(name);

    return resp.json(fishies)

})







server.listen(3000);
