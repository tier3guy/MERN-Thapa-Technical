const dotenv = require('dotenv');
const express = require('express');
const app = express();

app.use(express.json())


// configuring port 
const port = process.env.PORT || 3000;

// ENV
dotenv.config({ path: './config.env' });

// configuring database
require('./Database/connection');

// model
const User = require('./model/userSchema.js');

// routers
app.use(require('./router/router'));

app.listen(port, () => console.log(`The server is live at PORT :${port}`));