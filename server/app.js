const dotenv = require('dotenv');
const express = require('express');
const app = express();

app.use(express.json())

// ENV
dotenv.config({ path: './config.env' });

// configuring port 
const port = process.env.PORT || 5000;

// configuring database
require('./Database/connection');


// routers
app.use(require('./router/router'));

app.listen(port, () => console.log(`The server is live at PORT :${port}`));