const router = require('express').Router();
const User = require('../model/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { registerValidation, loginValidation } = require('../validation');


router.post('/register', async (req, res)=>
{
    // Validate data before making user
    const { error } = registerValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    // Is or Not already in the database
    const emailExist = await User.findOne({email: req.body.email});
    if(emailExist) return res.status(400).send('Email already Exists');

    // Hash The Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // Create new users
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        birthday: req.body.birthday,
        phone: req.body.phone,
        password: hashedPassword
    });
    try{
        const saveUser = await user.save();
        res.send(saveUser);
    }catch (e) {
        res.status(400).send(e);
    }
    console.log("req.body : ",req.body.name);
});

// LOGIN
router.post('/login', async (req, res)=>{
    // Validate data before making user
    const { error } = loginValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    // Is or Not already in the database
    const user = await User.findOne({email: req.body.email});
    if(!user) return res.status(400).send('Email does not match');
    // Password is correct
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if(!validPass) return res.status(400).send('Invalid Password')

    // Create and assign a token
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
    res.header('auth-token', token).send(token);

});

module.exports = router;