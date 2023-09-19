/**
 * // @author © Storm Developmentz
*/

const Discord = require("discord.js");
const Sequelize = require("sequelize");
const fs = require("fs");
const config = require("../botconfig.json");
const SourceBin = require('sourcebin-wrapper');

module.exports = {
    name: 'kick',
    aliases: ['None'],
    category: 'Moderation',
    utilisation: '{prefix}kick [user] [reason]',

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

    let allowedRoles;
    if(config.Kick_Command_Roles.length > 0) allowedRoles = config.Kick_Command_Roles;
    if(config.Kick_Command_Roles.length == 0) allowedRoles = config.staffRoles;
    if(!message.guild.member(message.author).roles.cache.some(r => allowedRoles.includes(r.id))) return 
    let helpEmbed = new Discord.MessageEmbed()
    .setTitle(`Command: ${prefix}kick`)
    .setColor("RANDOM")
    .setDescription("Kick the specified member.")
    .addField("Aliases", `\`none\``, true)
    .addField("Allowed Roles", `${allowedRoles.map(rID => `<@&${rID}>`).join(' | ')}`, true)
    .addField("Usage", `\`${prefix}kick [@user/user id] [reason]\``)
    .addField("Example", `\`${prefix}kick @person alt\`\n\`${prefix}kick 69420 alt\``)

    if(!args[0]) return message.reply(helpEmbed);
    if(args[0].toLowerCase() == "help") return message.reply(helpEmbed);

    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));

    let errorEmbed = new Discord.MessageEmbed()
    .setColor("#6b0202")
    .setDescription(`⛔ Member Not Found: ${args[0]}`);

    if(!kUser) return message.reply(errorEmbed);

    let kReason = args.slice(1).join(" ");

    let error2Embed = new Discord.MessageEmbed()
    .setColor("#6b0202")
    .setDescription(`⛔ Include a reason!`);

    if(!kReason) return message.reply(error2Embed);

    let error9Embed = new Discord.MessageEmbed()
    .setColor("#6b0202")
    .setDescription(`⛔ User (${kUser}) is a staff member!`);

    if(message.guild.member(kUser).roles.cache.some(r=>config.staffRoles.includes(r.id))) return message.reply(error9Embed);

    client.counts = require("../counts.json");
    let casenum = client.counts["casecount"];

    let kickEmbed = new Discord.MessageEmbed()
    .setAuthor("Case " + casenum + " | Kick", kUser.user.displayAvatarURL({dynamic: true}))
    .setDescription(`\`${kUser.user.tag}\` has been kicked.`)
    .setColor("#fa5534")
    .addField("Kicked User", `${kUser} (${kUser.user.id})`, true)
    .addField("Responsible Staff", `${message.member} (${message.author.id})`, true)
    .addField("Reason", kReason, true)
    .setTimestamp();

    let success2Embed = new Discord.MessageEmbed()
    .setColor("#39fa53")
    .setAuthor('User Kicked | ' + message.guild.name, message.guild.iconURL())
.setDescription(`<:NB_IconPinUnread:790265429691072542> \`${kUser.user.tag}\` has been kicked from Night Bar.\n**Moderator:** <@${message.author.id}>`)
.setThumbnail(message.guild.iconURL())
  

    message.delete();

    try{
        await kUser.send(`You have been kicked from ${message.guild.name} | ${kReason}`);
        await kUser.kick(kReason);
        message.channel.send(success2Embed);
    
        MLogs.create({
            case: casenum,
            modtype: "Kick",
            user_id: kUser.id,
            user_tag: kUser.user.tag,
            reason: kReason,
            staff_id: message.author.id,
            staff_tag: message.author.tag,
            message_id: "e",
        });
    
        message.guild.channels.cache.find(channel => channel.id == config.Moderation_Logs_Channel).send(kickEmbed).then(msg => {
            MLogs.update({message_id: msg.id}, {where: {case: casenum}});
        });

        message.channel.messages.fetch({limit: 100}).then(messages => {
            let membermsgs = messages.filter(messages => messages.author.id == kUser.id && !messages.pinned).first(20);
            if (membermsgs.length > 0 && !["dm", "pfp", "avatar", "username", "profile picture", " vc", " vc ", "voice channel"].some(rV => kReason.toLowerCase().includes(rV))) {
                let msgsArray = [];
                membermsgs.forEach(msg => msgsArray.push(msg.content));
                SourceBin.newBin(`Case ${casenum} - ${kUser.user.tag}/${bUser.id}\nReason: ${kReason}\n\nLAST MESSAGES:\n\n${msgsArray.join(`\n`)}`, 'txt', 'wrapper', {
                    title: "",
                    description: ""
                }).then(resp => message.guild.channels.cache.find(channel => channel.id == config.Moderation_Logs_Channel).send(`**Case ${casenum}** - ` + resp.shortened));
            };
        });
    
        client.counts["casecount"]++
        fs.writeFile("./counts.json", JSON.stringify(client.counts), (err) => {
          if (err) console.log(err);
        });
    }catch(e){
        await kUser.kick(kReason);
        message.channel.send(success2Embed);
    
        MLogs.create({
            case: casenum,
            modtype: "Kick",
            user_id: kUser.id,
            user_tag: kUser.user.tag,
            reason: kReason,
            staff_id: message.author.id,
            staff_tag: message.author.tag,
            message_id: "e",
        });
    
        message.guild.channels.cache.find(channel => channel.id == config.Moderation_Logs_Channel).send(kickEmbed).then(msg => {
            MLogs.update({message_id: msg.id}, {where: {case: casenum}});
        });
    
        client.counts["casecount"]++
        fs.writeFile("./counts.json", JSON.stringify(client.counts), (err) => {
          if (err) console.log(err);
        });
    }
}
};

// © Storm Developmentz
