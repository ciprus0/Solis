module.exports = {
    name: 'botinfo',
    aliases: ['bi'],
    category: 'Server',
    utilisation: '{prefix}botinfo',
module: 'utility',
    async execute(client, message) {
  
      const db1 = require("quick.db")
        db1.add(`commands_used`, 1)
      const db = require('quick.db')
        const Discord = require('discord.js')
        
        const fs = require('fs')
    const personTagged = message.mentions.members.first()
    const fieldArgs = message.content.slice("$strike".length);

    
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

  const totalMembers = message.guild.memberCount
  const promises = [
    client.shard.fetchClientValues('guilds.cache.size'),
    client.shard.broadcastEval('this.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)'),
  ];

  return Promise.all(promises)
    .then(results => {
      const totalGuilds = results[0].reduce((acc, guildCount) => acc + guildCount, 0);
      const totalMembers = results[1].reduce((acc, memberCount) => acc + memberCount, 0);
     
      const embed = new Discord.MessageEmbed()
    .setAuthor(
      `BotInfo | ${client.user.username}`,
      client.user.displayAvatarURL()
    )
    .setThumbnail(client.user.displayAvatarURL())
    .setColor(0xADC5FF)
    .setFooter('Bot Created By: |||||')
    .setDescription(`**ID:** ${client.user.id}`)
    .addFields(
      {
        name: 'Bot Tag',
        value: client.user.tag, inline: true
      },
      {
        name: 'Version',
        value: '2.0.3', inline: true
      },
      {
        name: "Server Prefix",
        value: prefix, inline: true
      },
      {
        name: 'Time Since Last Restart',
        value: `${process.uptime().toFixed(2)}s`, inline: true
      },
      {
        name: 'Server Count',
        value: totalGuilds, inline: true
      },
      {
        name: 'Total Members',
        value: totalMembers, inline: true
      },
     
    )
  
  return message.channel.send(embed)
    })
    .catch(console.error);

  
  
  
}};
  