const Discord = require("discord.js")
// const translate = require("translate-google")
const config1 = require('../../config.js')
const db = require('quick.db')
module.exports = {
name: "setupmoderation",
aliases: ['setmoderation', 'configmoderation'],
description: "set ur guild  join/leave channels",
utilisation: `{prefix}setupmoderation`,
category: "Moderation1",

async execute(client, message, args, member) {
    db.add(`commands_used`, 1)
    if(!message.member.hasPermission('ADMINISTRATOR')) {
        return
    }

    let embed = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setDescription(`Please mention the channel for where you want Moderation Logs to be sent.\n\n Say \`skip\` to skip this step.`)
    .setColor(`2C2F33`)
    .setFooter( message.guild.name , client.user.displayAvatarURL())
    .setTimestamp()
    message.channel.send(embed).then(async embed => {


        let joina = m => m.author.id === message.author.id;
        let join = new Discord.MessageCollector(message.channel, joina, { max: 1 });
         
        join.on('collect', async msg => {
            let channel = msg.mentions.channels.first() || message.guild.channels.cache.get(msg.content);
          if(msg.content.toLowerCase() === "skip") {
            msg.channel.send(`Okay, I have skipped this.`)
            await embed.delete()
            await join.stop()
         
        } else 
      
          
          if(!channel) { msg.inlineReply(`Please mention the channel that you want your mod-logs to be sent to! **Restart this process**`) 
        
        return;
        } else if (channel) {
        await embed.delete()
        await join.stop()
    await db.set(`modlogs_channel_${message.guild.id}`, channel.id)
        }
    let embed2 = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setDescription(`Please mention the channel for where you want Role Logs to be sent.\n\n Say \`skip\` to skip this step.`)
    .setColor(`2C2F33`)
    .setFooter( message.guild.name , client.user.displayAvatarURL())
    .setTimestamp()
        message.inlineReply(embed2).then(async embed2 => {


            let joina1 = m => m.author.id === message.author.id;
            let join1 = new Discord.MessageCollector(message.channel, joina1, { max: 1 });
             
            join1.on('collect', async msg => {
                let channel = msg.mentions.channels.first() || message.guild.channels.cache.get(msg.content);
                if(msg.content.toLowerCase() === "skip") {
                    msg.channel.send(`Okay, I have skipped this.`)
                    await embed2.delete()
                    await join1.stop()
                 
                } else 
           
              
              if(!channel) { msg.inlineReply(`Please mention the channel that you want your role-logs to be sent to! **Restart this process**`) 
            
            return;
            } else if (channel){
            await embed2.delete()
            await join1.stop()
        await db.set(`rolelogs_channel_${message.guild.id}`, channel.id) }
        let embed3 = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setDescription(`Please mention the channel for where you want Message Logs to be sent.\n\n Say \`skip\` to skip this step.`)
    .setColor(`2C2F33`)
    .setFooter( message.guild.name , client.user.displayAvatarURL())
    .setTimestamp()
            message.inlineReply(embed3).then(async embed3 => {
    
    
                let joina1 = m => m.author.id === message.author.id;
                let join2 = new Discord.MessageCollector(message.channel, joina1, { max: 1 });
                 
                join2.on('collect', async msg => {
                    let channel = msg.mentions.channels.first() || message.guild.channels.cache.get(msg.content);
                    if(msg.content.toLowerCase() === "skip") {
                        msg.channel.send(`Okay, I have skipped this.`)
                        await embed3.delete()
                        await join2.stop()
                     
                    } else 
               
                  
                  if(!channel) { msg.inlineReply(`Please mention the channel that you want your message-logs to be sent to! **Restart this process**`) 
                
                return;
                } else if (channel){
                await embed3.delete()
                await join2.stop()
            await db.set(`messagelogs_channel_${message.guild.id}`, channel.id) }
            let embed4 = new Discord.MessageEmbed()
            .setAuthor(message.author.username, message.author.displayAvatarURL())
            .setDescription(`Please mention the channel for where you want Member Logs to be sent.\n\n Say \`skip\` to skip this step.`)
            .setColor(`2C2F33`)
            .setFooter( message.guild.name , client.user.displayAvatarURL())
            .setTimestamp()
                message.inlineReply(embed4).then(async embed4 => {
        
        
                    let joina1 = m => m.author.id === message.author.id;
                    let join3 = new Discord.MessageCollector(message.channel, joina1, { max: 1 });
                     
                    join3.on('collect', async msg => {
                        let channel = msg.mentions.channels.first() || message.guild.channels.cache.get(msg.content);
                        if(msg.content.toLowerCase() === "skip") {
                            msg.channel.send(`Okay, I have skipped this.`)
                            await embed4.delete()
                            await join3.stop()
                         
                        } else 
                   
                      
                      if(!channel) { msg.inlineReply(`Please mention the channel that you want your member-logs to be sent to! **Restart this process**`) 
                    
                    return;
                    } else if (channel){
                    await embed4.delete()
                    await join3.stop()
                await db.set(`memberlogs_channel_${message.guild.id}`, channel.id) }


                let embed5 = new Discord.MessageEmbed()
                .setAuthor(message.author.username, message.author.displayAvatarURL())
                .setDescription(`Please mention the channel for where you want Voice Chat Logs to be sent.\n\n Say \`skip\` to skip this step.`)
                .setColor(`2C2F33`)
                .setFooter( message.guild.name , client.user.displayAvatarURL())
                .setTimestamp()
                message.inlineReply(embed5).then(async embed5 => {
        
        
                    let joina1 = m => m.author.id === message.author.id;
                    let join4 = new Discord.MessageCollector(message.channel, joina1, { max: 1 });
                     
                    join4.on('collect', async msg => {
                        let channel = msg.mentions.channels.first() || message.guild.channels.cache.get(msg.content);
                        if(msg.content.toLowerCase() === "skip") {
                            msg.channel.send(`Okay, I have skipped this.`)
                            await embed5.delete()
                            await join4.stop()
                         
                        } else 
                   
                      
                      if(!channel) { msg.inlineReply(`Please mention the channel that you want your voice chat-logs to be sent to! **Restart this process**`) 
                    
                    return;
                    } else if (channel){
                    await embed5.delete()
                    await join4.stop()
                await db.set(`vclogs_channel_${message.guild.id}`, channel.id) }

                let embed9 = new Discord.MessageEmbed()
                .setAuthor(message.author.username, message.author.displayAvatarURL())
                .setDescription(`Please mention the channel for where you want (Server) Channel Logs to be sent.\n\n Say \`skip\` to skip this step.`)
                .setColor(`2C2F33`)
                .setFooter( message.guild.name , client.user.displayAvatarURL())
                .setTimestamp()
                message.inlineReply(embed9).then(async embed9 => {
        
        
                    let joina1 = m => m.author.id === message.author.id;
                    let join8 = new Discord.MessageCollector(message.channel, joina1, { max: 1 });
                     
                    join8.on('collect', async msg => {
                        let channel = msg.mentions.channels.first() || message.guild.channels.cache.get(msg.content);
                        if(msg.content.toLowerCase() === "skip") {
                            msg.channel.send(`Okay, I have skipped this.`)
                            await embed9.delete()
                            await join8.stop()
                         
                        } else 
                   
                      
                      if(!channel) { msg.inlineReply(`Please mention the channel that you want your channel logs to be sent to! **Restart this process**`) 
                    
                    return;
                    } else if (channel){
                    await embed9.delete()
                    await join8.stop()
                await db.set(`channellogs_channel_${message.guild.id}`, channel.id) }

                let embed11 = new Discord.MessageEmbed()
                .setAuthor(message.author.username, message.author.displayAvatarURL())
                .setDescription(`Please mention the channel for where you want Message Reaction Logs to be sent.\n\n Say \`skip\` to skip this step.`)
                .setColor(`2C2F33`)
                .setFooter( message.guild.name , client.user.displayAvatarURL())
                .setTimestamp()
                message.inlineReply(embed11).then(async embed11 => {
        
        
                    let joina1 = m => m.author.id === message.author.id;
                    let join14 = new Discord.MessageCollector(message.channel, joina1, { max: 1 });
                     
                    join14.on('collect', async msg => {
                        let channel = msg.mentions.channels.first() || message.guild.channels.cache.get(msg.content);
                        if(msg.content.toLowerCase() === "skip") {
                            msg.channel.send(`Okay, I have skipped this.`)
                            await embed11.delete()
                            await join14.stop()
                         
                        } else 
                   
                      
                      if(!channel) { msg.inlineReply(`Please mention the channel that you want your message reaction logs to be sent to! **Restart this process**`) 
                    
                    return;
                    } else if (channel){
                    await embed11.delete()
                    await join14.stop()
                await db.set(`reactionlogs_channel_${message.guild.id}`, channel.id) }



                let embed6 = new Discord.MessageEmbed()
                .setAuthor(message.author.username, message.author.displayAvatarURL())
                .setDescription(`Please say the ID of the role that you want to have Staff permissions.\n\n Say \`skip\` to skip this step.`)
                .setColor(`2C2F33`)
                .setFooter( message.guild.name , client.user.displayAvatarURL())
                .setTimestamp()
                message.inlineReply(embed6).then(async embed6 => {
                    const roleName = args.join(' ').toLowerCase()
                    const { guild } = message
                
                    const role = guild.roles.cache.find((role) => {
                      return role.name.toLowerCase().startsWith(roleName)
                    })
        
                    let joina1 = m => m.author.id === message.author.id;
                    let join5 = new Discord.MessageCollector(message.channel, joina1, { max: 1 });
                     
                    join5.on('collect', async msg => {
                        
                        if(msg.content.toLowerCase() === "skip") {
                            msg.channel.send(`Okay, I have skipped this.`)
                            await embed6.delete()
                            await join5.stop()
                         
                        } else 
                   
                      
                      if(!msg.guild.roles.cache.get(msg.content)) { msg.inlineReply(`Please say ID of the role! Restart this process. **EX:** \`775197717290156072\` \n\nhttps://support.discord.com/hc/en-us/community/posts/360048094171-Get-Role-ID`) 
                    
                    return;
                    } else if (msg.guild.roles.cache.get(msg.content)){
                    await embed6.delete()
                    await join5.stop()
                await db.set(`staffrole_id_${message.guild.id}`, msg.content) }



                let embed7 = new Discord.MessageEmbed()
                .setAuthor(message.author.username, message.author.displayAvatarURL())
                .setDescription(`Please say the role ID of the role you want me to give to people when they are muted.\n\n Say \`skip\` to skip this step.`)
                .setColor(`2C2F33`)
                .setFooter( message.guild.name , client.user.displayAvatarURL())
                .setTimestamp()
                    message.inlineReply(embed7).then(async embed7 => {
                        const roleName = args.join(' ').toLowerCase()
                        const { guild } = message
                    
                        const role = guild.roles.cache.find((role) => {
                          return role.name.toLowerCase().startsWith(roleName)
                        })
            
                        let joina1 = m => m.author.id === message.author.id;
                        let join6 = new Discord.MessageCollector(message.channel, joina1, { max: 1 });
                         
                        join6.on('collect', async msg => {
                            
                            if(msg.content.toLowerCase() === "skip") {
                                msg.channel.send(`Okay, I have skipped this.`)
                                await embed7.delete()
                                await join6.stop()
                             
                            } else 
                       
                          
                          if(!msg.guild.roles.cache.get(msg.content)) { msg.inlineReply(`Please say the ID of the role! Restart this process. **EX:** \`775197717290156072\` \n\n https://support.discord.com/hc/en-us/community/posts/360048094171-Get-Role-ID`) 
                        
                        return;
                        } else if (msg.guild.roles.cache.get(msg.content)){
                            const embed10 = new Discord.MessageEmbed()
                            .setDescription(`Okay, the Muted role is now <@&${msg.content}>`)
                            message.inlineReply(embed10)
                        await embed7.delete()
                        await join6.stop()
                    await db.set(`muterole_id_${message.guild.id}`, msg.content) }
        })})
        })})
        })})
        })})       
        })})
        })})
        })})
        })})
    })})


}};