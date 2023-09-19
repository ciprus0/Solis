const Discord = require("discord.js")
// const translate = require("translate-google")
const config1 = require('../../config.js')
const db = require('quick.db')
module.exports = {
name: "setmessagechannel",
aliases: ['setmr', 'setmessageroom'],
description: "set ur guild  join/leave channels",
utilisation: `{prefix}setmessagechannel`,
category: "Messages",

async execute(client, message, args, member) {
  db.add(`commands_used`, 1)
  if(!message.member.hasPermission('ADMINISTRATOR')) {
    return
}
    let embed = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setDescription(`Select Type
    1️⃣ Message Channel
    2️⃣ View Current Messages Channel
    ❌ Cancel
    `)
    .setColor(`2C2F33`)
    .setFooter( message.guild.name , client.user.displayAvatarURL())
    .setTimestamp()
    message.channel.send(embed).then(async react => {
        react.react('1️⃣')
        react.react('2️⃣')
        react.react('❌')
        const select = react.createReactionCollector((reaction, user) =>
        reaction.emoji.name === "1️⃣" || "2️⃣" || "❌" &&
        user.id === message.author.id,
      {          
         time: 60000,
         errors: ['time']
});
      select.on("collect", async (reaction, user) => {
        if(user.id === client.user.id) return;
     if(reaction.emoji.name === "1️⃣"){
await react.reactions.removeAll()
await select.stop()
let embedo = new Discord.MessageEmbed()
.setAuthor(message.author.username, message.author.displayAvatarURL())
.setTitle('Please Mention the channel')
.setDescription(`
to cancel type "cancel"
`)
.setColor(`2C2F33`)
.setFooter( message.guild.name , client.user.displayAvatarURL())
.setTimestamp()
react.edit(embedo)
let joina = m => m.author.id === message.author.id;
let join = new Discord.MessageCollector(message.channel, joina, { max: 1 });
 
join.on('collect', async msg => {
  if(msg.content.toLowerCase() === "cancel") {
    msg.channel.send(`Cancelled`)
    await react.delete()
    await join.stop()
 return
}
  let channel = msg.mentions.channels.first() || message.guild.channels.cache.get(msg.content);
  if(!channel) { msg.channel.send(`Send a real channel please`) 
await join.stop()
return;
}
 let changed = new Discord.MessageEmbed()
.setAuthor(message.author.username, message.author.displayAvatarURL())
.setTitle(' ')
.setDescription(`
Sucssesfully Updated the Messages Channel`)
.setColor(`2C2F33`)
.setFooter( message.guild.name , client.user.displayAvatarURL())
.setTimestamp()
 
await react.edit(changed)
await db.set(`messages_channel_${message.guild.id}`, channel.id)
await join.stop()
})
    }   
if(reaction.emoji.name === "2️⃣") {
  await react.reactions.removeAll()
await select.stop()
let embed = new Discord.MessageEmbed()
.setAuthor(message.author.username, message.author.displayAvatarURL())
.setDescription(`
Join channel => 
${message.guild.channels.cache.get(db.get(`messages_channel_${message.guild.id}`)) || "None"}
`)
.setColor(`2C2F33`) 
.setFooter( message.guild.name , client.user.displayAvatarURL())
.setTimestamp()
return react.edit(embed)
}
 if(reaction.emoji.name === "❌") {
    await react.reactions.removeAll()
    await select.stop()
    let embedo = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL())
     .setDescription(`
     Cancelled   
     `)
    .setColor(`2C2F33`)
    .setFooter( message.guild.name , client.user.displayAvatarURL())
    .setTimestamp()
  return  react.edit(embedo)
    }
 
})
    })        .catch(select => {
      return message.channel.send(`Timeout.`)
    })
}
}
