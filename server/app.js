const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello, world! The server is live now ..');
});

app.get('/about', (req, res) => {
    res.send('Hello, about world! The server is live now ..');
});

app.get('/login', (req, res) => {
    res.send('Hello, login world! The server is live now ..');
});

app.get('/signup', (req, res) => {
    res.send('Hello, signup world! The server is live now ..');
});

app.listen(port, () => console.log(`The server is live at PORT :${port}`));