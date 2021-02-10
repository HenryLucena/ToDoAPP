const mongoose = require('mongoose');

const tarefaSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    titulo: String,
    descricao: String,
    status: String,
    dataCriacao: Number,
    idUsuario: String
})

module.exports = mongoose.model('Tarefas', tarefaSchema)