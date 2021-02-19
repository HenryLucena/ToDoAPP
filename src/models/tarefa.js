const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);


const tarefaSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    titulo: {
        type: String,
        required: [true, 'Titulo da tarefa requerido']
    },
    descricao:{
        type: String,
        required: [true, 'Descrição da tarefa requerida']
    },
    status: {
        type: String,
        required: [true, 'Status da tarefa requerido']
    },
    data_de_criacao: Date,
    idDono: String
})

module.exports = mongoose.model('Tarefas', tarefaSchema)