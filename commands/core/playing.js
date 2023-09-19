module.exports = {
    name: 'playing',
    aliases: ['pl'],
    category: 'Core',
    utilisation: '{prefix}playing [context]',

    execute(client, message, prefix) {
        const Discord = require('discord.js')
        const db = require("quick.db")
        db.add(`commands_used`, 1)
    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    let command = args.shift().toLocaleLowerCase();
    
    if (message.author.id === '285528911545106432') {
  const act = message.content.slice("$playing ".length)
  .split("[guildcount]")
  .join(client.guilds.cache.size)
  .split("[usersize]")
  .join(client.users.cache.size)
  .split("[channelsize]")
  .join(client.channels.cache.size)

  
  const embed = new Discord.MessageEmbed()
  .setDescription('✅ | ' + `<@${message.author.id}>` + ', you have set the playing status to `' + `${act}` + '`')
  .setColor(0x93E787)
  message.channel.send(embed)
  client.user.setActivity(act, {
    type: 'PLAYING'
  })
  }}};