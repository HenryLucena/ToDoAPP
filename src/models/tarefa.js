const mongoose = require('mongoose');

const tarefaSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    titulo: String,
    descricao: String,
})

module.exports = mongoose.model('Tarefas', tarefaSchema)