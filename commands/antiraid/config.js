const Discord = require("discord.js")
const db1 = require("quick.db")
const ms = require('parse-ms');
const { truncate } = require("fs");
const messageCounter = require("../../message-counter");
module.exports = {
    name: "set",
    aliases: ['None'],
    description: "set guild anit raid config",
    category: 'Anti-Raid Configuration',
    utilisation: '{prefix}set <settings>',
    module: 'anti',
    async execute(client, message, args, prefix) {
      db1.add(`commands_used`, 1)
      function check(msg, arr) {
        return arr.some(op => op.toLowerCase() === msg.toLowerCase());
      }
        const cmd = args[0];
    const guildicon = message.guild.iconURL();
    if(message.author.id === message.guild.ownerID || message.author.id === '979105790109552680' || message.author.id === '941954746904879144') {
    if(!cmd) {
        const embed = new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL())
        .setDescription(`
        ** Settings**
   > \`channelCreateLimit\`
   > \`ChannelDeleteLimit\`
   > \`roleCreateLimit\`
   > \`roleDeleteLimit\`
   > \`banLimit\`
   > \`kickLimit\`
   > \`addbot\`
   > \`logs\`
  > \`limits\`
   > \`punishment\`    
   `)
 .setFooter(message.guild.name, guildicon)
  return message.channel.send(embed);
}
if(cmd.toLowerCase() === 'limits') {
  let disabled = ":x: Disabled"
  let rclguild;

      await db.promise().query('SELECT * FROM antiraid WHERE guild_id = ?',[message.guild.id]).then(result => {
      rclguild = result[0][0]
      console.log()
      })

  if(!rclguild) {
 message.inlineReply('This server was not in the database, please say the command again!')
  db.query(`INSERT INTO antiraid (guild_id) VALUES(?)`, [message.guild.id]);
return 
  }

  let logs = db1.get(`logs_${message.guild.id}`)
  let punish = db1.get(`punish_${message.guild.id}`)
  let addbota = db1.get(`addbot_${message.guild.id}`)
  if (rclguild.rolecreate === null) rclguild.rolecreate = disabled
  if (rclguild.roledelete === null) rclguild.roledelete = disabled
  if (rclguild.channelcreate === null) rclguild.channelcreate = disabled
  if (rclguild.channeldelete === null) rclguild.channeldelete = disabled
  if (rclguild.banlimit === null) rclguild.banlimit = disabled
  if (addbota === null) addbota = disabled
  if (rclguild.kicklimit === null) rclguild.kicklimit = disabled
  if (logs === null) logs = disabled
  if (logs !== null && logs !== disabled) {
    logs = client.channels.cache.get(logs)
    if (!logs) logs = disabled
  }
    let showembed = new Discord.MessageEmbed()
 
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .addField("Channel Create Limit", rclguild.channelcreate, true)
.addField("Channel Delete Limit", rclguild.channeldelete, true)
.addField("Role Create Limit", rclguild.rolecreate, true)
.addField("Role Delete Limit", rclguild.roledelete, true)
.addField("Ban Limits", rclguild.banlimit, true)
.addField("Kick Limits", rclguild.kicklimit, true)
.addField("Adding Bot", addbota, true)
.addField("Logs", logs.toString(), true)
.addField("Punishment", punish, true)
     .setFooter(message.guild.name, guildicon)
     return message.channel.send(showembed);
  }
 
 if(cmd.toLowerCase() === 'channelcreatelimit') {
  if (!args[1]) return message.channel.send(":x: | **Provide The limit**")
  if (isNaN(args[1])) return message.channel.send(":x: | **The limit has to be a number**")
  if (Number(args[1]) < 1) return message.channel.send(":x: | **The limit cannot be zero or negative number**")
  db.query('UPDATE antiraid set channelcreate = ? WHERE guild_id = ?', [Number(args[1]), message.guild.id])
  return message.channel.send("**The channel create limit has been set to " + Number(args[1]) + "**")};
     

if(cmd.toLowerCase() === 'addbot') {
  if (!args[1]) return message.inlineReply(`Please say \`enable\` or \`disable\` after \`addbot\` **Ex:** \`${prefix}set addbot disable\``)
  if (args[1] == 'enable'){
    db1.set(`addbot_${message.guild.id}`, 'enabled')
    return message.inlineReply('You have enabled the addbot feature: This bot will now punish anyone who adds an unwhitelisted bot to the server.')
  }
  if(args[1] == 'disable') {
    db1.set(`addbot_${message.guild.id}`, 'disabled')
    return message.inlineReply('You have disabled the addbot feature: This bot will not punish anyone who adds an unwhitelisted bot to the server.')
  }
}

   
   if(cmd.toLowerCase() === 'channeldeletelimit') {
    if (!args[1]) return message.channel.send(":x: | **Provide The limit**")
    if (isNaN(args[1])) return message.channel.send(":x: | **The limit has to be a number**")
    if (Number(args[1]) < 1) return message.channel.send(":x: | **The limit cannot be zero or negative number**")
    db.query('UPDATE antiraid set channeldelete = ? WHERE guild_id = ?', [Number(args[1]), message.guild.id])
    return message.channel.send("**The channel delete limit has been set to " + Number(args[1]) + "**")};




   if(cmd.toLowerCase() === 'logs') {
     let channel = message.mentions.channels.first()
if (!channel) return message.channel.send(":x: | **Mention The channel**")
if (channel.guild.id !== message.guild.id) return message.channel.send(":x: | **That channel is not from this server**")
db1.set(`logs_${message.guild.id}`, channel.id)
channel.send("**Anti Raid logs Channel**")
return message.channel.send("**The logs channel has been set to " + args[1] + "**")};






   if(cmd.toLowerCase() === 'rolecreatelimit') {
    if (!args[1]) return message.channel.send(":x: | **Provide The limit**")
    if (isNaN(args[1])) return message.channel.send(":x: | **The limit has to be a number**")
    if (Number(args[1]) < 1) return message.channel.send(":x: | **The limit cannot be zero or negative number**")
    db.query('UPDATE antiraid set rolecreate = ? WHERE guild_id = ?', [Number(args[1]), message.guild.id])
    return message.channel.send("**The role create limit has been set to " + Number(args[1]) + "**")};





 if(cmd.toLowerCase() === 'roledeletelimit') {
  if (!args[1]) return message.channel.send(":x: | **Provide The limit**")
  if (isNaN(args[1])) return message.channel.send(":x: | **The limit has to be a number**")
  if (Number(args[1]) < 1) return message.channel.send(":x: | **The limit cannot be zero or negative number**")
  db.query('UPDATE antiraid set roledelete = ? WHERE guild_id = ?', [Number(args[1]), message.guild.id])
  return message.channel.send("**The role delete limit has been set to " + Number(args[1]) + "**")};





 if(cmd.toLowerCase() === 'banlimit') {
  if (!args[1]) return message.channel.send(":x: | **Provide The limit**")
  if (isNaN(args[1])) return message.channel.send(":x: | **The limit has to be a number**")
  if (Number(args[1]) < 1) return message.channel.send(":x: | **The limit cannot be zero or negative number**")
  db.query('UPDATE antiraid set banlimit = ? WHERE guild_id = ?', [Number(args[1]), message.guild.id])
  return message.channel.send("**The ban limit has been set to " + Number(args[1]) + "**")};







 if(cmd.toLowerCase() === 'kicklimit') {
  if (!args[1]) return message.channel.send(":x: | **Provide The limit**")
  if (isNaN(args[1])) return message.channel.send(":x: | **The limit has to be a number**")
  if (Number(args[1]) < 1) return message.channel.send(":x: | **The limit cannot be zero or negative number**")
  db.query('UPDATE antiraid set kicklimit = ? WHERE guild_id = ?', [Number(args[1]), message.guild.id])
  return message.channel.send("**The kick limit has been set to " + Number(args[1]) + "**")};



if(cmd.toLowerCase() === 'punishment') {
  if (!args[1]) return message.channel.send(":x: | **Provide The punishment**")
if (check(args[1], ["ban", "kick", "demote"]) === false) return message.channel.send(":x: | **The punishment can only be kick, ban or demote**")
db1.set(`punish_${message.guild.id}`, args[1].toLowerCase())
return message.channel.send("**The punishment has been set to " + args[1] + "**")
};






 if(cmd.toLowerCase() === 'clearuser') {
  let user = message.mentions.users.first()
  let stuff = [`${message.guild.id}_${user.id}_rolecreate`, `${message.guild.id}_${user.id}_roledelete`, `${message.guild.id}_${user.id}_channelcreate`, `${message.guild.id}_${user.id}_channeldelete`, `${message.guild.id}_${user.id}_banlimit`, `${message.guild.id}_${user.id}_kicklimit`]
  stuff.forEach(bruh => db1.delete(bruh))
  return message.channel.send("**Done!**")
} } else return

    }};