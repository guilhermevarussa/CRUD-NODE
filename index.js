const express = require('express');
const server = express();


server.use(express.json());

const fishies = ['tilapia', 'pintado', 'tambatinga', 'jatuarana'];

server.get('/fishies/:index', (req, resp) => {
    const { index } = req.params

    return resp.json(fishies[index]);
});



server.get('/fishies', (req, resp) => {
    return resp.json(fishies)
});


server.post('/fishies', (req, resp) => {
    const { name } = req.body
    fishies.push(name);

    return resp.json(fishies)

});


server.put('/fishies/:index', (req, resp) => {
    const { index } = req.params
    const { name } = req.body

    fishies[index] = name;

    return resp.json(fishies);

});

server.delete('/fishies/:index', (req, resp) => {
    const { index } = req.params


    fishies.splice(index, 1)

    return resp.json({ message: 'the fish was deleted' })
});






server.listen(3000);
