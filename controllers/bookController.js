const connect = require("../database/db")

const list=async(req,res)=>{
    const db= await connect();
    const books=await db.collection('book').find().toArray();
    res.json(books); 
} 
const show= async(req,res)=>{
    const db= await connect();
    const ObjectId = require('mongodb').ObjectId;
    const _id= ObjectId(req.params.id)
    const book=await db.collection('book').find(_id).toArray();
    res.json(book);
}
const add=async (req,res)=>{
    const db= await connect();
    await db.collection('book').insertOne(req.body);
    res.status(201).json({data :'book is added'});
}
const update= async (req,res)=>{
    const db = await connect();
    const ObjectId = require('mongodb').ObjectId;
    const _id= ObjectId(req.params.id);
    await db.collection('book').updateOne({_id},{$set:req.body});
    res.json({data:'book is updated'});
}
const deleting =async (req,res)=>{
    const ObjectId = require('mongodb').ObjectId;
    const _id= ObjectId(req.params.id);
    const db=await connect()
    await db.collection('book').deleteOne({_id});
    res.status(204).json()
}

module.exports={list:list,show:show,add:add,update:update,deleting:deleting }
