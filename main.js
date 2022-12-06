const express = require('express');
const app= express();
const port =3000;
const index = require('./Routes/index');
const books = require('./Routes/book');

app.set('view engine','pug');
app.use('/book',books);
app.use('/',index);



app.listen(3000,()=>{console.log(`Server is running using express ... http://localhost:${port}`);});

