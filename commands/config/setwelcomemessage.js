
const db = require('quick.db')
const config1 = require('../../config.js')
const Discord = require('discord.js')
module.exports = {
    name: 'setwelcomemessage',
    aliases: ['setwelcmessage', 'swm'],
    description: 'set the welcome message for your server',
    utilisation: '{prefix}setwelcomemessage',
    category: 'Welcomem',

    async execute(client, message, member) {
        db.add(`commands_used`, 1)
        if(!message.member.hasPermission('ADMINISTRATOR')) {
            return
        }
        let embed = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setDescription(`Select Type
    1️⃣ Welcome
    2️⃣ View current Welcome Message
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
      { time: 60000 });
      select.on("collect", async (reaction, user) => {
        if(user.id === client.user.id) return;
     if(reaction.emoji.name === "1️⃣"){
await react.reactions.removeAll()
await select.stop()
let embedo = new Discord.MessageEmbed()
.setAuthor(message.author.username, message.author.displayAvatarURL())
.setTitle('Please send the new Welcome Message')
.setDescription(`
Variables:
[guild] = guild name
[user] = member name
[membercount] = current membercount 
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
let changed = new Discord.MessageEmbed()
.setAuthor(message.author.username, message.author.displayAvatarURL())
.setTitle(' ')
.setDescription(`
Successfully updated the Welcome Message`)
.setColor(`2C2F33`)
.setFooter( message.guild.name , client.user.displayAvatarURL())
.setTimestamp()
 
await react.edit(changed)
await db.set(`welcome_message_${message.guild.id}`, msg.content)
await join.stop()
})
    }   

  
if(reaction.emoji.name === "2️⃣") {
await react.reactions.removeAll()
await select.stop()
let embed = new Discord.MessageEmbed()
.setAuthor(message.author.username, message.author.displayAvatarURL())
.setDescription(`
Welcome Message => 
${db.get(`welcome_message_${message.guild.id}`) || config1.welcom}
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
    })
    }
}