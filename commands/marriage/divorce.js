const Discord = require("discord.js")
// const translate = require("translate-google")
const config1 = require('../../config.js')

module.exports = {
name: "divorce",
aliases:['breakup'],
description: "divorce your current spouse",
utilisation: `{prefix}divorce`,
category: "Love",
module: 'love',
async execute(client, message, args, prefix) {
 
  const db1 = require("quick.db")
        db1.add(`commands_used`, 1)

        let spouse1;
  
        await db.promise().query('SELECT * FROM marriage WHERE user_id = ?', [message.author.id]).then(result => {
          spouse1 = result[0][0]
        
        })
        
        if(!spouse1) {
        
          db.query(`INSERT INTO marriage (user_id) VALUES(?)`, [message.author.id]);
        /*console.log(`${message.author.username} has been added to the anti raid users database.`)*/
        return message.inlineReply('Sorry, you were not in the database. So clearly you were not married. Now you are in the database.')
        }


    const exists = spouse1.spouse;
    if (exists === '0') {
        return message.inlineReply(`You aren't event married.. use ${prefix}marry [user] to marry somebody.`)}



        if (exists !== '0') {

          
            const embed = new Discord.MessageEmbed()
            .setAuthor('Divorce', message.author.displayAvatarURL())
             .setDescription('`' + message.author.tag + '`' + ' is attempting to divorce <@' + spouse1.spouse + '>... <@' + message.author.id + '>, Check your DMs!')
             .setColor(0x2C2F33)
             message.channel.send(embed)
             
             
      const embed1 = new Discord.MessageEmbed()
      .setAuthor('Divorce', message.author.displayAvatarURL())
      .setDescription('<@' + message.author.id + '>, you are attempting to divorce <@' + spouse1.spouse + '>. Are you sure?') 
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
    .setDescription('Congrats? You have divorced <@' + spouse1.spouse + '>')
    .setColor(0x2C2F33)
    
    const divorced1 = new Discord.MessageEmbed()
    .setAuthor('Divorced', message.author.displayAvatarURL())
    .setDescription('Congrats? <@' + message.author.id + '> has divorced <@' + spouse1.spouse + '>')
    .setColor(0x2C2F33)
   
    react.edit(divorced)
    message.channel.send(divorced1)
    db.query(`UPDATE marriage set spouse = ? WHERE user_id = ?`, ['0', message.author.id]);
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
                return message.inlineReply(`Timed out, or your DMs are closed, so I am not able to send you a DM.`)
       
       })

}}};