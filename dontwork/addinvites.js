/*const Discord = require("discord.js")
// const translate = require("translate-google")
const config = require('../config.js')
const { evaluate } = require('mathjs')
const db = require('quick.db')
module.exports = {
name: "addinvites",
aliases:['addinv', 'addinvite', 'addinvs', 'invitesadd'],
description: "shows your/user invites",
utilisation: `{prefix}addinvites [@user] [amount of invites]`,
category: "Manage",
module: 'invite',
async execute(client, message, args, prefix) {
    const db1 = require("quick.db")
        db1.add(`commands_used`, 1)
  let user = message.mentions.users.first() || client.users.cache.get(args[0]) 
  let embeduser = new Discord.MessageEmbed()
  .setAuthor(message.guild.name, message.guild.iconURL())
  .setDescription(`You must mention auser to add to him invites`)
  .setColor(`2C2F33`)
  .setFooter(message.guild.name , client.user.displayAvatarURL())
  .setTimestamp()
 
  if(!user) {
  const args1 = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args1.shift().toLowerCase();
  const cmd = client.commands.get(command) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command));
return message.inlineReply({
      embed: {
          color: 0xADC5FF,
          title: `Command: ${command}`,
          footer: { text: 'Created by Tim' },
          fields: [
              { name: 'Name', value: cmd.name, inline: true },
              { name: 'Category', value: cmd.category, inline: true },
              { name: 'Aliase(s)', value: cmd.aliases.length < 1 ? 'None' : cmd.aliases.join(', '), inline: true },
              { name: 'Usage', value: cmd.utilisation.replace('{prefix}', prefix), inline: true },
          ],
          timestamp: new Date(),
          description: 'Find information on the command provided.\nMandatory arguments `[]`, optional arguments `<>`.',
      }
  })}
  let embedinvites = new Discord.MessageEmbed()
  .setAuthor(message.guild.name, message.guild.iconURL())
  .setDescription(`You must enter an vaild amount of invites (only numbers)`)
  .setColor(`2C2F33`)
  .setFooter(message.guild.name , client.user.displayAvatarURL())
  .setTimestamp()
 
 if(!args[1]) {
 const args1 = message.content.slice(prefix.length).trim().split(/ +/g);
 const command = args1.shift().toLowerCase();
 const cmd = client.commands.get(command) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command));
return message.inlineReply({
     embed: {
         color: 0xADC5FF,
         title: `Command: ${command}`,
         footer: { text: 'Created by Tim' },
         fields: [
             { name: 'Name', value: cmd.name, inline: true },
             { name: 'Category', value: cmd.category, inline: true },
             { name: 'Aliase(s)', value: cmd.aliases.length < 1 ? 'None' : cmd.aliases.join(', '), inline: true },
             { name: 'Usage', value: cmd.utilisation.replace('{prefix}', prefix), inline: true },
         ],
         timestamp: new Date(),
         description: 'Find information on the command provided.\nMandatory arguments `[]`, optional arguments `<>`.',
     }
 })}
 if(isNaN(args[1])) {
 const args1 = message.content.slice(prefix.length).trim().split(/ +/g);
 const command = args1.shift().toLowerCase();
 const cmd = client.commands.get(command) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command));
return message.inlineReply({
     embed: {
         color: 0xADC5FF,
         title: `Command: ${command}`,
         footer: { text: 'Created by Tim' },
         fields: [
             { name: 'Name', value: cmd.name, inline: true },
             { name: 'Category', value: cmd.category, inline: true },
             { name: 'Aliase(s)', value: cmd.aliases.length < 1 ? 'None' : cmd.aliases.join(', '), inline: true },
             { name: 'Usage', value: cmd.utilisation.replace('{prefix}', prefix), inline: true },
         ],
         timestamp: new Date(),
         description: 'Find information on the command provided.\nMandatory arguments `[]`, optional arguments `<>`.',
     }
 })}
 let userinvites = db.fetch(`invites_${message.guild.id}_${user.id}`)
 if(!userinvites) {
    let data = {
        invites: 0,
        regular: 0,
        leaves: 0,
        joins: 0,
        by: null,
        bouns: 0   
      }
 
      db.set(`invites_${message.guild.id}_${user.id}`, data)
      db.add(`invites_${message.guild.id}_${user.id}.invites`, args[1])
      db.add(`invites_${message.guild.id}_${user.id}.bouns`, args[1])
 
let a = {
    added: `[+] Added ${args[1]} invites by ${message.author.id}`
}
 db.push(`logs_${message.guild.id}_${user.id}`, a)
 let done = new Discord.MessageEmbed()
 .setAuthor(message.guild.name, message.guild.iconURL())
 .setDescription(`Added ${args[1]} invites to ${user.username}`)
 .setColor(`2C2F33`)
 .setFooter(message.guild.name , client.user.displayAvatarURL())
 .setTimestamp()
return message.channel.send(done);
 }
 
 db.add(`invites_${message.guild.id}_${user.id}.invites`, args[1])
 db.add(`invites_${message.guild.id}_${user.id}.bouns`, args[1])
 
let a = {
    added: `[+] Added ${args[1]} invites by ${message.author.id}`
}
 db.push(`logs_${message.guild.id}_${user.id}`, a)
 let done = new Discord.MessageEmbed()
 .setAuthor(message.guild.name, message.guild.iconURL())
 .setDescription(`Added ${args[1]} invites to ${user.username}`)
 .setColor(`2C2F33`)
 .setFooter(message.guild.name , client.user.displayAvatarURL())
 .setTimestamp()
message.channel.send(done)
 }
}
*/