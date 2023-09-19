module.exports = {
    name: 'avatar',
    aliases: ['av'],
    category: 'Users',
    utilisation: '{prefix}avatar [ping user]',
module: 'utility',
    execute(client, message, prefix) {
      const db1 = require("quick.db")
        db1.add(`commands_used`, 1)
        const Discord = require('discord.js')

    

    let member = message.mentions.users.first() || message.author
    let avatar = member.displayAvatarURL({ format: 'png', dynamic: true, size: 4096})
  
 
    
    const personTagged = message.mentions.members.first()
    const embed = new Discord.MessageEmbed()
    .setAuthor(member.tag, member.displayAvatarURL())
    .setTitle('Avatar')
    .setImage(avatar)
  .setColor(0xADC5FF)
    message.channel.send(embed);
  
  }};