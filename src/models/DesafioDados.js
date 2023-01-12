const mongoose = require('mongoose');

const DesafioData = new mongoose.Schema({
    title: String,
    notes: String,
    priority: Boolean,
});

module.exports = mongoose.model('Desafio', DesafioData);