/*const { coulombDependencies } = require('mathjs');

module.exports = {
    name: 'purg11e',
    aliases: ['pur'],
    category: 'Moderation',
    utilisation: '{prefix}purge [amount]',

    async execute(client, message, args) {
      if(message.author.id !== '285528911545106432') return;
      const db1 = require("quick.db")
        db1.add(`commands_used`, 1)
        const Discord = require('discord.js') 
        const db = require('quick.db')
        const { PREFIX } = require('../config');
            let prefix;
                let fetched = await db.fetch(`prefix_${message.guild.id}`);
        
                if (fetched === null) {
                    prefix = PREFIX
                } else {
                    prefix = fetched
                }
        const personTagged = message.mentions.users.first()
        function check(msg, arr) {
          return arr.some(op => op.toLowerCase() === msg.toLowerCase());
        }
    const cmd = args[0];
   
    if (!message.content.startsWith(prefix) || message.author.bot) return;
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return
    if(cmd.toLowerCase() === 'bots'){
      const Channel = message.channel;
        const Messages = await Channel.messages.fetch({limit: 100});

        Messages.forEach(msg => { // Checking if the message author is a bot.
            if (msg.author.bot) msg.delete().then(message.delete())
            // This will delete messages from any bot.
        });
    
      return 
    };


    if(message.mentions.users.first()) {
      const amount = args[1]
      if(!amount) {
        const embed = new Discord.MessageEmbed()
         .setDescription(`❌ | Invalid argument.
         Must send a valid number.`)
         .setColor(0xFA2A2A)
         message.channel.send(embed) 
         return 
       }
    
      if (!amount && !personTagged) {
        const embed5 = new Discord.MessageEmbed()
        .setDescription(`❌ | Invalid argument.
        Must specify a user and amount, or just an amount.`)
        .setColor(0xFA2A2A)
        message.channel.send(embed5) 
        return 
      }

    
      if(amount > 100) {
      const embed1 = new Discord.MessageEmbed()
      .setDescription(`❌ | Invalid argument.
      Must be a valid number from 1-100.`)
      .setColor(0xFA2A2A)
      message.channel.send(embed1) 
      return 
      }
    
      if(amount < 1) {
      const embed2 = new Discord.MessageEmbed()
    .setDescription(`❌ | Invalid argument.
    Must be a valid number from 1-100.`)
    .setColor(0xFA2A2A)
    message.channel.send(embed2)
    return 
      }
      message.channel.messages.fetch({limit: 100}).then(messages => {
        if(personTagged) {
        const filterBy = personTagged ? personTagged.id : client.user.id;
        messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
      message.channel.bulkDelete(messages).then(message.delete())
      }})
    } else {
      const amount = args[0]
      if(!amount) {
        const embed = new Discord.MessageEmbed()
         .setDescription(`❌ | Invalid argument.
         Must send a valid number.`)
         .setColor(0xFA2A2A)
         message.channel.send(embed) 
         return 
       }
    
      if(amount > 100) {
      const embed1 = new Discord.MessageEmbed()
      .setDescription(`❌ | Invalid argument.
      Must be a valid number from 1-100.`)
      .setColor(0xFA2A2A)
      message.channel.send(embed1) 
      return 
      }
    
      if(amount < 1) {
      const embed2 = new Discord.MessageEmbed()
    .setDescription(`❌ | Invalid argument.
    Must be a valid number from 1-100.`)
    .setColor(0xFA2A2A)
    message.channel.send(embed2)
    return 
      }
      message.channel.messages.fetch({limit: amount}).then(messages => {
        message.channel.bulkDelete(messages)
      })
    }
    
    
    
    
  
    
    
    }};*/