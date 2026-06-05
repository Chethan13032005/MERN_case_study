const express = require('express');
const app=express();
const port=3000;

app.use(express.json());

const productsRouter=require('./routes/products');
app.use('/products',productsRouter);

app.get('/',(req,res)=>{
    res.send('Welcome to the Food Store!');
})

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
})