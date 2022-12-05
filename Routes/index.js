const express = require('express');
router= express.Router();

router.get('/',(req,res)=>{
    res.sendfile('pages/home.html');
    
});
router.all('/*',(req,res)=>{
    res.status(404).send("Oh uh, something went wrong");
})

module.exports=router;