const express = require('express');
router= express.Router();


router
 .route('/book')
 .get((req,res)=>{
    res.sendfile('./book.html');
 })
 .post((req,res)=>{
    res.sendfile('./bookStoring.html')
 })
router.get('/book/:id',(req,res)=>{
    res.sendfile('./singleBook.html');
    console.log(req.params.id);
 })
router.get('/',(req,res)=>{
    res.sendfile('pages/home.html');
    
});
router.all('/*',(req,res)=>{
    res.status(404).send("Oh uh, something went wrong");
})

module.exports=router;