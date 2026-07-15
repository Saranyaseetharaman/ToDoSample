const express = require('express');
const methodOverride = require('method-override');
const app = express();
const router = require('./router/router.js');

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static('public'));

// View Engine
app.set('view engine', 'ejs');

// Routes
app.use('/', router);

// Server Listen
app.listen(3000, () => {
    console.log('🚀 Server running at http://localhost:3000');
});