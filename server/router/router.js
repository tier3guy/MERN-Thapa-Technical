const express = require('express');
const router = express.Router();

require('../Database/connection');
const User = require('../model/userSchema');

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

router.post('/signup', async(req, res) => {
    const { name, email, phone, password, confirmPassword } = req.body;
    const user = new User({ name, email, phone, password, confirmPassword });

    try {
        const userExists = await User.findOne({ email: email });
        if (userExists) {
            console.log("ERROR : USER ALREADY EXISTS");
            return res.status(500).send("ERROR : USER ALREADY EXISTS");
        }
        let saved = await user.save();
        if (saved) {
            console.log("USER ADDED SUCCESSFULLY");
            res.status(201).send("USER ADDED SUCCESSFULLY");
        }
    } catch (err) {
        console.log(err);
    }
});

router.post('/login', async(req, res) => {
    const { email, password } = req.body;
    const registeredUser = await User.findOne({ email: email });

    if (!registeredUser) res.send("USER NOT FOUND");
    if (registeredUser.password === password) {
        res.send("USER AUTHENTICATED");
    } else {
        res.send("Invalid Credentials");
    }
})

module.exports = router;