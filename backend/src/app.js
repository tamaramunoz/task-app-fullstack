const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('received')
});

app.post('/', (req, res) => {
    res.send('saved')
});

app.put('/', (req, res) => {
    res.send('updated')
});

app.delete('/', (req, res) => {
    res.send('deleted')
});

module.exports = app;