/*const Discord = require("discord.js");
const config = require('../botconfig.json');
const Sequelize = require('sequelize')
const fs = require('fs')
const ms = require('ms')
const SourceBin = require('sourcebin-wrapper'); 
const db1 = require('quick.db')
module.exports = {
    name: 'case',
    aliases: ['None'],
    category: 'Moderation',
    utilisation: '{prefix}case [case number]',

    async execute(client, message, args, prefix) {
        if(message.author.id !== '285528911545106432') return;
        const db1 = require("quick.db")
        db1.add(`commands_used`, 1)
        let errorEmbed = new Discord.MessageEmbed()
    .setColor("#6b0202")
    .setDescription(`❌ Mention a valid case number!`);


    if(isNaN(args[0])) return message.inlineReply(errorEmbed);

        let error2Embed = new Discord.MessageEmbed()
    .setColor("#6b0202")
    .setDescription(`❌ Case not found.`);

        let casenumber

        try {
            await db.promise().query('SELECT * FROM moderation WHERE casenumber = ? AND guild_id = ?', [args[0], message.guild.id]).then(result => {
                casenumber = result[0][0]
                console.log()
            })
        } catch (error) {
            console.error(error)
            message.inlineReply(error2Embed)
            return
        }

    

    let allowedRoles = config.staffRoles.map(rID => `<@&${rID}>`);

    let helpEmbed = new Discord.MessageEmbed()
    .setTitle(`Command: ${prefix}case`)
    .setColor("RANDOM")
    .setDescription("Displays a modlog case.")
    .addField("Aliases", `\`${prefix}case\``, true)
    .addField("Allowed Roles", `${allowedRoles.join(` | `)}`, true)
    .addField("Usage", `\`${prefix}case\``)
    .addField("Example", `\`${prefix}case 50\``)




    if(!args[0]) return message.reply(helpEmbed);



    if(args[0].toLowerCase() == "help") return message.reply(helpEmbed);

   








    
  

    if(casenumber.modtype == "Warn"){

        let warnEmbed = new Discord.MessageEmbed()
        .setTitle("Case " + casenumber.casenumber + " | Warn")
        .setDescription(`\`${casenumber.username}\` has been warned.`)
        .setColor("#ffe552")
        .addField("Warned User", `<@${casenumber.user_id}> (${casenumber.user_id})`, true)
        .addField("Responsible Staff", `<@${casenumber.staff_id}> (${casenumber.staff_id})`, true)
        .addField("Reason", casenumber.reason, true)
        .setTimestamp(casenumber.createdAt);
        
        return message.channel.send(warnEmbed);
    }

    if(casenumber.modtype == "Mute"){

        message.guild.channels.cache.find(channel => channel.id == db1.get(`modlogs_channel_${message.guild.id}`)).messages.fetch(`${casenumber.message_id}`).then(msg => {
            let theduration = msg.embeds[0].fields[2].value;

            let muteEmbed = new Discord.MessageEmbed()
            .setTitle("Case " + casenumber.casenumber + " | Mute")
            .setDescription(`\`${casenumber.username}\` has been muted.`)
            .setColor("#ffb53f")
            .addField("Muted User", `<@${casenumber.user_id}> (${casenumber.user_id})`, true)
            .addField("Responsible Staff", `<@${casenumber.staff_id}> (${casenumber.staff_id})`, true)
            .addField("Duration", `${theduration}`, true)
            .addField("Reason", casenumber.reason, true)
            .setTimestamp(casenumber.createdAt);
            
            return message.channel.send(muteEmbed);
        });
    };

    if(casenumber.modtype == "Kick"){

        let kickEmbed = new Discord.MessageEmbed()
        .setTitle("Case " + casenumber.casenumber + " | Kick")
        .setColor("#fa5534")
        .setDescription(`\`${casenumber.username}\` has been kicked.`)
        .addField("Kicked User", `<@${casenumber.user_id}> (${casenumber.user_id})`, true)
        .addField("Responsible Staff", `<@${casenumber.staff_id}> (${casenumber.staff_id})`, true)
        .addField("Reason", casenumber.reason, true)
        .setTimestamp(casenumber.createdAt);
        
        return message.channel.send(kickEmbed);
    };


    if(casenumber.modtype == "Ban"){

        message.guild.channels.cache.find(channel => channel.id == db1.get(`modlogs_channel_${message.guild.id}`)).messages.fetch(`${casenumber.message_id}`).then(msg => {
            let theduration = msg.embeds[0].fields[2].value;

            let banEmbed = new Discord.MessageEmbed()
            .setTitle("Case " + casenumber.casenumber + " | Ban")
            .setColor("#b50712")
            .setDescription(`\`${casenumber.username}\` has been banned.`)
            .addField("Banned User", `<@${casenumber.user_id}> (${casenumber.user_id})`, true)
            .addField("Responsible Staff", `<@${casenumber.staff_id}> (${casenumber.staff_id})`, true)
            .addField("Duration", theduration, true)
            .addField("Reason", casenumber.reason, true)
            .setTimestamp(casenumber.createdAt);
            
            return message.channel.send(banEmbed);
        });
    };

}};*/