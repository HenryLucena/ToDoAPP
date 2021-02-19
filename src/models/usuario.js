const mongoose = require('mongoose');

const usuarioSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nome: {
        type: String,
        required: [true, 'Nome do usuario requerido']
    },
    email: {
        type: String,
        required: [true, 'E-mail do usuario requerido'],
        unique: true
    },
    senha: {
        type: String,
        required: [true, 'Senha requerida'],
        minlength: [8, 'Senha deve ter no minimo 8 caracteres']
    }
});

module.exports = mongoose.model('Usuarios', usuarioSchema);