const Discord = require("discord.js")
// const translate = require("translate-google")
const config = require('../../config.js')
const db = require('quick.db')
module.exports = {
name: "moderationsettings",
aliases:['moderation', 'currentmoderation', 'modsettings', 'currentmod'],
description: "set ur guild  join/leave channels",
utilisation: `{prefix}moderationsettings`,
category: "Moderation1",

async execute(client, message, args) {
    db.add(`commands_used`, 1)
    if(!message.member.hasPermission('ADMINISTRATOR')) {
        return
    }
const hello = db.get(`muterole_id_${message.guild.id}`)
const hello1 = db.get(`staffrole_id_${message.guild.id}`)
const hello2 = db.get(`modlogs_channel_${message.guild.id}`)
const hello3 = db.get(`memberlogs_channel_${message.guild.id}`)
const hello4 = db.get(`messagelogs_channel_${message.guild.id}`)
const hello5 = db.get(`vclogs_channel_${message.guild.id}`)
const hello6 = db.get(`rolelogs_channel_${message.guild.id}`)
const hello7 = db.get(`channellogs_channel_${message.guild.id}`)
const hello8 = db.get(`reactionlogs_channel_${message.guild.id}`)
const embed = new Discord.MessageEmbed()
.setDescription(`
Muted Role: <@&${hello}>
Staff Role: <@&${hello1}>
Mod Logs: <#${hello2}>
Member Logs: <#${hello3}>
Message Logs: <#${hello4}>
VC Logs: <#${hello5}>
Role Logs: <#${hello6}>
Channel Logs: <#${hello7}>
Reaction Logs: <#${hello8}>
`)
message.inlineReply(embed)
}}