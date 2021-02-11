const mongoose = require('mongoose');

const tarefaSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    titulo: String,
    descricao: String,
    status: String,
    data_de_criacao: Date,
})

module.exports = mongoose.model('Tarefas', tarefaSchema)