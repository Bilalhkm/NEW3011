const express = require('express');
app= express();
const index = require('./Routes/index');
const book = require('./Routes/book');
/* How to add event
})
 */
app.use('/',index)
app.use('/book',book)

app.listen(3000,()=>{console.log(`Server is running using express ... http://localhost:3000`);})

