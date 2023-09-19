module.exports = {
    name: 'membercount',
    aliases: ['mc'],
    category: 'Server',
    utilisation: '{prefix}membercount',
module: 'utility',
    execute(client, message) {
        const db1 = require("quick.db")
        db1.add(`commands_used`, 1)
        const Discord = require('discord.js')


        const embed = new Discord.MessageEmbed()
       
        .setAuthor('• ' + message.guild.name, message.guild.iconURL())
        .addField(`Member Count`, message.guild.memberCount)
        .setColor(0xADC5FF)
        
        message.channel.send(embed);
    }
   };