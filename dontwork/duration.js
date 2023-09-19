/**
 * // @author © Storm Developmentz
*/

const Discord = require("discord.js");
const ms = require("ms");
const fs = require("fs");
const config = require('../botconfig.json');
const Sequelize = require('sequelize');

module.exports = {
    name: 'duration',
    aliases: ['dur'],
    category: 'Moderation',
    utilisation: '{prefix}duration [case number] [new duration]',

    async execute(client, message, prefix) {
        const db1 = require("quick.db")
        db1.add(`commands_used`, 1)
        let messageArray = message.content.split(/ +/);
        let cmd = messageArray[0];
        let args = messageArray.slice(1);
        if(message.guild.id !== '871546040220799026') return message.inlineReply('Sorry, for now this command is not allowed here.')
    let allowedRoles = config.staffRoles.map(rID => `<@&${rID}>`);
    let allowedRoles1 = config.staffRoles
    if(!message.guild.member(message.author).roles.cache.some(r => allowedRoles1.includes(r.id))) return 
    let helpEmbed = new Discord.MessageEmbed()
        .setTitle(`Command: ${prefix}duration`)
        .setColor("RANDOM")
        .setDescription("Edit a moderation mutes time.")
        .addField("Aliases", `\`${prefix}dur\``, true)
        .addField("Allowed Roles", `${allowedRoles.join(` | `)}`, true)
        .addField("Usage", `\`${prefix}duration\``)
        .addField("Example", `\`${prefix}duration 420 69m\``)


    if (!args[0] || args[0].toLowerCase() == "help") return message.reply(helpEmbed);

    client.counts = require("../counts.json");
    client.pendingmutes = require('../pendingmutes.json');

    const sequelize = new Sequelize('database', 'user', 'password', {
        host: 'localhost',
        dialect: 'sqlite',
        logging: false,
        storage: 'modlogs.sqlite',
    });

    const MLogs = sequelize.define('mlogs', {
        case: {
            type: Sequelize.INTEGER,
            unique: false,
        },
        modtype: Sequelize.TEXT,
        user_id: Sequelize.STRING,
        user_tag: Sequelize.TEXT,
        reason: Sequelize.TEXT,
        staff_id: Sequelize.STRING,
        staff_tag: Sequelize.TEXT,
        message_id: Sequelize.STRING,
    });

    let errorEmbed = new Discord.MessageEmbed()
        .setColor("#6b0202")
        .setDescription(`❌ Mention a valid case number!`);

    if (isNaN(args[0])) return message.reply(errorEmbed);

    let error2Embed = new Discord.MessageEmbed()
        .setColor("#6b0202")
        .setDescription(`❌ Case not found or case is not a mute.`);

    if (args[0] >= client.counts["casecount"]) return message.reply(error2Embed);

    let error3Embed = new Discord.MessageEmbed()
        .setColor("#6b0202")
        .setDescription(`❌ Include a new duration!`);

    let newDuration = args[1];
    if (!newDuration) return message.reply(error3Embed);

    let durations = ["1m", "1h", "1d", "2m", "2h", "2d", "3m", "3h", "3d", "4m", "4h", "4d", "5m", "5h", "5d", "6m", "6h", "6d", "7m", "7h", "7d", "8m", "8h", "8d", "9m", "9h", "9d"];
    let durations2 = ["0m", "0h", "0d"];
    let nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

    let error4Embed = new Discord.MessageEmbed()
        .setColor("#6b0202")
        .setDescription(`❌ Invalid new duration: ${newDuration}\nDuration Variables: m, h, d`);

    if (!durations.some(d => newDuration.endsWith(d)) && durations2.some(d2 => newDuration.endsWith(d2)) && !nums.some(n => newDuration.startsWith(n))) return message.reply(error4Embed);
    if (!durations.some(d => newDuration.endsWith(d)) && !durations2.some(d2 => newDuration.endsWith(d2))) return message.reply(error4Embed);

    let thecase = await MLogs.findOne({ where: { case: args[0] } });

    if (!thecase || !thecase.case || thecase.modtype !== "Mute") return message.reply(error2Embed);

    let dMem = message.guild.member(message.guild.members.cache.get(thecase.user_id));
    if (!client.pendingmutes[thecase.user_id]) {
        client.pendingmutes[thecase.user_id] = {
            time: new Date(thecase.createdAt).getTime() + ms(newDuration),
        };
        fs.writeFile("./pendingmutes.json", JSON.stringify(client.pendingmutes, 2, null), (err) => {
            if (err) console.log(err);
        });

        if (dMem && !dMem.roles.cache.has(config.Muted_Role)) {
            dMem.roles.add(config.Muted_Role);
        };
    } else if (client.pendingmutes[thecase.user_id]) {
        client.pendingmutes[thecase.user_id].time = new Date(thecase.createdAt).getTime() + ms(newDuration);
        fs.writeFile("./pendingmutes.json", JSON.stringify(client.pendingmutes, 2, null), (err) => {
            if (err) console.log(err);
        });

        if (dMem && !dMem.roles.cache.has(config.Muted_Role)) {
            dMem.roles.add(config.Muted_Role);
        };
    };

    message.guild.channels.cache.find(channel => channel.id == config.Moderation_Logs_Channel).messages.fetch(`${thecase.message_id}`).then(themsg => {

        let successEmbed = new Discord.MessageEmbed()
            .setColor("#39fa53")
            .setDescription(`✅ Updated duration of Case #${args[0]} to \`${newDuration}\``);

        if (thecase.modtype == "Mute") {

            let muteEmbed = new Discord.MessageEmbed()
                .setTitle("Case " + thecase.case + " | Mute")
                .setDescription(`\`${thecase.user_tag}\` has been muted.`)
                .setColor("#ffb53f")
                .addField("Muted User", `<@${thecase.user_id}> (${thecase.user_id})`, true)
                .addField("Responsible Staff", `<@${thecase.staff_id}> (${thecase.staff_id})`, true)
                .addField("Duration", `${newDuration}`, true)
                .addField("Reason", thecase.reason, true)
                .setTimestamp(thecase.createdAt);

            message.channel.send(successEmbed);
            return themsg.edit(muteEmbed);
        };

    });

}
};

// © Storm Developmentz
