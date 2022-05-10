
const express = require('express');
const Router = express();
const Controllers = require('../Controllers/questions');

Router.post('/questions', Controllers.Add)
Router.get('/questions', Controllers.GetAll)
Router.get('/questions/:id', Controllers.GetOne)
Router.put('/questions/:id', Controllers.UpdateOne)
Router.delete('/questions/:id', Controllers.DeleteOne)

module.exports = Router;

