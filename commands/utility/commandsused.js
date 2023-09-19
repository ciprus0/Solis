module.exports = {
    name: 'commandsused',
    aliases: ['totalcommandsused', 'commandssent', 'cmdused', 'cmdsused'],
    category: 'Server',
    utilisation: '{prefix}commandsused',
module: 'utility',
    async execute(client, message) {
        const db1 = require("quick.db")
        db1.add(`commands_used`, 1)
      const db = require('quick.db')
        const Discord = require('discord.js')


const embed = new Discord.MessageEmbed()
.setDescription(`\`${db.get(`commands_used`)}\` commands have been sent/executed since June 25th, 2021.`)
message.inlineReply(embed)
    }};