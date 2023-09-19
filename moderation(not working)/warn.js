/*const Discord = require("discord.js");
const Sequelize = require("sequelize");
const fs = require("fs");

const SourceBin = require('sourcebin-wrapper');

const db = require("../database/db");
module.exports = {
    name: 'warn',
    aliases: ['None'],
    category: 'Moderation',
    utilisation: '{prefix}warn [user] [reason]',

    async execute(client, message, args, prefix) {
        if(message.author.id !== '285528911545106432') return;
        const db1 = require("quick.db")
        db1.add(`commands_used`, 1)
if(db1.get(`staffrole_id_${message.guild.id}`) == null || db1.get(`staffrole_id_${message.guild.id}`) == 'false') return message.inlineReply(`You have not set up your staff role/s for this server! Please use \`${prefix}setupmoderation\`!`)
        if(message.member.roles.cache.some(r => db1.get(`staffrole_id_${message.guild.id}`).includes(r.id))){
        if(db1.get(`modlogs_channel_${message.guild.id}`) == null || db1.get(`modlogs_channel_${message.guild.id}`) == 'false') return message.inlineReply(`You have not set up your moderation logs for this server! Please use \`${prefix}setupmoderation\`!`)
    
       
    
  let $casenumber;
   db.promise().query(`SELECT MAX(casenumber) FROM moderation WHERE guild_id = ?`, [message.guild.id]).then(result => {
       $casenumber = result[0][0]
       console.log($casenumber)
   })
            
        
         
        
    const caseNumberInt = parseInt($casenumber)
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
    
        if(wUser.roles.cache.some(r => db1.get(`staffrole_id_${message.guild.id}`).includes(r.id))) return message.reply(error9Embed);
    
     
    
        let warnEmbed = new Discord.MessageEmbed()
        .setAuthor("Case " + $casenumber+1 + " | Warn", wUser.user.displayAvatarURL({dynamic: true}))
        .setDescription(`\`${wUser.user.tag}\` has been warned.`)
        .setColor("#ffe552")
        .addField("Warned User", `${wUser} (${wUser.user.id})`, true)
        .addField("Responsible Staff", `${message.member} (${message.author.id})`, true)
        .addField("Reason", wReason, true)
        .setTimestamp();
    
        let success2Embed = new Discord.MessageEmbed()
        .setColor("#39fa53")
        .setDescription(`✅ **\`${wUser.user.tag}\` has been warned.**`);
        caseNumberInt + 1
        message.delete();
        message.channel.send(success2Embed);
        wUser.send(`You have been warned in **${message.guild.name}** | ${wReason}`);
    
        db.query(`INSERT INTO moderation (guild_id,casenumber,guild_name,modtype,user_id,username,reason,staff_id,staffusername,message_id) VALUES(?,?,?,?,?,?,?,?,?,?)`, [message.guild.id, caseNumberInt, message.guild.name, "Warn", wUser.id, wUser.user.username, wReason, message.author.id, message.author.username, "e"]);

       
    
        message.guild.channels.cache.find(channel => channel.id == db1.get(`modlogs_channel_${message.guild.id}`)).send(warnEmbed).then(msg => {
           db.query(`UPDATE moderation set message_id = ? WHERE casenumber = ? AND guild_id = ?`, [msg.id, $casenumber+=1, message.guild.id]);
        });
    
        message.channel.messages.fetch({limit: 100}).then(messages => {
            let membermsgs = messages.filter(messages => messages.author.id == wUser.id && !messages.pinned).first(20);
            if (membermsgs.length > 0 && !["dm", "pfp", "avatar", "username", "profile picture", " vc", " vc ", "voice channel"].some(rV => wReason.toLowerCase().includes(rV))) {
                let msgsArray = [];
                membermsgs.forEach(msg => msgsArray.push(msg.content));
                SourceBin.newBin(`Case ${casenumber2} - ${wUser.tag}/${wUser.id}\nReason: ${wReason}\n\nLAST MESSAGES:\n\n${msgsArray.join(`\n`)}`, 'txt', 'wrapper', {
                    title: "",
                    description: ""
                }).then(resp => message.guild.channels.cache.find(channel => channel.id == db1.get(`modlogs_channel_${message.guild.id}`)).send(`**Case ${casenumber1}** - ` + resp.shortened));
            };
        });
    
    
    }
    }};*/