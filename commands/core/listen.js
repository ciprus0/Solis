module.exports = {
    name: 'listen',
    aliases: ['lis'],
    category: 'Core',
    utilisation: '{prefix}listen [context]',

    execute(client, message, prefix) {
      const db = require("quick.db")
      db.add(`commands_used`, 1)
        const Discord = require('discord.js')
        client.guilds.cache.size 
        client.channels.cache.size 
        client.users.cache.size
    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    let command = args.shift().toLocaleLowerCase();
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    if (command === 'listen' && message.author.id === '285528911545106432') {
  const act = message.content.slice("$listen ".length)
  .split("[guildcount]")
  .join(client.guilds.cache.size)
  .split("[usersize]")
  .join(client.users.cache.size)
  .split("[channelsize]")
  .join(client.channels.cache.size)


  
  const embed = new Discord.MessageEmbed()
.setDescription('✅ | ' + `<@${message.author.id}>` + ', you have set the listening status to `' + `${act}` + '`')
.setColor(0x93E787)
message.channel.send(embed)
  client.user.setActivity(act, {
    type: 'LISTENING'
  })
  
    }}};