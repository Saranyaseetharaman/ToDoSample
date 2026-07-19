const TodoModel = require('../model/model');

const isPostman = (req) => {
    return req.headers['user-agent'] && req.headers['user-agent'].includes('PostmanRuntime');
};

exports.getTodos = (req, res) => {
    const todos = TodoModel.getAll();
    if (isPostman(req)) {
        return res.json({ success: true, data: todos });
    }
    res.render('index', { todos: todos });
};

exports.createTodo = (req, res) => {
    const { task } = req.body;
    if (!task) return res.status(400).send("Task name is required");
    
    const newTodo = TodoModel.create(task);
    if (isPostman(req)) {
        return res.json({ success: true, message: "Added successfully!", data: newTodo });
    }
    res.redirect('/todos');
};

exports.toggleTodo = (req, res) => {
    const updated = TodoModel.toggleStatus(req.params.id);
    if (!updated) return res.status(404).send("Task not found");
    
    if (isPostman(req)) {
        return res.json({ success: true, message: "Status toggled!", data: updated });
    }
    res.redirect('/todos');
};

exports.updateTodo = (req, res) => {
    const { task } = req.body;
    const updated = TodoModel.update(req.params.id, task);
    if (!updated) return res.status(404).send("Task not found");

    if (isPostman(req)) {
        return res.json({ success: true, message: "Updated!", data: updated });
    }
    res.redirect('/todos');
};

exports.deleteTodo = (req, res) => {
    const deleted = TodoModel.delete(req.params.id);
    if (!deleted) return res.status(404).send("Task not found");

    if (isPostman(req)) {
        return res.json({ success: true, message: "Deleted successfully!" });
    }
    res.redirect('/todos');
};