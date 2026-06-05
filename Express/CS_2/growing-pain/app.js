const express = require('express');
const app = express();
const port = 3000;
const classesRouter = require('./routes/classes');
const eventRouter = require('./routes/event');
const contactRouter = require('./routes/contact')

app.use('/classes', classesRouter);

app.use('/event',eventRouter);


app.use('/contact',contactRouter);

app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.send('Welcome to Greenfield Center!');
});

app.listen(port,()=>{
    console.log(`Community Center server is running at http://localhost:${port}`);
});