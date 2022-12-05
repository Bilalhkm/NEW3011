const express = require('express');
router= express.Router();

router.get('/',(req,res)=>{
    res.sendfile('./pages/home.html');
    
});

router.all('/*',(req,res)=>{
    res.status(404).sendfile("./pages/error.html");
})

module.exports=router;