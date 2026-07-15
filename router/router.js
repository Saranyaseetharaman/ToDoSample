const express = require('express');
const router = express.Router();
const ctrl = require('../controller/controller.js');

router.get('/', ctrl.renderUI);
router.post('/ui/todos', ctrl.uiAddTask);
router.post('/ui/todos/:id/toggle', ctrl.uiToggleTask);
router.put('/ui/todos/:id', ctrl.uiUpdateTask);
router.delete('/ui/todos/:id', ctrl.uiDeleteTask);
router.get('/api/todos', ctrl.apiGetTasks);

module.exports = router;