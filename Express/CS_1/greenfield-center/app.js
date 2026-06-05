const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    res.send('Welcome to Greenfield Center!');
});

app.get('/events',(req,res)=>{
    const events=[
        'Yoga class - Monday 7pm',
        'Gardening workshop - Wednesday 5pm',
        'Book club - Friday 6pm'
    ]
    res.json(events);
});

app.get('/contact',(req,res)=>{
    res.json({
        email:"contact@greenfieldcenter.org",
        phone:"123-456-789"
    });
});

app.listen(port,()=>{
    console.log(`Community Center server is running at http://localhost:${port}`);
});