const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Imports Routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');

dotenv.config();

// Connect to DB
mongoose.connect(process.env.DB_CONNECT,
    { useUnifiedTopology: true , useNewUrlParser: true},
    ()=> console.log('connected to db')
);

// Middleware
app.use(express.json());
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);


// Port
app.listen(3000, ()=>
{
    console.log('Server is running ...!')
});