const router = require('express').Router();
const verify = require('./verifyToken');

router.get('/', verify, (req, res)=>{
   res.json({
       posts: {
           title: 'My First Post',
           details: 'Only validate users can access the data ....! Random people can not do this...!'
       }
   })
});





module.exports = router;