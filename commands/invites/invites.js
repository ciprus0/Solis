const Discord = require("discord.js")
// const translate = require("translate-google")
const config = require('../../config.js')
const db = require('quick.db')
module.exports = {
name: "invites",
aliases:['myinvites', 'myinvite'],
description: "shows your/user invites",
utilisation: `{prefix}invites [none/@user]`,
category: "Info",
module: 'invite',
async execute(client, message, args) {
  const db1 = require("quick.db")
        db1.add(`commands_used`, 1)
  let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author
  let invites = db.get(`invites_${message.guild.id}_${user.id}`)
    if(user.id === message.author.id) {
      if(!invites) {
        let data = {
          invites: 0,
          regular: 0,
          leaves: 0,
          joins: 0,
          by: null,
          bonus: 0       
        }
        db.set(`invites_${message.guild.id}_${user.id}`, data)
        let embed = new Discord.MessageEmbed()
        .setAuthor(user.username , user.displayAvatarURL())
        .setTitle(`Your Invites`)
        .setDescription(`0 Invites (0 Regular 0 Leaves 0 Bonus)`)
        .setFooter(message.guild.name  , message.guild.iconURL())
        .setTimestamp();
        return message.channel.send(embed)
      
      }
  let embed = new Discord.MessageEmbed()
  .setAuthor(user.username , user.displayAvatarURL())
  .setTitle(`Your Invites`)
  .setDescription(`${invites.invites || '0'} Invites (${invites.regular || '0'} Regular ${invites.leaves || '0'} Leaves ${invites.bonus || '0'} Bonus)`)
  .setFooter(message.guild.name  , message.guild.iconURL())
  .setTimestamp();
  return message.channel.send(embed)
    }
    if(!invites) {
      let data = {
        invites: 0,
        regular: 0,
        leaves: 0,
        joins: 0,
        by: null,
        bonus: 0   
      }
      db.set(`invites_${message.guild.id}_${user.id}`, data)
      let embed = new Discord.MessageEmbed()
      .setAuthor(user.username , user.displayAvatarURL())
      .setTitle(`Your Invites`)
      .setDescription(`0 Invites (0 Regular 0 Leaves 0 Bonus)`)
      .setFooter(message.guild.name  , message.guild.iconURL())
      .setTimestamp();
      return message.channel.send(embed)
    }
    let embed = new Discord.MessageEmbed()
    .setAuthor(user.username , user.displayAvatarURL())
    .setTitle(`${user.username} Invite's`)
    .setDescription(`${invites.invites || '0'} Invites (${invites.regular || '0'} Regular ${invites.leaves || '0'} Leaves ${invites.bonus || '0'} Bonus)`)
    .setFooter(message.guild.name  , message.guild.iconURL())
    .setTimestamp();
    return message.channel.send(embed)
}
}
