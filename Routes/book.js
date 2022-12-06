const express = require('express');
const routerBook = express.Router();
const bookController =require('../controllers/bookController')

routerBook
     .route('/')
     .get(bookController.list)
     .post(bookController.add);
routerBook
     .route('/:id')
     .get(bookController.show)
     .patch(bookController.update)
     .delete(bookController.deleting)
 module.exports=routerBook;
 