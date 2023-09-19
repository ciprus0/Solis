/**
 * // @author © Storm Developmentz
*/

const Discord = require("discord.js");
const config = require('../botconfig.json');
const Sequelize = require("sequelize");

module.exports = {
    name: 'case',
    aliases: ['None'],
    category: 'Moderation',
    utilisation: '{prefix}case [case number]',

    async execute(client, message, prefix) {
        const db1 = require("quick.db")
        db1.add(`commands_used`, 1)
        let messageArray = message.content.split(/ +/);
        let cmd = messageArray[0];
        let args = messageArray.slice(1);
        if(message.guild.id !== '871546040220799026') return message.inlineReply('Sorry, for now this command is not allowed here.')
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

    let allowedRoles = config.staffRoles.map(rID => `<@&${rID}>`);
    let allowedRoles1 = config.staffRoles
    if(!message.guild.member(message.author).roles.cache.some(r => allowedRoles1.includes(r.id))) return 

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

    let errorEmbed = new Discord.MessageEmbed()
    .setColor("#6b0202")
    .setDescription(`❌ Mention a valid case number!`);

    if(isNaN(args[0])) return message.reply(errorEmbed);

    let error2Embed = new Discord.MessageEmbed()
    .setColor("#6b0202")
    .setDescription(`❌ Case not found.`);

    if(args[0] >= client.counts["casecount"]) return message.reply(error2Embed);

    let thecase = await MLogs.findOne({where: {case: args[0]}});
    if(!thecase) return message.reply(error2Embed);

    if(thecase.modtype == "Warn"){

        let warnEmbed = new Discord.MessageEmbed()
        .setTitle("Case " + thecase.case + " | Warn")
        .setDescription(`\`${thecase.user_tag}\` has been warned.`)
        .setColor("#ffe552")
        .addField("Warned User", `<@${thecase.user_id}> (${thecase.user_id})`, true)
        .addField("Responsible Staff", `<@${thecase.staff_id}> (${thecase.staff_id})`, true)
        .addField("Reason", thecase.reason, true)
        .setTimestamp(thecase.createdAt);
        
        return message.channel.send(warnEmbed);
    }

    if(thecase.modtype == "Mute"){

        message.guild.channels.cache.find(channel => channel.id == config.Moderation_Logs_Channel).messages.fetch(`${thecase.message_id}`).then(msg => {
            let theduration = msg.embeds[0].fields[2].value;

            let muteEmbed = new Discord.MessageEmbed()
            .setTitle("Case " + thecase.case + " | Mute")
            .setDescription(`\`${thecase.user_tag}\` has been muted.`)
            .setColor("#ffb53f")
            .addField("Muted User", `<@${thecase.user_id}> (${thecase.user_id})`, true)
            .addField("Responsible Staff", `<@${thecase.staff_id}> (${thecase.staff_id})`, true)
            .addField("Duration", `${theduration}`, true)
            .addField("Reason", thecase.reason, true)
            .setTimestamp(thecase.createdAt);
            
            return message.channel.send(muteEmbed);
        });
    };

    if(thecase.modtype == "Kick"){

        let kickEmbed = new Discord.MessageEmbed()
        .setTitle("Case " + thecase.case + " | Kick")
        .setColor("#fa5534")
        .setDescription(`\`${thecase.user_tag}\` has been kicked.`)
        .addField("Kicked User", `<@${thecase.user_id}> (${thecase.user_id})`, true)
        .addField("Responsible Staff", `<@${thecase.staff_id}> (${thecase.staff_id})`, true)
        .addField("Reason", thecase.reason, true)
        .setTimestamp(thecase.createdAt);
        
        return message.channel.send(kickEmbed);
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
            .addField("Reason", thecase.reason, true)
            .setTimestamp(thecase.createdAt);
            
            return message.channel.send(banEmbed);
        });
    };

}
};

// © Storm Developmentz 
