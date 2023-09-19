const Discord = require("discord.js")
// const translate = require("translate-google")
const config = require('../../config.js')
const db = require('quick.db')


module.exports = {
name: "disablewelcome",
aliases:['disablewelcomechannel'],
description: "set ur guild  join/leave channels",
utilisation: `{prefix}disablewelcome`,
category: "Welcomem",

async execute(client, message) {
    db.add(`commands_used`, 1)
    if(!message.member.hasPermission('ADMINISTRATOR')) {
        return
    }
if(db.get(`welcome_channel_${message.guild.id}`)){
    message.inlineReply('Okay, I have disabled the welcome channel for this server!')
await db.delete(`welcome_channel_${message.guild.id}`)


} else if (db.get(`welcome_channel_${messsage.guild.id}`) == null || db.get(`welcome_channel_${message.guild.id}`) == 'false'){
    return message.inlineReply('You do not have a welcome channel set up, please use \`setwelcomechannel\` to set one up!')
}
}}