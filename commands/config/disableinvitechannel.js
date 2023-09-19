const Discord = require("discord.js")
// const translate = require("translate-google")
const config = require('../../config.js')
const db = require('quick.db')


module.exports = {
name: "disableinvitechannel",
aliases:['disableinvite'],
description: "set ur guild  join/leave channels",
utilisation: `{prefix}disablejoin`,
category: "Invitej",

async execute(client, message) {
    db.add(`commands_used`, 1)
    if(!message.member.hasPermission('ADMINISTRATOR')) {
        return
    }
if(db.get(`join_channel_${message.guild.id}`)){
    message.inlineReply('Okay, I have disabled the join channel for this server!')
await db.delete(`join_channel_${message.guild.id}`)


} else if (db.get(`join_channel_${message.guild.id}`) == null || db.get(`join_channel_${message.guild.id}`) == 'false'){
    return message.inlineReply('You do not have a join channel set up, please use \`setwelcomechannel\` to set one up!')
}
}}