const Discord = require('discord.js')
const db = require('quick.db')
module.exports = {
    name: 'snipe',
    aliases: [],
    category: 'Randomstuff',
    utilisation: '{prefix}snipe',

    async execute(client, message) {
      const db1 = require("quick.db")
        db1.add(`commands_used`, 1)
      const Discord = require('discord.js')

      /*db.push(`snipe_`)

      
      if (cmd.toLowerCase() === '2') {


      }

      if (cmd.toLowerCase() === '3') {


      }

      if (cmd.toLowerCase() === '4') {


      }


      if (cmd.toLowerCase() === '5') {


      }


      if (cmd.toLowerCase() === '6') {


      }

      if (cmd.toLowerCase() === '7') {


      }

      if (cmd.toLowerCase() === '8') {


      }


      if (cmd.toLowerCase() === '9') {


      }

      if (cmd.toLowerCase() === '10') {


      }*/


if (message.author === client.user) return;

  let ch = message.mentions.channels.first() || message.channel;
  let channel = client.snipe.get(ch.id);
  if(channel === null || !channel) return message.inlineReply(`**There's nothing to snipe!**`)
  let user = client.users.cache.get(channel.sender)
if (channel.image) {
  const embed = new Discord.MessageEmbed()
  .setAuthor(user.tag, user.displayAvatarURL())
  .setDescription(`${channel.content}`)
  .setImage(`${channel.image}`)
  .setTimestamp()
  .setColor(0xADC5FF)
  message.inlineReply(embed)
} else {
  const embed1 = new Discord.MessageEmbed()
  .setAuthor(user.tag, user.displayAvatarURL())
  .setDescription(`${channel.content}`)
  .setTimestamp()
  .setColor(0xADC5FF)
  message.inlineReply(embed1)
}

  














}};