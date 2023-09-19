/**
 * // @author © Storm Developmentz
*/

const Discord = require("discord.js");
const Sequelize = require("sequelize");
const fs = require("fs");
const config = require('../botconfig.json');
const SourceBin = require('sourcebin-wrapper');

module.exports = {
    name: 'warn',
    aliases: ['None'],
    category: 'Moderation',
    utilisation: '{prefix}warn [user] [reason]',

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
    .setTitle(`Command: ${prefix}warn`)
    .setColor("RANDOM")
    .setDescription("Warn a user.")
    .addField("Aliases", `\`none\``, true)
    .addField("Allowed Roles", `${allowedRoles.join(` | `)}`, true)
    .addField("Usage", `\`${prefix}warn [user] [reason]\``)
    .addField("Example", `\`${prefix}warn @user not following mods instructions\``)

    if(!args[0]) return message.reply(helpEmbed);
    if(args[0].toLowerCase() == "help") return message.reply(helpEmbed);

    let wUser = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));

    let errorEmbed = new Discord.MessageEmbed()
    .setColor("#6b0202")
    .setDescription(`❌ Member Not Found: ${args[0]}`);

    if(!wUser) return message.reply(errorEmbed);

    let wReason = args.slice(1).join(" ");

    let error2Embed = new Discord.MessageEmbed()
    .setColor("#6b0202")
    .setDescription(`❌ Include a reason!`);

    if(!wReason) return message.reply(error2Embed);

    let error9Embed = new Discord.MessageEmbed()
    .setColor("#6b0202")
    .setDescription(`❌ User (${wUser}) is a staff member!`);

    if(wUser.roles.cache.some(r => config.staffRoles.includes(r.id))) return message.reply(error9Embed);

    client.counts = require("../counts.json");
    let casenum = client.counts["casecount"];

    let warnEmbed = new Discord.MessageEmbed()
    .setAuthor("Case " + casenum + " | Warn", wUser.user.displayAvatarURL({dynamic: true}))
    .setDescription(`\`${wUser.user.tag}\` has been warned.`)
    .setColor("#ffe552")
    .addField("Warned User", `${wUser} (${wUser.user.id})`, true)
    .addField("Responsible Staff", `${message.member} (${message.author.id})`, true)
    .addField("Reason", wReason, true)
    .setTimestamp();

    let success2Embed = new Discord.MessageEmbed()
    .setColor(0x505050)
    .setAuthor('User Warned | ' + message.guild.name, message.guild.iconURL())
.setDescription(`<:NB_IconPinUnread:790265429691072542> \`${wUser.user.tag}\` has been warned.\n**Moderator:** <@${message.author.id}>\n**Reason:** ${wReason}`)
.setThumbnail(message.guild.iconURL())
    

    message.delete();
    message.channel.send(success2Embed);
    wUser.send(`You have been warned in **${message.guild.name}** | ${wReason}`);

    MLogs.create({
        case: casenum,
        modtype: "Warn",
        user_id: wUser.id,
        user_tag: wUser.user.tag,
        reason: wReason,
        staff_id: message.author.id,
        staff_tag: message.author.tag,
        message_id: "e",
    });

    message.guild.channels.cache.find(channel => channel.id == config.Moderation_Logs_Channel).send(warnEmbed).then(msg => {
        MLogs.update({message_id: msg.id}, {where: {case: casenum}});
    });

    message.channel.messages.fetch({limit: 100}).then(messages => {
        let membermsgs = messages.filter(messages => messages.author.id == wUser.id && !messages.pinned).first(20);
        if (membermsgs.length > 0 && !["dm", "pfp", "avatar", "username", "profile picture", " vc", " vc ", "voice channel"].some(rV => wReason.toLowerCase().includes(rV))) {
            let msgsArray = [];
            membermsgs.forEach(msg => msgsArray.push(msg.content));
            SourceBin.newBin(`Case ${casenum} - ${wUser.user.tag}/${wUser.id}\nReason: ${wReason}\n\nLAST MESSAGES:\n\n${msgsArray.join(`\n`)}`, 'txt', 'wrapper', {
                title: "",
                description: ""
            }).then(resp => message.guild.channels.cache.find(channel => channel.id == config.Moderation_Logs_Channel).send(`**Case ${casenum}** - ` + resp.shortened));
        };
    });

    client.counts["casecount"]++;
    fs.writeFile("./counts.json", JSON.stringify(client.counts), (err) => {
      if (err) console.log(err);
    });

}
}


// © Storm Developmentz
