const express = require('express');
app= express();
const index = require('./Routes/index');
const books = require('./Routes/book');

app.use('/book',books)
app.use('/',index)


app.listen(3000,()=>{console.log(`Server is running using express ... http://localhost:3000`);})

