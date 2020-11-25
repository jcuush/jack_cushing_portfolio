// Dependencies
const express = require('express');
const routes = require('./routes');

// Express instance
const app = express();

// Variable Port
const PORT = process.env.PORT || 9001;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


if (process.env.NODE_ENV === 'production') {

    app.use(express.static('client/build'))
};

// API and View Routes
app.use(routes);

// Start the server
app.listen(PORT, () => {
    if (process.env.NODE_ENV !== 'production') {
        console.log(`Server listening at http://localhost:${PORT}`)
    };
});