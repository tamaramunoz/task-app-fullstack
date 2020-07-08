const express = require('express');
const cors = require('cors');
const app = express();

// settings
app.set('port', process.env.PORT || 4000);

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.get('/api/users', (req, res) => {
    res.send('User routes')
});

app.get('/api/notes', (req, res) => {
    res.send('Notes routes')
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