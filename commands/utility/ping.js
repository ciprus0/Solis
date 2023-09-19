//Ping Command
module.exports = {
    name: 'ping',
    aliases: [],
    category: 'Server',
    utilisation: '{prefix}ping',
module: 'utility',
    execute(client, message, args) {
      const db1 = require("quick.db")
        db1.add(`commands_used`, 1)
        const Discord = require('discord.js')
   
  if (message.member.hasPermission("MANAGE_MESSAGES")) {
    message.delete() 
    const prefix = '$'
    message.channel.send('Pong! ' + '`' + `${client.ws.ping.toFixed(2)}ms` + '`')
  }
  }};