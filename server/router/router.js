const express = require('express');
const router = express.Router();

// configuring MiddleWare
const middleware = (req, res, next) => {
    console.log('The is middleware is running');
    next();
}

// creating routes
router.get('/', (req, res) => {
    res.send('Hello this is HOME routing');
});

router.get('/about', middleware, (req, res, next) => {
    res.send('Hello this is ABOUT routing');
});

router.get('/login', (req, res) => {
    res.send('Hello this is LOGIN routing');
});

router.post('/signup', (req, res) => {
    console.log(req.body);
    res.send('Hello this is SIGNUP routing');
});

module.exports = router;