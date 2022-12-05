const express = require('express');
routerBook= express.Router();

routerBook.get('/',(req,res)=>{
    res.sendfile('./pages/books/book.html');
})
routerBook.post('/',(req,res)=>{
    res.sendfile('./pages/books/bookStoring.html')
})
routerBook.get('/:id',(req,res)=>{
    res.sendfile('./pages/books/singleBook.html');
    console.log(req.params.id);
})
 module.exports=routerBook;