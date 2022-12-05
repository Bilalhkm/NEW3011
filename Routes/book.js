const express = require('express');
router= express.Router();
router
 .route('/')
 .get((req,res)=>{
    res.sendfile('./book.html');
 })
 .post((req,res)=>{
    res.sendfile('./bookStoring.html')
 })
 .get('/:id',(req,res)=>{
    res.sendfile('./singleBook.html');
    console.log(req.params.id);
 })
 module.exports=router;