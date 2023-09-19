/*const Discord = require("discord.js");
const config = require('../botconfig.json');
const Sequelize = require('sequelize')
const fs = require('fs')
const ms = require('ms')
const SourceBin = require('sourcebin-wrapper') 
module.exports = {
    name: 'modlogs',
    aliases: ['ml'],
    category: 'Moderation',
    utilisation: '{prefix}modlogs [user]',

    async execute(client, message, args, prefix) {
        if(message.author.id !== '285528911545106432') return;
        const db1 = require("quick.db")
        db1.add(`commands_used`, 1)
      
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

let allowedRoles = config.staffRoles.map(rID => `<@&${rID}>`);

let helpEmbed = new Discord.MessageEmbed()
.setTitle(`Command: ${prefix}modlogs`)
.setColor("RANDOM")
.setDescription("Displays a user's moderation logs/infraction history.")
.addField("Aliases", `\`${prefix}ml\``, true)
.addField("Allowed Roles", `${allowedRoles.join(` | `)}`, true)
.addField("Usage", `\`${prefix}modlogs\`\n\`${prefix}ml\``)
.addField("Example", `\`${prefix}modlogs @oliver\``)

if(!args[0]) return message.reply(helpEmbed);
if(args[0].toLowerCase() == "help") return message.reply(helpEmbed);

let mUser = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
let mUserTag = "tag here";
let mUserAvatar = "avatar link here";
if(mUser) mUserTag = mUser.user.tag;
if(mUser) mUserAvatar = mUser.user.displayAvatarURL({dynamic: true});
if(!mUser){
    try{
        mUser = await client.users.fetch(args[0]);
        mUserTag = mUser.tag;
        mUserAvatar = mUser.displayAvatarURL({dynamic: true});
    }catch(e){
        let errorEmbed = new Discord.MessageEmbed()
        .setColor("#6b0202")
        .setDescription(`❌ User Not Found: ${args[0]}\n*Tip: Use user ID if the user isn't in the server!*`);

        return message.reply(errorEmbed);
    };
};

const total = await MLogs.count({where: {user_id: mUser.id}});
const allmlogs = await MLogs.findAll({where: {user_id: mUser.id}});
let pastday = 0;
let pastmonth = 0;
let pastweek = 0;

allmlogs.forEach(log => {
  let d1 = new Date();
  let d2 = new Date(log.createdAt);

  if(d2.getTime() >= d1.getTime() - 86400000) pastday++;
  if(d2.getTime() >= d1.getTime() - 604800000) pastweek++;
  if(d2.getTime() >= d1.getTime() - 2592000000) pastmonth++;
});

let mlogEmbed = new Discord.MessageEmbed()
.setAuthor(`Moderation Logs: ${mUserTag}`, mUserAvatar)
.setColor("#2c6ff5")
.setDescription(`**Total:** ${total}\n**Past 24H:** ${pastday}\n**Past Week:** ${pastweek}\n**Past Month:** ${pastmonth}`)
.setTimestamp();

let mlog2Embed = new Discord.MessageEmbed()
.setColor("#2c6ff5")
.setTimestamp();

const mlog = await MLogs.findAll({where: { user_id: mUser.id} });

mlog.forEach(m => {
    if(!mlogEmbed.fields[24]){
        mlogEmbed.addField(`Case ${m.case}`, `**Type:** ${m.modtype} \n **User:** ${m.user_tag} \n **Staff:** ${m.staff_tag} \n **Reason:** ${m.reason} \n **Date:** ${new Date(m.createdAt).toUTCString()}`);
    }else{
        mlog2Embed.addField(`Case ${m.case}`, `**Type:** ${m.modtype} \n **User:** ${m.user_tag} \n **Staff:** ${m.staff_tag} \n **Reason:** ${m.reason} \n **Date:** ${new Date(m.createdAt).toUTCString()}`);
    }
});

if(!mlog2Embed.fields[0]) message.channel.send(mlogEmbed);
if(mlog2Embed.fields[0]){
    await message.channel.send(mlogEmbed);
    message.channel.send(mlog2Embed);
};

    }};*/