// I think it configures the connection to the database
const mongoose = require('mongoose');

const dbConfig = "mongodb+srv://usuario:usuario@cluster0.tiaomwt.mongodb.net/?retryWrites=true&w=majority";

const connection = mangoose.connect(dbConfig,  {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

module.exports = connection;