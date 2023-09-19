module.exports = {
    name: 'userinfo',
    aliases: ['ui', 'whois'],
    category: 'Users',
    utilisation: '{prefix}userinfo [ping user]',
module: 'utility',
    execute(client, message) {
        const db1 = require("quick.db")
        db1.add(`commands_used`, 1)
        
    const prefix = "$"
    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    let command = args.shift().toLocaleLowerCase();
    const personTagged = message.mentions.members.first()
    const fieldArgs = message.content.slice("$strike".length);
    const Discord = require('discord.js');
    const moment = require('moment');
    

        let userArray = message.content.split(" ");
        let userArgs = userArray.slice(1);
        let member = message.mentions.members.first() || message.guild.members.cache.get(userArgs[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === userArgs.slice(0).join(" ") || x.user.username === userArgs[0]) || message.member;
     
        if (member.presence.status === 'dnd') member.presence.status = 'Do Not Disturb';
        if (member.presence.status === 'online') member.presence.status = 'Online';
        if (member.presence.status === 'idle') member.presence.status = 'Idle';
        if (member.presence.status === 'offline') member.presence.status = 'offline';
    
        let x = Date.now() - member.createdAt;
        let y = Date.now() - message.guild.members.cache.get(member.id).joinedAt;
        const joined = Math.floor(y / 86400000);
    
        const joineddate = moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss");
        let status = member.presence.status;
    
        
    

        if(`<@&${member._roles.join('> <@&')}>`.length >= 1024){
            const user1Embed = new Discord.MessageEmbed()
        .setAuthor(member.user.tag, member.user.displayAvatarURL())
        .setTimestamp()
        .setDescription('<@' + member.id + '> | **ID:** ' + member.id)
        .setFooter(`Requested by ${message.author.tag}`)
        .setColor(0xADC5FF)
        .setThumbnail(member.user.displayAvatarURL({dynamic: true}))
      
        .addField('Joined', `${joineddate}`, true)
        .addField("Registered", ` ${moment.utc(member.user.createdAt).format("dddd, MMMM Do YYYY")}`, true) 
        
        .addField('Roles', `Too many roles to show.`)
        .addField("Status", status, true)
        message.inlineReply(user1Embed)
        } else 

        message.inlineReply(new Discord.MessageEmbed()
        .setAuthor(member.user.tag, member.user.displayAvatarURL())
        .setTimestamp()
        .setDescription('<@' + member.id + '> | **ID:** ' + member.id)
        .setFooter(`Requested by ${message.author.tag}`)
        .setColor(0xADC5FF)
        .setThumbnail(member.user.displayAvatarURL({dynamic: true}))
      
        .addField('Joined', `${joineddate}`, true)
        .addField("Registered", ` ${moment.utc(member.user.createdAt).format("dddd, MMMM Do YYYY")}`, true) 
        
        .addField('Roles', `<@&${member._roles.join('> <@&')}>`)
        .addField("Status", status, true)
        )
    
  }};