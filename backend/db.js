const mongoose = require("mongoose")

const connect = mongoose.connect("mongodb+srv://uma:uma@cluster0.bquns.mongodb.net/management?retryWrites=true&w=majority&appName=Cluster0")

module.exports = {connect}