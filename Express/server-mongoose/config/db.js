const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://pavanisri:123456PS@in-aws.7gv3c.mongodb.net/MaxStore?retryWrites=true&w=majority&appName=In-AWS")

const connection = mongoose.connection;

connection.on('connected', () => (console.log("DB Connected")))
connection.on('error', () => (console.log("DB Error")))
module.exports = mongoose