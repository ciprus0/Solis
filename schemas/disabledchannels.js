const mongoose = require('mongoose')

let Schema = new mongoose.Schema({
    Channels: String,
    Cmds: Array
})

module.exports = mongoose.model('disabledchannels', Schema)