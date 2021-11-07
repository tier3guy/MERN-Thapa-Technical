const mongoose = require('mongoose');

// configuring database
const db = process.env.DB;
mongoose.connect(db)
    .then(() => console.log('Connected to Mongo'))
    .catch(err => console.log('Error connecting to Mongo'));