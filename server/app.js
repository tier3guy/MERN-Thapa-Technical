const express = require('express');
const app = express();

// configuring port 
const port = process.env.PORT || 3000;


// configuring MiddleWare
const middleware = (req, res, next) => {
    console.log('The is middleware is running');
}
middleware();

app.get('/', (req, res) => {
    res.send('Hello, world! The server is live now ..');
});

app.get('/about', middleware, (req, res, next) => {
    res.send('Hello, about world! The server is live now ..');
});

app.get('/login', (req, res) => {
    res.send('Hello, login world! The server is live now ..');
});

app.get('/signup', (req, res) => {
    res.send('Hello, signup world! The server is live now ..');
});

app.listen(port, () => console.log(`The server is live at PORT :${port}`));