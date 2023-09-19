const Discord = require("discord.js")
// const translate = require("translate-google")
const config = require('../../config.js')
const db = require('quick.db')


module.exports = {
name: "disableleave",
aliases:['disableinvite'],
description: "set ur guild  join/leave channels",
utilisation: `{prefix}disablejoin`,
category: "Invitej",

async execute(client, message) {
    db.add(`commands_used`, 1)
    if(!message.member.hasPermission('ADMINISTRATOR')) {
        return
    }
if(db.get(`leave_channel_${message.guild.id}`)){
    message.inlineReply('Okay, I have disabled the leave message for this server!')
await db.delete(`leave_channel_${message.guild.id}`)


} else if (db.get(`leave_channel_${message.guild.id}`) == null || db.get(`leave_channel_${message.guild.id}`) == 'false'){
    return message.inlineReply('You do not have a leave channel set up, please use \`setinvitechannel\` to set one up!')
}
}}