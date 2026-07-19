const express = require('express');
const app = express();
const todoRoutes = require('./router/router');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serving styles dynamically via public asset folder standard bindings
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => res.redirect('/todos'));
app.use('/todos', todoRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Client App running beautifully at http://localhost:${PORT}`);
});