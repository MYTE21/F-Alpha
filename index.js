const express = require('express');
const app = express();

// Imports Routes
const authRoute = require('./routes/auth');


// Routes Middle-wares
app.use('/api/user', authRoute);


// Port
app.listen(3000, ()=>
{
    console.log('Server is running ...!')
});