const { DiscordAPIError } = require("discord.js")
const Discord = require('discord.js')
module.exports = {
    name: 'unlock',
    aliases: ['None'],
    category: 'Moderation',
    utilisation: '{prefix}unlock',

    async execute(client, message, prefix) {
        const db1 = require("quick.db")
        db1.add(`commands_used`, 1)
        if(db1.get(`staffrole_id_${message.guild.id}`) == null || db1.get(`staffrole_id_${message.guild.id}`) == 'false') return message.inlineReply(`You have not set up your staff role/s for this server! Please use \`${prefix}setupmoderation\`!`)
      if(message.member.roles.cache.some(r => db1.get(`staffrole_id_${message.guild.id}`).includes(r.id)) || message.member.hasPermission("MANAGE_CHANNELS")){
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[1])
        if(!channel){
       
let msg = await message.channel.send("Loading...")
const embed = new Discord.MessageEmbed()
.setDescription('✅ | <#' + message.channel.id + '> has been unlocked by <@' + message.author.id + '>')
      .setColor(0x93E787)
      
try {
    message.channel.updateOverwrite(message.guild.roles.cache.find(e => e.name.toLowerCase().trim() == "@everyone"), {
        SEND_MESSAGES: true,
    })
    message.channel.send(embed).then(() => msg.delete());
}catch(e) {
    console.log(e)
}} else {
    let msg = await message.channel.send("Loading...")
const embed = new Discord.MessageEmbed()
.setDescription('✅ | <#' + channel.id + '> has been unlocked by <@' + message.author.id + '>')
      .setColor(0x93E787)
      
try {
    channel.updateOverwrite(message.guild.roles.cache.find(e => e.name.toLowerCase().trim() == "@everyone"), {
        SEND_MESSAGES: true,
    })
    message.channel.send(embed).then(() => msg.delete());
}catch(e) {
    console.log(e)
}
}


        }
    }}