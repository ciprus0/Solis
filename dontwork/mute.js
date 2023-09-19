/**
 * // @author © Storm Developmentz
*/
const Discord = require("discord.js");
const Sequelize = require("sequelize");
const config = require('../botconfig.json')
const fs = require("fs");
const ms = require("ms");
const SourceBin = require('sourcebin-wrapper');

module.exports = {
    name: 'mute',
    aliases: ['None'],
    category: 'Moderation',
    utilisation: '{prefix}mute [user] [time] [reason]',

    async execute(client, message, prefix) {
        const db1 = require("quick.db")
        db1.add(`commands_used`, 1)
        let messageArray = message.content.split(/ +/);
        let cmd = messageArray[0];
        let args = messageArray.slice(1);
        if(message.guild.id !== '871546040220799026') return message.inlineReply('Sorry, for now this command is not allowed here.')
    client.counts = require("../counts.json");
    client.pendingmutes = require("../pendingmutes.json");

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
    .setTitle(`Command: ${prefix}mute`)
    .setColor("RANDOM")
    .setDescription("Mutes a member for the specified duration and reason.")
    .addField("Aliases", `\`${prefix}m\``, true)
    .addField("Allowed Roles", `${allowedRoles.join(` | `)}`, true)
    .addField("Usage", `\`${prefix}mute [user] [duration] [reason]\``)
    .addField("Example", `\`${prefix}mute @bob 1h Spamming\``)

    if(!args[0]) return message.reply(helpEmbed);
    if(args[0].toLowerCase() == "help") return message.reply(helpEmbed);

    let mUser = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));

    let errorEmbed = new Discord.MessageEmbed()
    .setColor("#6b0202")
    .setDescription(`❌ Member Not Found: ${args[0]}`);

    if(!mUser) return message.reply(errorEmbed);

    let error2Embed = new Discord.MessageEmbed()
    .setColor("#6b0202")
    .setDescription(`❌ Include a duration and reason!`);

    let error3Embed = new Discord.MessageEmbed()
    .setColor("#6b0202")
    .setDescription(`❌ Include a valid duration!\n\`m\` = minutes | \`h\` = hours | \`d\` = days`);

    let dVariables = ["1m", "2m", "3m", "4m", "5m", "6m", "7m", "8m", "9m", "1h", "2h", "3h", "4h", "5h", "6h", "7h", "8h", "9h", "1d", "2d", "3d", "4d", "5d", "6d", "7d", "8d", "9d", "1y", "2y", "3y", "4y", "5y", "6y", "7y", "8y", "9y", "0m", "0h", "0d"];
    let theduration = args[1];
    if(!theduration) return message.reply(error2Embed);
    if(theduration && !dVariables.some(dV => theduration.endsWith(dV))) return message.reply(error3Embed);

    let error4Embed = new Discord.MessageEmbed()
    .setColor("#6b0202")
    .setDescription(`❌ Include a reason!`);

    let mReason = args.slice(2).join(" ");
    if(!mReason) return message.reply(error4Embed);

    let error5Embed = new Discord.MessageEmbed()
    .setColor("#6b0202")
    .setDescription(`❌ User (${mUser}) is already muted!`);

    if(mUser.roles.cache.some(r=>["718994056432320623"].includes(r.id))) return message.reply(error5Embed);

    let error9Embed = new Discord.MessageEmbed()
    .setColor("#6b0202")
    .setDescription(`❌ User (${mUser}) is a staff member!`);

    if(message.guild.member(mUser).hasPermission("MANAGE_MESSAGES")) return message.reply(error9Embed);

    client.counts = require("../counts.json");
    let casenum = client.counts["casecount"];

    let muteEmbed = new Discord.MessageEmbed()
    .setAuthor("Case " + casenum + " | Mute", mUser.user.displayAvatarURL({dynamic: true}))
    .setDescription(`\`${mUser.user.tag}\` has been muted.`)
    .setColor("#ffb53f")
    .addField("Muted User", `${mUser} (${mUser.user.id})`, true)
    .addField("Responsible Staff", `${message.member} (${message.author.id})`, true)
    .addField("Duration", theduration, true)
    .addField("Reason", mReason, true)
    .setTimestamp();

    let successEmbed = new Discord.MessageEmbed()
    .setColor("#39fa53")
    .setAuthor('User Muted | ' + message.guild.name, message.guild.iconURL())
.setDescription(`<:NB_IconPinUnread:790265429691072542> \`${mUser.user.tag}\` has been muted.\n**Moderator:** <@${message.author.id}>\n**Time:** ${theduration}`)
.setThumbnail(message.guild.iconURL())
    

    client.pendingmutes[mUser.id] = {
        time: Date.now() + ms(theduration),
        roleset: message.guild.member(mUser).roles.cache.keyArray()
    };

    fs.writeFile("./pendingmutes.json", JSON.stringify(client.pendingmutes, 2, null), (err) => {
        if(err) console.log(err);
    });

    mUser.roles.add(config.Muted_Role);

    message.delete();
    mUser.send(`You have been muted in **${message.guild.name}** | ${mReason}\nDuration: ${theduration}`);
    message.channel.send(successEmbed);

    MLogs.create({
        case: casenum,
        modtype: "Mute",
        user_id: mUser.id,
        user_tag: mUser.user.tag,
        reason: mReason,
        staff_id: message.author.id,
        staff_tag: message.author.tag,
        message_id: "e",
    });

    message.guild.channels.cache.find(channel => channel.id == config.Moderation_Logs_Channel).send(muteEmbed).then(msg => {
        MLogs.update({message_id: msg.id}, {where: {case: casenum}});
    });

    message.channel.messages.fetch({limit: 100}).then(messages => {
        let membermsgs = messages.filter(messages => messages.author.id == mUser.id && !messages.pinned).first(20);
        if (membermsgs.length > 0 && !["dm", "pfp", "avatar", "username", "profile picture", " vc", " vc ", "voice channel"].some(rV => mReason.toLowerCase().includes(rV))) {
            let msgsArray = [];
            membermsgs.forEach(msg => msgsArray.push(msg.content));
            SourceBin.newBin(`Case ${casenum} - ${mUser.user.tag}/${mUser.id}\nReason: ${mReason}\n\nLAST MESSAGES:\n\n${msgsArray.join(`\n`)}`, 'txt', 'wrapper', {
                title: "",
                description: ""
            }).then(resp => message.guild.channels.cache.find(channel => channel.id == config.Moderation_Logs_Channel).send(`**Case ${casenum}** - ` + resp.shortened));
        };
    });

    client.counts["casecount"]++
    fs.writeFile("./counts.json", JSON.stringify(client.counts), (err) => {
      if (err) console.log(err);
    });

}

};
// © Storm Developmentz
