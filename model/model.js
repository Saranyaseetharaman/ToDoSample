// Empty array to start completely fresh without default tasks
let todos = [];

module.exports = {
    getAll: () => todos,
    
    getById: (id) => todos.find(todo => todo.id === parseInt(id)),
    
    create: (taskName) => {
        const newTodo = {
            id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 1,
            task: taskName,
            completed: false
        };
        todos.push(newTodo);
        return newTodo;
    },
    
    update: (id, updatedTaskName) => {
        const todo = todos.find(todo => todo.id === parseInt(id));
        if (todo) {
            todo.task = updatedTaskName;
            return todo;
        }
        return null;
    },

    toggleStatus: (id) => {
        const todo = todos.find(todo => todo.id === parseInt(id));
        if (todo) {
            todo.completed = !todo.completed;
            return todo;
        }
        return null;
    },
    
    delete: (id) => {
        const index = todos.findIndex(todo => todo.id === parseInt(id));
        if (index !== -1) {
            return todos.splice(index, 1)[0];
        }
        return null;
    }
};