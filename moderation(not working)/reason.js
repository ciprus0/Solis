/*const Discord = require("discord.js");
const config = require('../botconfig.json');
const Sequelize = require('sequelize')

module.exports = {
    name: 'reason',
    aliases: ['None'],
    category: 'Moderation',
    utilisation: '{prefix}reason [case number] [new reason]',

    async execute(client, message, args, prefix) {
        if(message.author.id !== '285528911545106432') return;
        const db1 = require("quick.db")
        db1.add(`commands_used`, 1)

        if(message.guild.id !== '758514078783897630') return;
client.counts = require("../counts.json");

const sequelize = new Sequelize('database', 'user', 'password', {
    host: 'localhost',
    dialect: 'sqlite',
    logging: false,
    storage: 'modlogs.sqlite',
});

const MLogs = sequelize.define('mlogs', {
  case: {
      type: Sequelize.INTEGER,
      unique: true,
  },
  modtype: Sequelize.TEXT,
  user_id: Sequelize.STRING,
  user_tag: Sequelize.TEXT,
  reason: Sequelize.TEXT,
  staff_id: Sequelize.STRING,
  staff_tag: Sequelize.TEXT,
  message_id: Sequelize.STRING,
});

let allowedRoles = config.staffRoles.map(rID => `<@&${rID}>`);

let helpEmbed = new Discord.MessageEmbed()
.setTitle(`Command: ${prefix}reason`)
.setColor("RANDOM")
.setDescription("Edit a modlog reason.")
.addField("Aliases", `\`none\``, true)
.addField("Allowed Roles", `${allowedRoles.join(` | `)}`, true)
.addField("Usage", `\`${prefix}reason [case] [new reason]\``)
.addField("Example", `\`${prefix}reason 69 being rude.\``);

if(!args[0]) return message.reply(helpEmbed);
if(args[0].toLowerCase() == "help") return message.reply(helpEmbed);

let errorEmbed = new Discord.MessageEmbed()
.setColor("#6b0202")
.setDescription(`❌ Mention a valid case number!`);

if(isNaN(args[0])) return message.reply(errorEmbed);

let error2Embed = new Discord.MessageEmbed()
.setColor("#6b0202")
.setDescription(`❌ Case not found.`);

if(args[0] >= client.counts["casecount"]) return message.reply(error2Embed);

let error3Embed = new Discord.MessageEmbed()
.setColor("#6b0202")
.setDescription(`❌ Include a new reason!`);

let newreason = args.slice(1).join(" ");
if(!newreason) return message.reply(error3Embed);

let thecase = await MLogs{where: {case: args[0]}});

if(!thecase || !thecase.case) return message.reply(error2Embed);

await MLogs.update({reason: newreason}, {where:{case: args[0]}});

message.guild.channels.cache.find(channel => channel.id == config.Moderation_Logs_Channel).messages.fetch(`${thecase.message_id}`).then(themsg => {
    let theduration = themsg.embeds[0].fields[2].value;

    let successEmbed = new Discord.MessageEmbed()
    .setColor("#39fa53")
    .setDescription(`✅ Updated Case #${args[0]}`);

    if(thecase.modtype == "Warn"){
        let warnEmbed = new Discord.MessageEmbed()
        .setTitle("Case " + thecase.case + " | Warn")
        .setDescription(`\`${thecase.user_tag}\` has been warned.`)
        .setColor("#ffe552")
        .addField("Warned User", `<@${thecase.user_id}> (${thecase.user_id})`, true)
        .addField("Responsible Staff", `<@${thecase.staff_id}> (${thecase.staff_id})`, true)
        .addField("Reason", newreason, true)
        .setTimestamp(thecase.createdAt);

        message.channel.send(successEmbed);
        return themsg.edit(warnEmbed);
    }

    if(thecase.modtype == "Mute"){

        let muteEmbed = new Discord.MessageEmbed()
        .setTitle("Case " + thecase.case + " | Mute")
        .setDescription(`\`${thecase.user_tag}\` has been muted.`)
        .setColor("#ffb53f")
        .addField("Muted User", `<@${thecase.user_id}> (${thecase.user_id})`, true)
        .addField("Responsible Staff", `<@${thecase.staff_id}> (${thecase.staff_id})`, true)
        .addField("Duration", `${theduration}`, true)
        .addField("Reason", newreason, true)
        .setTimestamp(thecase.createdAt);

        message.channel.send(successEmbed);
        return themsg.edit(muteEmbed);
    };

    if(thecase.modtype == "Kick"){
        let kickEmbed = new Discord.MessageEmbed()
        .setTitle("Case " + thecase.case + " | Kick")
        .setColor("#fa5534")
        .setDescription(`\`${thecase.user_tag}\` has been kicked.`)
        .addField("Kicked User", `<@${thecase.user_id}> (${thecase.user_id})`, true)
        .addField("Responsible Staff", `<@${thecase.staff_id}> (${thecase.staff_id})`, true)
        .addField("Reason", newreason, true)
        .setTimestamp(thecase.createdAt);
        
        message.channel.send(successEmbed);
        return themsg.edit(kickEmbed);
    };

    if(thecase.modtype == "Ban"){
        message.guild.channels.cache.find(channel => channel.id == config.Moderation_Logs_Channel).messages.fetch(`${thecase.message_id}`).then(msg => {
            let theduration = msg.embeds[0].fields[2].value;

            let banEmbed = new Discord.MessageEmbed()
            .setTitle("Case " + thecase.case + " | Ban")
            .setColor("#b50712")
            .setDescription(`\`${thecase.user_tag}\` has been banned.`)
            .addField("Banned User", `<@${thecase.user_id}> (${thecase.user_id})`, true)
            .addField("Responsible Staff", `<@${thecase.staff_id}> (${thecase.staff_id})`, true)
            .addField("Duration", theduration, true)
            .addField("Reason", newreason, true)
            .setTimestamp(thecase.createdAt);
            
            message.channel.send(successEmbed);
            return themsg.edit(banEmbed);
        });
    };
});

    }};*/