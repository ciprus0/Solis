/*const Discord = require("discord.js");
const config = require('../botconfig.json');
const Sequelize = require('sequelize')
const fs = require('fs')
const ms = require('ms')
const SourceBin = require('sourcebin-wrapper') 
module.exports = {
    name: 'ban',
    aliases: ['None'],
    category: 'Moderation',
    utilisation: '{prefix}ban [user] [reason]',

    async execute(client, message, args, prefix) {
        const db1 = require("quick.db")
        db1.add(`commands_used`, 1)
if(message.author.id !== '285528911545106432') return;
client.counts = require("../counts.json");
client.pendingbans = require("../pendingbans.json");

const sequelize = new Sequelize('database', 'user', 'password', {
    host: 'localhost',
    dialect: 'sqlite',
    logging: false,
    storage: 'modlogs.sqlite',
});

const MLogs = sequelize.define('mlogs', {
  case: {
      type: Sequelize.INTEGER,
      unique: true,
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
if(config.Ban_Command_Roles.length > 0) allowedRoles = config.Ban_Command_Roles;
if(config.Ban_Command_Roles.length == 0) allowedRoles = config.staffRoles;

let helpEmbed = new Discord.MessageEmbed()
.setTitle(`Command: ${config.prefix}ban`)
.setColor("RANDOM")
.setDescription("Ban the specified user.")
.addField("Aliases", `\`${config.prefix}ban\``, true)
.addField("Allowed Roles", `${allowedRoles.map(rID => `<@&${rID}>`).join(' | ')}`, true)
.addField("Usage", `\`${config.prefix}ban\``)
.addField("Example", `\`${config.prefix}ban @joey NSFW\``)

if(!args[0]) return message.reply(helpEmbed);
if(args[0].toLowerCase() == "help") return message.reply(helpEmbed);

let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
let bUsertag = "tag here";
let bUserAv = "avatar";
if(bUser) bUsertag = bUser.user.tag;
if(bUser) bUserAv = bUser.user.displayAvatarURL({dynamic: true});
if(!bUser) try{
    bUser = await client.users.fetch(args[0]);
    bUsertag = bUser.tag;
    bUserAv = bUser.displayAvatarURL({dynamic: true});
}catch(e){
    let errorEmbed = new Discord.MessageEmbed()
    .setColor("#6b0202")
    .setDescription(`❌ Member Not Found: ${args[0]}`);

    return message.reply(errorEmbed);
}

let error2Embed = new Discord.MessageEmbed()
.setColor("#6b0202")
.setDescription(`❌ Include a reason!`);

let error3Embed = new Discord.MessageEmbed()
.setColor("#6b0202")
.setDescription(`❌ User (${bUser}) is already banned!`);

let banned = (await message.guild.fetchBans()).find(banned => banned.id === bUser.id);
if(banned) return message.reply(error3Embed);

let error9Embed = new Discord.MessageEmbed()
.setColor("#6b0202")
.setDescription(`❌ User (${bUser}) is a staff member!`);

if(message.guild.member(bUser) && message.guild.member(bUser).roles.cache.some(r => config.staffRoles.includes(r.id))) return message.reply(error9Embed);

let theduration = "permanent";
let bReason = "placeholder";
let dVariables = ["1m", "2m", "3m", "4m", "5m", "6m", "7m", "8m", "9m", "1h", "2h", "3h", "4h", "5h", "6h", "7h", "8h", "9h", "1d", "2d", "3d", "4d", "5d", "6d", "7d", "8d", "9d", "1y", "2y", "3y", "4y", "5y", "6y", "7y", "8y", "9y", "0m", "0h", "0d"];
if(args[1] && dVariables.some(dV => args[1].endsWith(dV))){
    if(!args.slice(2).join(" ")) return message.reply(error2Embed);

    bReason = args.slice(2).join(" ");

    theduration = args[1];

    client.pendingbans[bUser.id] = {
        time: Date.now() + ms(theduration)
    };
    fs.writeFile("./pendingbans.json", JSON.stringify(client.pendingbans, 2, null), (err) => {
        if (err) console.log(err);
    });
};

if(args[1] && !dVariables.some(dV => args[1].endsWith(dV))) bReason = args.slice(1).join(" ");
if(!args[1]) return message.reply(error2Embed);

client.counts = require("../counts.json");
let casenum = client.counts["casecount"];

let banEmbed = new Discord.MessageEmbed()
.setAuthor("Case " + casenum + " | Ban", bUserAv)
.setDescription(`\`${bUsertag}\` has been banned.`)
.setColor("#b50712")
.addField("Banned User", `${bUser} (${bUser.id})`, true)
.addField("Responsible Staff", `${message.member} (${message.author.id})`, true)
.addField("Duration", theduration, true)
.addField("Reason", bReason, true)
.setTimestamp();

let successEmbed = new Discord.MessageEmbed()
.setColor("#39fa53")
.setDescription(`✅ **\`${bUsertag}\` has been banned.**`);

message.delete();

try{
    await bUser.send(`You have been banned from **${message.guild.name}** | ${bReason}\nDuration: ${theduration}`);
    await message.guild.members.ban(bUser.user, {days: 1, reason: bReason});
    message.channel.send(successEmbed);

    MLogs.create({
        case: casenum,
        modtype: "Ban",
        user_id: bUser.id,
        user_tag: bUsertag,
        reason: bReason,
        staff_id: message.author.id,
        staff_tag: message.author.tag,
        message_id: "e",
    });

    message.guild.channels.cache.find(channel => channel.id == config.Moderation_Logs_Channel).send(banEmbed).then(msg => {
        MLogs.update({message_id: msg.id}, {where: {case: casenum}});
    });

    message.channel.messages.fetch({limit: 100}).then(messages => {
        let membermsgs = messages.filter(messages => messages.author.id == bUser.id && !messages.pinned).first(20);
        if (membermsgs.length > 0 && !["dm", "pfp", "avatar", "username", "profile picture", " vc", " vc ", "voice channel"].some(rV => bReason.toLowerCase().includes(rV))) {
            let msgsArray = [];
            membermsgs.forEach(msg => msgsArray.push(msg.content));
            SourceBin.newBin(`Case ${casenum} - ${bUser.tag}/${bUser.id}\nReason: ${bReason}\n\nLAST MESSAGES:\n\n${msgsArray.join(`\n`)}`, 'txt', 'wrapper', {
                title: "",
                description: ""
            }).then(resp => message.guild.channels.cache.find(channel => channel.id == config.Moderation_Logs_Channel).send(`**Case ${casenum}** - ` + resp.shortened));
        };
        message.channel.bulkDelete(membermsgs);
    });


    client.counts["casecount"]++
    fs.writeFile("./counts.json", JSON.stringify(client.counts), (err) => {
      if (err) console.log(err);
    });
}catch(e){
    await message.guild.members.ban(bUser, {days: 1, reason: bReason});
    message.channel.send(successEmbed);

    MLogs.create({
        case: casenum,
        modtype: "Ban",
        user_id: bUser.id,
        user_tag: bUsertag,
        reason: bReason,
        staff_id: message.author.id,
        staff_tag: message.author.tag,
        message_id: "e",
    });

    message.guild.channels.cache.find(channel => channel.id == config.Moderation_Logs_Channel).send(banEmbed).then(msg => {
        MLogs.update({message_id: msg.id}, {where: {case: casenum}});
    });

    message.channel.messages.fetch({limit: 100}).then(messages => {
        let membermsgs = messages.filter(messages => messages.author.id == bUser.id && !messages.pinned).first(20);
        message.channel.bulkDelete(membermsgs);
    });

    client.counts["casecount"]++
    fs.writeFile("./counts.json", JSON.stringify(client.counts), (err) => {
      if (err) console.log(err);
    });
}

    }};*/