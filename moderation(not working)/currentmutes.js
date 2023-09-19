/*const Discord = require("discord.js");
const config = require('../botconfig.json');
const Sequelize = require('sequelize')
const fs = require('fs')
const ms = require('ms')
const SourceBin = require('sourcebin-wrapper') 
module.exports = {
    name: 'currentmutes',
    aliases: ['cm'],
    category: 'Moderation',
    utilisation: '{prefix}currentmutes',

    async execute(client, message, args, prefix) {
      if(message.author.id !== '285528911545106432') return;
      const db1 = require("quick.db")
        db1.add(`commands_used`, 1)
        if(message.guild.id !== '758514078783897630') return;
let allowedRoles = config.staffRoles.map(rID => `<@&${rID}>`);

  let helpEmbed = new Discord.MessageEmbed()
    .setTitle(`Command: ${prefix}currentmutes`)
    .setColor("RANDOM")
    .setDescription("Displays information on a user.")
    .addField("Aliases", `\`${prefix}cm\``, true)
    .addField("Allowed Roles", `${allowedRoles.join(` | `)}`, true)
    .addField("Usage", `\`${prefix}currentmutes\`\n\`${prefix}cm\``)
    .addField("Example", `\`${prefix}currentmutes\``)

  if(args[0] && args[0].toLowerCase() == "help") return message.reply(helpEmbed);

  client.pendingmutes = require("../pendingmutes.json");

  let muteCount = 0;

  let moderations = new Discord.MessageEmbed()
  .setColor("#ffb53f")
  .setTimestamp();  

  let moderations2 = new Discord.MessageEmbed()
  .setColor("#ffb53f")
  .setTimestamp();    

  for(let i in client.pendingmutes){

    let time = client.pendingmutes[i].time;
    let dood = message.guild.member(message.guild.members.cache.get(i));
    if(!dood) continue;      

    if(Date.now() < time && !moderations.fields[24]){

      muteCount++;
      moderations.addField(`${dood.user.tag} | ${dood.user.id}`, humanizeDuration(time - Date.now(), {round: true}));

    }else if(Date.now() < time && moderations.fields[25]){

      muteCount++;
      moderations2.addField(`${dood.user.tag} | ${dood.user.id}`, humanizeDuration(time - Date.now(), {round: true}));

    }

  };

  moderations.setTitle(`Current Mutes (${muteCount})`);

  if(!moderations2.fields[0]) message.channel.send(moderations);
  
  if(moderations2.fields[0]){
    message.channel.send(moderations);
    message.channel.send(moderations2);
  };

}};*/