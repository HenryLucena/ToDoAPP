const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose')
const port = process.env.port || 3000;

const app = express();

app.use(bodyParser.json())
app.use(cors())

mongoose.connect('mongodb+srv://dbUser:senha123@todo.hvlgj.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useMongoClient: true
})


app.listen(port, () => console.log(`Estou rodando na porta ${port}`))