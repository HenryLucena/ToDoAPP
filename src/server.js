const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose')
const port = process.env.port || 3000;

const app = express();

mongoose.connect('mongodb+srv://dbUser:senha123@todo.hvlgj.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useMongoCliente: true
  })

app.use(bodyParser.json())
app.use(cors())

const tarefaController = require('./controllers/tarefa-controller');

tarefaController(app)

app.listen(port, () => console.log(`Estou rodando na porta ${port}`))