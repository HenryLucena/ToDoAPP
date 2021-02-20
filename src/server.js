const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose')

const app = express();

mongoose.connect('mongodb+srv://dbUser:senha123@todo.hvlgj.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))
app.use(cors())

const tarefaController = require('./controllers/tarefa-controller');
const usuarioController = require('./controllers/usuario-controller')
const appController = require('./controllers/app-controller')

appController(app)
tarefaController(app)
usuarioController(app)

app.listen(process.env.port || '0.0.0.0', () => console.log(`Estou rodando na porta ${port}`))