module.exports = {
    name: 'watch',
    aliases: ['wa'],
    category: 'Core',
    utilisation: '{prefix}watch [context]',

    execute(client, message, prefix) {
        const Discord = require('discord.js')
        const db = require("quick.db")
        db.add(`commands_used`, 1)
    

    if (message.author.id === '285528911545106432') {
      const promises = [
        client.shard.fetchClientValues('guilds.cache.size'),
        client.shard.broadcastEval('this.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)'),
      ];
    
      return Promise.all(promises)
        .then(results => {
          const totalGuilds = results[0].reduce((acc, guildCount) => acc + guildCount, 0);
          const totalMembers = results[1].reduce((acc, memberCount) => acc + memberCount, 0);
  const act = message.content.slice("$watch ".length)
  .split("[guildcount]")
  .join(totalGuilds)
  .split("[usersize]")
  .join(totalMembers)
  .split("[channelsize]")
  .join(client.channels.cache.size)



  const embed = new Discord.MessageEmbed()
  .setDescription('✅ | ' + `<@${message.author.id}>` + ', you have set the watching status to `' + `${act}` + '`')
  .setColor(0x93E787)
  message.channel.send(embed)
  client.user.setActivity(act, {
    type: 'WATCHING'
  })
})
    }}};