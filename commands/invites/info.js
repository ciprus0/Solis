const Discord = require("discord.js")
// const translate = require("translate-google")
const config1 = require('../../config.js')
const hastebin = require("hastebin-gen");
const moment = require('moment')
const db = require('quick.db')
module.exports = {
name: "info",
aliases:['inf', 'infos', 'infouser'],
description: "shows user info",
utilisation: `{prefix}info [@user]`,
category: "Info",
module: 'invite',
async execute(client, message, args) {
  const db1 = require("quick.db")
        db1.add(`commands_used`, 1)
  let user = message.mentions.users.first() || client.users.cache.get(args[0]) 
  let embeduser = new Discord.MessageEmbed()
  .setAuthor(message.guild.name, message.guild.iconURL())
  .setDescription(`You must mention auser to check their info`)
  .setColor(`2C2F33`)
  .setFooter(message.guild.name , client.user.displayAvatarURL())
  .setTimestamp()
 
  if(!user) {const prefix = '$'
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
              { name: 'Usage', value: cmd.utilisation.replace('{prefix}', client.config1.discord.prefix), inline: true },
          ],
          timestamp: new Date(),
          description: 'Find information on the command provided.\nMandatory arguments `[]`, optional arguments `<>`.',
      }
  })}
  let invites = db.get(`invites_${message.guild.id}_${user.id}`)
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
      .setTitle(`${user.username} `)
      .addField('Join Date', moment(message.guild.member(user.id).joinedAt).format('DD/MM/YYYY hh:mm A') ,true)
      .addField('Join Times', '0' , true)
      .addField('Invited By', 'Null' , true)
      .addField('Invites', `0 total (0 regular 0 leaves 0 bonus)`, true)
      .addField('Added/Removed Invites', `${data.join("\n") || '[0/0]'}`, true)
      .setFooter(message.guild.name  , message.guild.iconURL())
      .setTimestamp();
      return message.channel.send(embed)
 
  }
  let data = []
  let logs = db.get(`logs_${message.guild.id}_${user.id}`)
  if(logs && logs.length) {
  logs.forEach(x => {
      data.push(x.added)
  })}
  let omg = data.length;
  console.log(omg)
  if(omg  > 10) {
    hastebin(data.join("\n"), { extension: "txt" }).then(haste => {
      data = haste;
      console.log('test')
     });
  }
     let embed = new Discord.MessageEmbed()
        .setTitle(`${user.username} `)
        .addField('Join Date', moment(message.guild.member(user.id).joinedAt).format('DD/MM/YYYY hh:mm A') ,true)
        .addField('Join Times', invites.joins || '0' , true)
        .addField('Invited By', invites.by || 'unknown#0001' , true)
        .addField('Invites', `${invites.invites || '0'} total (${invites.regular || '0'} regular ${invites.leaves || '0'} leaves ${invites.bonus || '0'} bonus)`, true)
        .addField('Added/Removed Invites', `${data.join("\n") || '[0/0]'}`, true)
        .setFooter(message.guild.name  , message.guild.iconURL())
        .setTimestamp();
        return message.channel.send(embed)
    }
}
