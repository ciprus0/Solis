
module.exports = {
    name: 'say',
    aliases: [],
    category: 'Randomstuff',
    utilisation: '{prefix}say [context]',

    async execute(client, message, args) {
        const db1 = require("quick.db")
        db1.add(`commands_used`, 1)
        const Discord = require('discord.js')
   
   

 
    if (message.member.hasPermission("MANAGE_MESSAGES") || message.member.roles.cache.has('739443936770129942')){
      
       
        let errorEmbed = new Discord.MessageEmbed()
        .setColor("#6b0202")
        .setDescription(`❌ Include a message to send!`);
    
        if(message.content.includes('<@&')){
            return message.inlineReply('Nice try, you cant ping a role.')
            }

    
        if(message.mentions.channels.first()){
            const sayMessage = args.slice(1).join(" ");
            let thechannel = message.mentions.channels.first();
            if(args[0] !== `<#${thechannel.id}>`) return message.channel.send(sayMessage);
            if(!sayMessage) return message.reply(errorEmbed);
            message.delete();
            return thechannel.send(sayMessage);
        }
        const { Util } = require('discord.js')

        const sayMessage = args.join(" ")
        if(!sayMessage) return message.reply(errorEmbed);
        message.delete();
       
        message.channel.send(sayMessage);
    
  }
  }};