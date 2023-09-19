module.exports = {
    name: 'serverinfo',
    aliases: ['si'],
    category: 'Server',
    utilisation: '{prefix}serverinfo',
module: 'utility',
    async execute(client, message) {
        const db1 = require("quick.db")
        db1.add(`commands_used`, 1)
      const db = require('quick.db')
        const Discord = require('discord.js')
        let prefix1;
        await db40.promise().query('SELECT * FROM prefix WHERE guild_id = ?',[message.guild.id]).then(result => {
        prefix1 = result[0][0]
        
        })
        
        
        
            let prefix;
            let fetched = prefix1.prefix
        
            if (fetched === null) {
                prefix = PREFIX
            } else {
                prefix = fetched
            }
 

  

  const voiceChannelCount = message.guild.channels.cache.filter(c => c.type === 'voice').size;
  const textChannelCount = message.guild.channels.cache.filter(c => c.type === 'text').size;
  var serverIcon = message.guild.iconURL()
const moment = require('moment')
  
      const embed = new Discord.MessageEmbed()
      .setAuthor(`${message.guild.name}`, `${serverIcon}`)
      .addFields(
          { name: 'Owner', value: `<@${message.guild.ownerID}>`, inline: true },
          { name: 'Region', value: `${message.guild.region}`, inline: true },
          { name: 'Shard', value: `${message.guild.shardID}`, inline: true },
          { name: 'Voice Channels', value: `${voiceChannelCount}`, inline: true },
          { name: 'Text Channels', value: `${textChannelCount}`, inline: true },
          { name: 'Roles', value: `${message.guild.roles.cache.size}`, inline: true },
          { name: 'Members', value: `${message.guild.memberCount}`, inline: true },
          { name: 'Bot Prefix', value: prefix, inline: true }
      )
      .setColor(0xADC5FF)
      .setFooter(`ID: ${message.guild.id} | Server Created`)
      .setTimestamp(`${message.guild.createdAt.toDateString()}`)
      .setThumbnail(`${serverIcon}`)
      message.channel.send(embed);
  
}};