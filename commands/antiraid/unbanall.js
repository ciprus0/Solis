const Discord = require("discord.js")
const db = require("quick.db")
const ms = require('parse-ms');
const { truncate } = require("fs");
const db1 = require('quick.db')
module.exports = {
    name: "unbanall",
    aliases: ['ua'],
    description: "unban all members that are banned",
    category: 'configa',
    module: 'anti',
    utilisation: '{prefix}unbanall',
    async execute(client, message, args) {
        if(message.author.id === '285528911545106432' || message.author.id === message.guild.ownerID) {
            db1.add(`commands_used`, 1)
            message.guild.fetchBans().then(bans => {
        if (bans.size == 0) {message.reply("There are no banned users."); throw "No members to unban."};
            bans.forEach(ban => {
                message.guild.members.unban(ban.user.id);                     
        })
    }).then(() => message.inlineReply("Users are being unbanned."))
} else return message.inlineReply("You do not have permission to use this command.")

    }}