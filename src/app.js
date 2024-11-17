const express = require('express');
const app = express();
const logical = require('./routes/logicalRoutes');

//middleware
app.use(express.json());

//User POST ROUTE
app.use('/api/logical', logical);

module.exports = app;
