const express = require('express');
const router = express.Router();
const todoController = require('../controller/controller');

router.get('/', todoController.getTodos);
router.post('/add', todoController.createTodo);
router.post('/toggle/:id', todoController.toggleTodo);
router.post('/update/:id', todoController.updateTodo);
router.post('/delete/:id', todoController.deleteTodo);   
router.delete('/delete/:id', todoController.deleteTodo); 

module.exports = router;