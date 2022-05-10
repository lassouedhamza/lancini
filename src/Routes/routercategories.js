
const express = require('express');
const Router = express();
const Controllers = require('../Controllers/categories');

Router.post('/categories', Controllers.Add)
Router.get('/categories', Controllers.GetAll)
Router.get('/categories/:id', Controllers.GetOne)
Router.put('/categories/:id', Controllers.UpdateOne)
Router.delete('/categories/:id', Controllers.DeleteOne)

module.exports = Router;

