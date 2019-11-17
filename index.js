const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');


dotenv.config();

// Connect to DB
mongoose.connect(process.env.DB_CONNECT,
    { useNewUrlParser: true },
    ()=> console.log('connected to db'));

// Imports Routes
const authRoute = require('./routes/auth');


// Routes Middle-wares
app.use('/api/user', authRoute);


// Port
app.listen(3000, ()=>
{
    console.log('Server is running ...!')
});