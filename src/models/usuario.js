const mongoose = require('mongoose');

const usuarioSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    nome: String,
    email: String,
    senha: String
});

module.exports = mongoose.model('Usuario', usuarioSchema);