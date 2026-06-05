const express = require('express')
const router = express.Router();

router.get('/',(req,res)=>{
     const events=[
        'Yoga class - Monday 7pm',
        'Gardening workshop - Wednesday 5pm',
        'Book club - Friday 6pm'
    ]
    res.json(events);
});

module.exports=router;