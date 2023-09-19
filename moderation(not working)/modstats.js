/*const Discord = require("discord.js");
const config = require('../botconfig.json');
const Sequelize = require('sequelize')
const fs = require('fs')
const ms = require('ms')
const SourceBin = require('sourcebin-wrapper') 
module.exports = {
    name: 'modstats',
    aliases: ['ms'],
    category: 'Moderation',
    utilisation: '{prefix}modstats [user]',

    async execute(client, message, args, prefix) {
        if(message.author.id !== '285528911545106432') return;
        const db1 = require("quick.db")
        db1.add(`commands_used`, 1)
       
let allowedRoles = config.staffRoles.map(rID => `<@&${rID}>`);

let helpEmbed = new Discord.MessageEmbed()
.setTitle(`Command: ${prefix}modstats`)
.setColor("RANDOM")
.setDescription("View a staff member's moderation statistics.")
.addField("Aliases", `\`${prefix}ms\`, \`${prefix}mlc\``, true)
.addField("Allowed Roles", `${allowedRoles.join(` | `)}`, true)
.addField("Usage", `\`${prefix}modstats [optional user]\`\n\`${prefix}modstats full [optional user]\``)
.addField("Example", `\`${prefix}modstats\`\n\`${prefix}modstats full @user\``)

if(args[0] && args[0].toLowerCase() == "help") return message.reply(helpEmbed);

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

if(args[0] && args[0].toLowerCase() == "full"){

    if(args[1] && message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[1]))){

        let thestaff = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[1]));

        let errorEmbed = new Discord.MessageEmbed()
        .setColor("#6b0202")
        .setDescription(`❌ This user (${thestaff.user.tag}) is not a staff member!`);

        if(!thestaff.roles.cache.some(r => config.staffRoles.includes(r.id))) return message.reply(errorEmbed);

        const total = await MLogs.count({where: {staff_id: thestaff.user.id}});
        const allmlogs = await MLogs.findAll({where: {staff_id: thestaff.user.id}});
        let pastmonth = 0;
        let pastweek = 0;

        allmlogs.forEach(log => {
            let d1 = new Date();
            let d2 = new Date(log.createdAt);
    
            if(d2.getTime() >= d1.getTime() - 604800000) pastweek++;
            if(d2.getTime() >= d1.getTime() - 2592000000) pastmonth++;
          });

        const totalwarns = await MLogs.count({where: {staff_id: thestaff.user.id, modtype: "Warn"}});
        const allwarns = await MLogs.findAll({where: {staff_id: thestaff.user.id, modtype: "Warn"}});
        let wpastmonth = 0;
        let wpastweek = 0;

        allwarns.forEach(log => {
            let d1 = new Date();
            let d2 = new Date(log.createdAt);
    
            if(d2.getTime() >= d1.getTime() - 604800000) wpastweek++;
            if(d2.getTime() >= d1.getTime() - 2592000000) wpastmonth++;
        });

        const totalmutes = await MLogs.count({where: {staff_id: thestaff.user.id, modtype: "Mute"}});
        const allmutes = await MLogs.findAll({where: {staff_id: thestaff.user.id, modtype: "Mute"}});
        let mpastmonth = 0;
        let mpastweek = 0;

        allmutes.forEach(log => {
            let d1 = new Date();
            let d2 = new Date(log.createdAt);
    
            if(d2.getTime() >= d1.getTime() - 604800000) mpastweek++;
            if(d2.getTime() >= d1.getTime() - 2592000000) mpastmonth++;
        });

        const totalkicks = await MLogs.count({where: {staff_id: thestaff.user.id, modtype: "Kick"}});
        const allkicks = await MLogs.findAll({where: {staff_id: thestaff.user.id, modtype: "Kick"}});
        let kpastmonth = 0;
        let kpastweek = 0;

        allkicks.forEach(log => {
            let d1 = new Date();
            let d2 = new Date(log.createdAt);
    
            if(d2.getTime() >= d1.getTime() - 604800000) kpastweek++;
            if(d2.getTime() >= d1.getTime() - 2592000000) kpastmonth++;
        });

        const totalbans = await MLogs.count({where: {staff_id: thestaff.user.id, modtype: "Ban"}});
        const allbans = await MLogs.findAll({where: {staff_id: thestaff.user.id, modtype: "Ban"}});
        let bpastmonth = 0;
        let bpastweek = 0;

        allbans.forEach(log => {
            let d1 = new Date();
            let d2 = new Date(log.createdAt);
    
            if(d2.getTime() >= d1.getTime() - 604800000) bpastweek++;
            if(d2.getTime() >= d1.getTime() - 2592000000) bpastmonth++;
        });
  
        let mlogsActivityEmbed = new Discord.MessageEmbed()
        .setAuthor(thestaff.user.tag + ` | ModStats - Full`, thestaff.user.displayAvatarURL({dynamic: true}))
        .setDescription(`Full moderation statistics of \`${thestaff.user.tag}\``)
        .setColor(thestaff.displayHexColor)
        .addField("Warns (7 days)", wpastweek, true)
        .addField("Warns (30 days)", wpastmonth, true)
        .addField("Warns (all time)", totalwarns, true)
        .addField("Mutes (7 days)", mpastweek, true)
        .addField("Mutes (30 days)", mpastmonth, true)
        .addField("Mutes (all time)", totalmutes, true)
        .addField("Kicks (7 days)", kpastweek, true)
        .addField("Kicks (30 days)", kpastmonth, true)
        .addField("Kicks (all time)", totalkicks, true)
        .addField("Bans (7 days)", bpastweek, true)
        .addField("Bans (30 days)", bpastmonth, true)
        .addField("Bans (all time)", totalbans, true)
        .addField("Total (7 days)", pastweek, true)
        .addField("Total (30 days)", pastmonth, true)
        .addField("Total (all time)", total, true)
        .setFooter(`ID: ${thestaff.user.id}`)
        .setTimestamp();
  
        message.channel.send(mlogsActivityEmbed);

    }else{

        const total = await MLogs.count({where: {staff_id: message.author.id}});
        const allmlogs = await MLogs.findAll({where: {staff_id: message.author.id}});
        let pastmonth = 0;
        let pastweek = 0;
        
        allmlogs.forEach(log => {
            let d1 = new Date();
            let d2 = new Date(log.createdAt);
        
            if(d2.getTime() >= d1.getTime() - 604800000) pastweek++;
            if(d2.getTime() >= d1.getTime() - 2592000000) pastmonth++;
          });
        
        const totalwarns = await MLogs.count({where: {staff_id: message.author.id, modtype: "Warn"}});
        const allwarns = await MLogs.findAll({where: {staff_id: message.author.id, modtype: "Warn"}});
        let wpastmonth = 0;
        let wpastweek = 0;
        
        allwarns.forEach(log => {
            let d1 = new Date();
            let d2 = new Date(log.createdAt);
        
            if(d2.getTime() >= d1.getTime() - 604800000) wpastweek++;
            if(d2.getTime() >= d1.getTime() - 2592000000) wpastmonth++;
        });
        
        const totalmutes = await MLogs.count({where: {staff_id: message.author.id, modtype: "Mute"}});
        const allmutes = await MLogs.findAll({where: {staff_id: message.author.id, modtype: "Mute"}});
        let mpastmonth = 0;
        let mpastweek = 0;
        
        allmutes.forEach(log => {
            let d1 = new Date();
            let d2 = new Date(log.createdAt);
        
            if(d2.getTime() >= d1.getTime() - 604800000) mpastweek++;
            if(d2.getTime() >= d1.getTime() - 2592000000) mpastmonth++;
        });
        
        const totalkicks = await MLogs.count({where: {staff_id: message.author.id, modtype: "Kick"}});
        const allkicks = await MLogs.findAll({where: {staff_id: message.author.id, modtype: "Kick"}});
        let kpastmonth = 0;
        let kpastweek = 0;
        
        allkicks.forEach(log => {
            let d1 = new Date();
            let d2 = new Date(log.createdAt);
        
            if(d2.getTime() >= d1.getTime() - 604800000) kpastweek++;
            if(d2.getTime() >= d1.getTime() - 2592000000) kpastmonth++;
        });
        
        const totalbans = await MLogs.count({where: {staff_id: message.author.id, modtype: "Ban"}});
        const allbans = await MLogs.findAll({where: {staff_id: message.author.id, modtype: "Ban"}});
        let bpastmonth = 0;
        let bpastweek = 0;
        
        allbans.forEach(log => {
            let d1 = new Date();
            let d2 = new Date(log.createdAt);
        
            if(d2.getTime() >= d1.getTime() - 604800000) bpastweek++;
            if(d2.getTime() >= d1.getTime() - 2592000000) bpastmonth++;
        });
        
        let mlogsActivityEmbed = new Discord.MessageEmbed()
        .setAuthor(message.author.tag + ` | ModStats - Full`, message.author.displayAvatarURL({dynamic: true}))
        .setDescription(`Full moderation statistics of \`${message.author.tag}\``)
        .setColor(message.member.displayHexColor)
        .addField("Warns (7 days)", wpastweek, true)
        .addField("Warns (30 days)", wpastmonth, true)
        .addField("Warns (all time)", totalwarns, true)
        .addField("Mutes (7 days)", mpastweek, true)
        .addField("Mutes (30 days)", mpastmonth, true)
        .addField("Mutes (all time)", totalmutes, true)
        .addField("Kicks (7 days)", kpastweek, true)
        .addField("Kicks (30 days)", kpastmonth, true)
        .addField("Kicks (all time)", totalkicks, true)
        .addField("Bans (7 days)", bpastweek, true)
        .addField("Bans (30 days)", bpastmonth, true)
        .addField("Bans (all time)", totalbans, true)
        .addField("Total (7 days)", pastweek, true)
        .addField("Total (30 days)", pastmonth, true)
        .addField("Total (all time)", total, true)
        .setFooter(`ID: ${message.author.id}`)
        .setTimestamp();
        
        message.channel.send(mlogsActivityEmbed);

    };

}else{

    if(args[0] && message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]))){

        let thestaff = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));

        let errorEmbed = new Discord.MessageEmbed()
        .setColor("#6b0202")
        .setDescription(`❌ This user (${thestaff.user.tag}) is not a staff member!`);

        if(!thestaff.roles.cache.some(r => config.staffRoles.includes(r.id))) return message.reply(errorEmbed);

        const total = await MLogs.count({where: {staff_id: thestaff.user.id}});
        const allmlogs = await MLogs.findAll({where: {staff_id: thestaff.user.id}});
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
  
        let mlogsActivityEmbed = new Discord.MessageEmbed()
        .setAuthor(thestaff.user.tag + ` | ModStats`, thestaff.user.displayAvatarURL({dynamic: true}))
        .setDescription(`Moderation statistics of \`${thestaff.user.tag}\``)
        .setColor(thestaff.displayHexColor)
        .addField("Total", total)
        .addField("Past 24H", pastday, true)
        .addField("Past Week", pastweek, true)
        .addField("Past Month", pastmonth, true)
        .setFooter(`ID: ${thestaff.user.id}`)
        .setTimestamp();
  
        message.channel.send(mlogsActivityEmbed);

    }else{

        const total = await MLogs.count({where: {staff_id: message.author.id}});
        const allmlogs = await MLogs.findAll({where: {staff_id: message.author.id}});
        let pastday = 0;
        let pastmonth = 0;
        let pastweek = 0;
  
        allmlogs.forEach(log => {
          let d1 = new Date();
          let d2 = new Date(log.createdAt);
  
          if(d2.getTime() >= d1.getTime() - 86400000) pastday++;
          if(d2.getTime() >= d1.getTime() - 604800000) pastweek++;
          if(d2.getTime() >= d1.getTime() - 2592000000) pastmonth++;
        })
  
        let mlogsActivityEmbed = new Discord.MessageEmbed()
        .setAuthor(message.author.tag + ` | ModStats`, message.author.displayAvatarURL({dynamic: true}))
        .setDescription(`Moderation statistics of \`${message.author.tag}\``)
        .setColor(message.member.displayHexColor)
        .addField("Total", total)
        .addField("Past 24H", pastday, true)
        .addField("Past Week", pastweek, true)
        .addField("Past Month", pastmonth, true)
        .setFooter(`ID: ${message.author.id}`)
        .setTimestamp();
  
        message.channel.send(mlogsActivityEmbed);

    };

}

    }};*/