const Discord = require("discord.js")
// const translate = require("translate-google")
const config1 = require('../../config.js')

module.exports = {
name: "forcedivorce",
aliases:['forcebreakup'],
description: "divorce your current spouse",
utilisation: `{prefix}forcedivorce`,
category: "Love",
module: 'love',
async execute(client, message, args) {
    const db1 = require("quick.db")
        db1.add(`commands_used`, 1)
    if(message.author.id !== '901215534966792232') return message.inlineReply('Sorry, only Tim (the bot owner) can use this!')
    let person = message.mentions.members.first() || message.guild.members.cache.get(args[0])

    let spouse1;
  
    await db.promise().query('SELECT * FROM marriage WHERE user_id = ?', [person.id]).then(result => {
      spouse1 = result[0][0]
    
    })
    
    if(!spouse1) {
    
      db.query(`INSERT INTO marriage (user_id) VALUES(?)`, [person.id]);
    /*console.log(`${message.author.username} has been added to the anti raid users database.`)*/
    return message.inlineReply('Dumbass.')
    }

    const exists = spouse1.spouse;
   if(exists === '0') return message.inlineReply(`${person.user.username} is not currently married to anybody.`)
    
        if (exists !== '0') {
            const embed = new Discord.MessageEmbed()
            .setAuthor('Divorce', message.author.displayAvatarURL())
             .setDescription('`' + message.author.tag + '`' + ' you are attempting to force divorce <@' + person.id + '> and <@' + spouse1.spouse + '>... <@' + message.author.id + '>, Check your DMs!')
             .setColor(0x2C2F33)
             message.channel.send(embed)
             
             
      const embed1 = new Discord.MessageEmbed()
      .setAuthor('Divorce', message.author.displayAvatarURL())
      .setDescription('<@' + message.author.id + '>, you are attempting to force divorce <@' + person.id + '> and <@' + spouse1.spouse + '>. Are you sure?') 
      .setColor(0x2C2F33)
      
             message.author.send(embed1).then(async react => {
              react.react('745865662769135646')
              react.react('745865688635277403')
              const select = react.createReactionCollector((reaction, user) =>
              reaction.emoji.id === "745865662769135646" || "745865688635277403" &&
              user.id === message.author.id,
            {          
               time: 15000,
               errors: ['time']
      });
      const author1 = message.author.id
      select.on("collect", async (reaction, user) => {
          if(user.id === client.user.id) return;
          if(reaction.emoji.id === "745865662769135646"){
        
            await select.stop()
    
           
    const divorced = new Discord.MessageEmbed()
    .setAuthor('Divorced', message.author.displayAvatarURL())
    .setDescription('Congrats? You have force divorced <@' + person.id + '> and <@' + spouse1.spouse + '>')
    .setColor(0x2C2F33)
    
    const divorced1 = new Discord.MessageEmbed()
    .setAuthor('Divorced', message.author.displayAvatarURL())
    .setDescription('Congrats? <@' + message.author.id + '> has force divorced <@' + person.id + '> and <@' + spouse1.spouse + '>')
    .setColor(0x2C2F33)
    
    react.edit(divorced)
    message.channel.send(divorced1)
    db.query(`UPDATE marriage set spouse = ? WHERE user_id = ?`, ['0', person.id]);
    db.query(`UPDATE marriage set spouse = ? WHERE user_id = ?`, ['0', spouse1.spouse]);
      
      
        }
    
    
    
        if(reaction.emoji.id === "745865688635277403"){
            
            await select.stop()
    const notdivorced = new Discord.MessageEmbed()
    .setAuthor('Cancelled', message.author.displayAvatarURL())
    .setDescription('You have burned the divorce papers')
    .setColor(0x2C2F33)
    
    
    
    const not1divorced = new Discord.MessageEmbed()
    .setAuthor('Cancelled', message.author.displayAvatarURL())
    .setDescription('<@' + message.author.id + '> burned the divorce papers..') 
    .setColor(0x2C2F33)
    
    react.edit(notdivorced)
    message.channel.send(not1divorced)
    
        }
    
        
          
            
       
         } ) 
        })
            .catch(select => {
                return message.channel.send(`Timeout.`)
       
       })

}}};