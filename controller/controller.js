const { todos } = require('../model/model.js');

const renderUI = (req, res) => {
    const editId = req.query.edit;
    const editTask = todos.find(t => t.id == editId) || null;
    res.render('index', { tasks: todos, editTask });
};

const uiAddTask = (req, res) => {
    if (req.body.title) {
        const newTodo = { id: Date.now(), title: req.body.title, completed: false };
        todos.push(newTodo);
    }
    res.redirect('/');
};

const uiToggleTask = (req, res) => {
    const task = todos.find(t => t.id == req.params.id);
    if (task) task.completed = !task.completed;
    res.redirect('/');
};

const uiUpdateTask = (req, res) => {
    const task = todos.find(t => t.id == req.params.id);
    if (task) task.title = req.body.title;
    res.redirect('/');
};

const uiDeleteTask = (req, res) => {
    const index = todos.findIndex(t => t.id == req.params.id);
    if (index !== -1) todos.splice(index, 1);
    res.redirect('/');
};

const apiGetTasks = (req, res) => {
    res.json(todos);
};

module.exports = { renderUI, uiAddTask, uiToggleTask, uiUpdateTask, uiDeleteTask, apiGetTasks };