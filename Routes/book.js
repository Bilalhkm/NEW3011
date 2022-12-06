const express = require('express');
const routerBook = express.Router();
const connect = require('../database/db');

routerBook.get('/',async(req,res)=>{
    const db =await connect();
    const books =await db.collection('book').find().toArray()
    res.render('books/bookMain',{booksList:books});
})
routerBook.post('/',async(req,res)=>{
    const db =await connect();
    const data ={
        title:'power of consistency',
        author:'unknown'
    }
    await db.collection('book').insertOne(data);
    res.render('books/bookStoring',{id:req.params.id})
})
routerBook.get('/:id',(req,res)=>{
    res.render('books/singleBook',{id:req.params.id});
    console.log(req.params.id);
})
routerBook.patch('/:id',(req,res)=>{
    res.render('books/bookUpdate',{id:req.params.id})
})
routerBook.delete('/:id',(req,res)=>{
    res.render('books/bookDelete',{id:req.params.id})
})
 module.exports=routerBook;
 