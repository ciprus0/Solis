module.exports = {
    name: 'slowmode',
    aliases: ['sm'],
    category: 'Moderation',
    utilisation: '{prefix}slowmode [amount (seconds)]',

    execute(client, message, args, prefix) {
        const Discord = require('discord.js')


    let channela = message.guild.channels.cache.get(message.channel.id)

    const db1 = require("quick.db")
    db1.add(`commands_used`, 1)
    if(db1.get(`staffrole_id_${message.guild.id}`) == null || db1.get(`staffrole_id_${message.guild.id}`) == 'false') return message.inlineReply(`You have not set up your staff role/s for this server! Please use \`${prefix}setupmoderation\`!`)
  if(message.member.roles.cache.some(r => db1.get(`staffrole_id_${message.guild.id}`).includes(r.id)) || message.member.hasPermission("MANAGE_CHANNELS")){
  const { channel } = message
  
    
      if (args.length < 1) {
        const embed = new Discord.MessageEmbed()
        .setDescription('❌ | Please Provide a Duration')
        .setColor(0xFA2A2A)
        message.channel.send(embed)
        return
      }
  
      let duration = args.shift().toLowerCase()
      if (duration === 'off') {
        duration = 0
      }
  
      if (isNaN(duration)) {
        const embed = new Discord.MessageEmbed()
        .setDescription('❌ | Please provide either a number of seconds or the word "off"')
        .setColor(0xFA2A2A)
        message.channel.send(embed)
        return
      }
      
      //['testing','hello','world']
      //.join(' ')
      //testing hello world
  
      channel.setRateLimitPerUser(duration, args.join(' '))
  
      const embed = new Discord.MessageEmbed()
      .setDescription('✅ | Slowmode in' + ` ${channela} ` + 'has been set to ' + duration)
      .setColor(0x93E787)
      message.channel.send(embed)
  
    }}};