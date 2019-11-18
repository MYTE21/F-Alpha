const router = require('express').Router();
const User = require('../model/User');

router.post('/register', async (req, res)=>
{
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        birthday: req.body.birthday,
        phone: req.body.phone,
        password: req.body.password
    });
    try{
        const saveUser = await user.save();
        res.send(saveUser);
    }catch (e) {
        res.status(400).send(e);
    }
    console.log("req.body : ",req.body.name);
});

module.exports = router;