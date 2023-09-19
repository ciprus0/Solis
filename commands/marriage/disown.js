const Discord = require("discord.js")
// const translate = require("translate-google")
const config1 = require('../../config.js')

module.exports = {
name: "disown",
aliases:['unadopt', 'disavow', 'throwaway', 'getmilk', 'abort'],
description: "disown your child",
utilisation: `{prefix}disown`,
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
        return message.inlineReply('Sorry, you were not in the database. So clearly you had no children to disown. Now you are in the database.')
        }


const children = spouse1.kidamount

if(children === '3'){
    const embed1 = new Discord.MessageEmbed()
.setAuthor('Disownment', message.author.displayAvatarURL())
.setDescription(`<@${message.author.id}>, you have three children. Which do you want to disown? React with 1, 2 or 3.\n<:emoji_281:958143851569238126>  <@${spouse1.kid1}>\n<:emoji_281:958143868275146812> <@${spouse1.kid2}>\n<:emoji_282:958143883001356310> <@${spouse1.kid3}>`) 
.setColor(0x2C2F33)
    message.author.send(embed1).then(async react => {
        react.react('958143851569238126')
        react.react('958143868275146812')
        react.react('958143883001356310')
        const select = react.createReactionCollector((reaction, user) =>
        reaction.emoji.id === "958143851569238126" || "958143868275146812" || "958143883001356310" &&
        user.id === message.author.id,
      {          
         time: 15000,
         errors: ['time']
});
const author1 = message.author.id
select.on("collect", async (reaction, user) => {
    if(user.id === client.user.id) return;




    if(reaction.emoji.id === "958143851569238126"){
        
        await select.stop()

       
const married = new Discord.MessageEmbed()
.setAuthor('Disowned', message.author.displayAvatarURL())
.setDescription('You have disowned <@' + spouse1.kid1 + '>. You were a bad parent anyways.')
.setColor(0x2C2F33)

const married1 = new Discord.MessageEmbed()
.setAuthor('Disowned', message.author.displayAvatarURL())
.setDescription(`<@${message.author.id}> has disowned <@${spouse1.kid1}>. Pray for the kid`)
.setColor(0x2C2F33)

react.edit(married)
message.channel.send(married1)
db.query(`UPDATE marriage set kid1 = ? WHERE user_id = ?`, ['0', message.author.id]);
db.query(`UPDATE marriage set kidamount = kidamount-1 WHERE user_id = ?`, [message.author.id]);
  db.query(`UPDATE marriage set parent = ? WHERE user_id = ?`, ['0', spouse1.kid1]);
  
    }



    if(reaction.emoji.id === "958143868275146812"){
        
        await select.stop()

       
const married = new Discord.MessageEmbed()
.setAuthor('Disowned', message.author.displayAvatarURL())
.setDescription('You have disowned <@' + spouse1.kid2 + '>. You were a bad parent anyways.')
.setColor(0x2C2F33)

const married1 = new Discord.MessageEmbed()
.setAuthor('Disowned', message.author.displayAvatarURL())
.setDescription(`<@${message.author.id}> has disowned <@${spouse1.kid2}>. Pray for the kid`)
.setColor(0x2C2F33)

react.edit(married)
message.channel.send(married1)
db.query(`UPDATE marriage set kid2 = ? WHERE user_id = ?`, ['0', message.author.id]);
db.query(`UPDATE marriage set kidamount = kidamount-1 WHERE user_id = ?`, [message.author.id]);
  db.query(`UPDATE marriage set parent = ? WHERE user_id = ?`, ['0', spouse1.kid2]);
  
    }

    if(reaction.emoji.id === "958143883001356310"){
        
        await select.stop()

       
const married = new Discord.MessageEmbed()
.setAuthor('Disowned', message.author.displayAvatarURL())
.setDescription('You have disowned <@' + spouse1.kid3 + '>. You were a bad parent anyways.')
.setColor(0x2C2F33)

const married1 = new Discord.MessageEmbed()
.setAuthor('Disowned', message.author.displayAvatarURL())
.setDescription(`<@${message.author.id}> has disowned <@${spouse1.kid3}>. Pray for the kid`)
.setColor(0x2C2F33)

react.edit(married)
message.channel.send(married1)
db.query(`UPDATE marriage set kid3 = ? WHERE user_id = ?`, ['0', message.author.id]);
db.query(`UPDATE marriage set kidamount = kidamount-1 WHERE user_id = ?`, [message.author.id]);
  db.query(`UPDATE marriage set parent = ? WHERE user_id = ?`, ['0', spouse1.kid3]);
  
    }



    
      
        
   
     } ) 
    })
        .catch(select => {
            return message.channel.send(`Timed out, or this user has DMs closed, so I am not able to send a DM to them.`)
   
   })
  

} else if (children === '2'){
    if(spouse1.kid1 === '0'){
        const embed = new Discord.MessageEmbed()
        .setAuthor('Disownment', message.author.displayAvatarURL())
         .setDescription('`' + message.author.tag + '`' + ' is thinking about disowning one of their children. ' + `<@${message.author.id}>` + ', Check your DMs!')
         .setColor(0x2C2F33)
         message.channel.send(embed)
        const embed1 = new Discord.MessageEmbed()
        .setAuthor('Disownment', message.author.displayAvatarURL())
        .setDescription(`<@${message.author.id}>, you have two children. Which do you want to disown? React with 1 or 2.\n<:emoji_281:958143851569238126> <@${spouse1.kid2}>\n<:emoji_281:958143868275146812> <@${spouse1.kid3}>`) 
        .setColor(0x2C2F33)
            message.author.send(embed1).then(async react => {
                react.react('958143851569238126')
                react.react('958143868275146812')
                
                const select = react.createReactionCollector((reaction, user) =>
                reaction.emoji.id === "958143851569238126" || "958143868275146812" &&
                user.id === message.author.id,
              {          
                 time: 15000,
                 errors: ['time']
        });
        const author1 = message.author.id
        select.on("collect", async (reaction, user) => {
            if(user.id === client.user.id) return;
        
        
        
        
            if(reaction.emoji.id === "958143851569238126"){
                
                await select.stop()
        
               
        const married = new Discord.MessageEmbed()
        .setAuthor('Disowned', message.author.displayAvatarURL())
        .setDescription('You have disowned <@' + spouse1.kid2 + '>. You were a bad parent anyways.')
        .setColor(0x2C2F33)
        
        const married1 = new Discord.MessageEmbed()
        .setAuthor('Disowned', message.author.displayAvatarURL())
        .setDescription(`<@${message.author.id}> has disowned <@${spouse1.kid2}>. Pray for the kid`)
        .setColor(0x2C2F33)
        
        react.edit(married)
        message.channel.send(married1)
        db.query(`UPDATE marriage set kid2 = ? WHERE user_id = ?`, ['0', message.author.id]);
        db.query(`UPDATE marriage set kidamount = kidamount-1 WHERE user_id = ?`, [message.author.id]);
          db.query(`UPDATE marriage set parent = ? WHERE user_id = ?`, ['0', spouse1.kid2]);
          
            }
        
        
        
            if(reaction.emoji.id === "958143868275146812"){
                
                await select.stop()
        
               
        const married = new Discord.MessageEmbed()
        .setAuthor('Disowned', message.author.displayAvatarURL())
        .setDescription('You have disowned <@' + spouse1.kid3 + '>. You were a bad parent anyways.')
        .setColor(0x2C2F33)
        
        const married1 = new Discord.MessageEmbed()
        .setAuthor('Disowned', message.author.displayAvatarURL())
        .setDescription(`<@${message.author.id}> has disowned <@${spouse1.kid3}>. Pray for the kid`)
        .setColor(0x2C2F33)
        
        react.edit(married)
        message.channel.send(married1)
        db.query(`UPDATE marriage set kid3 = ? WHERE user_id = ?`, ['0', message.author.id]);
        db.query(`UPDATE marriage set kidamount = kidamount-1 WHERE user_id = ?`, [message.author.id]);
          db.query(`UPDATE marriage set parent = ? WHERE user_id = ?`, ['0', spouse1.kid3]);
          
            }
        
                
           
             } ) 
            })
                .catch(select => {
                    return message.channel.send(`Timed out, or this user has DMs closed, so I am not able to send a DM to them.`)
           
           })
    } else if(spouse1.kid2 === '0'){
        const embed = new Discord.MessageEmbed()
        .setAuthor('Disownment', message.author.displayAvatarURL())
         .setDescription('`' + message.author.tag + '`' + ' is thinking about disowning one of their children.' + ` <@${message.author.id}>` + ', Check your DMs!')
         .setColor(0x2C2F33)
         message.channel.send(embed)
        const embed1 = new Discord.MessageEmbed()
        .setAuthor('Disownment', message.author.displayAvatarURL())
        .setDescription(`<@${message.author.id}>, you have three children. Which do you want to disown? React with 1, 2 or 3.\n<:emoji_281:958143851569238126> <@${spouse1.kid1}>\n<:emoji_281:958143868275146812> <@${spouse1.kid3}>`) 
        .setColor(0x2C2F33)
            message.author.send(embed1).then(async react => {
                react.react('958143851569238126')
                react.react('958143868275146812')
                
                const select = react.createReactionCollector((reaction, user) =>
                reaction.emoji.id === "958143851569238126" || "958143868275146812" &&
                user.id === message.author.id,
              {          
                 time: 15000,
                 errors: ['time']
        });
        const author1 = message.author.id
        select.on("collect", async (reaction, user) => {
            if(user.id === client.user.id) return;
        
        
        
        
            if(reaction.emoji.id === "958143851569238126"){
                
                await select.stop()
        
               
        const married = new Discord.MessageEmbed()
        .setAuthor('Disowned', message.author.displayAvatarURL())
        .setDescription('You have disowned <@' + spouse1.kid1 + '>. You were a bad parent anyways.')
        .setColor(0x2C2F33)
        
        const married1 = new Discord.MessageEmbed()
        .setAuthor('Disowned', message.author.displayAvatarURL())
        .setDescription(`<@${message.author.id}> has disowned <@${spouse1.kid1}>. Pray for the kid`)
        .setColor(0x2C2F33)
        
        react.edit(married)
        message.channel.send(married1)
        db.query(`UPDATE marriage set kid1 = ? WHERE user_id = ?`, ['0', message.author.id]);
        db.query(`UPDATE marriage set kidamount = kidamount-1 WHERE user_id = ?`, [message.author.id]);
          db.query(`UPDATE marriage set parent = ? WHERE user_id = ?`, ['0', spouse1.kid1]);
          
            }
        
        
        
            if(reaction.emoji.id === "958143868275146812"){
                
                await select.stop()
        
               
        const married = new Discord.MessageEmbed()
        .setAuthor('Disowned', message.author.displayAvatarURL())
        .setDescription('You have disowned <@' + spouse1.kid3 + '>. You were a bad parent anyways.')
        .setColor(0x2C2F33)
        
        const married1 = new Discord.MessageEmbed()
        .setAuthor('Disowned', message.author.displayAvatarURL())
        .setDescription(`<@${message.author.id}> has disowned <@${spouse1.kid3}>. Pray for the kid`)
        .setColor(0x2C2F33)
        
        react.edit(married)
        message.channel.send(married1)
        db.query(`UPDATE marriage set kid3 = ? WHERE user_id = ?`, ['0', message.author.id]);
        db.query(`UPDATE marriage set kidamount = kidamount-1 WHERE user_id = ?`, [message.author.id]);
          db.query(`UPDATE marriage set parent = ? WHERE user_id = ?`, ['0', spouse1.kid3]);
          
            }  
           
             } ) 
            })
                .catch(select => {
                    return message.channel.send(`Timed out, or this user has DMs closed, so I am not able to send a DM to them.`)
           
           })
    } else if(spouse1.kid3 === '0'){
        const embed = new Discord.MessageEmbed()
        .setAuthor('Disownment', message.author.displayAvatarURL())
         .setDescription('`' + message.author.tag + '`' + ' is thinking about disowning one of their children.' + ` <@${message.author.id}>` + ', Check your DMs!')
         .setColor(0x2C2F33)
         message.channel.send(embed)
        const embed1 = new Discord.MessageEmbed()
        .setAuthor('Disownment', message.author.displayAvatarURL())
        .setDescription(`<@${message.author.id}>, you have three children. Which do you want to disown? React with 1, 2 or 3.\n<:emoji_281:958143851569238126> <@${spouse1.kid1}>\n<:emoji_281:958143868275146812:> <@${spouse1.kid2}>`) 
        .setColor(0x2C2F33)
            message.author.send(embed1).then(async react => {
                react.react('958143851569238126')
                react.react('958143868275146812')
                
                const select = react.createReactionCollector((reaction, user) =>
                reaction.emoji.id === "958143851569238126" || "958143868275146812" &&
                user.id === message.author.id,
              {          
                 time: 15000,
                 errors: ['time']
        });
        const author1 = message.author.id
        select.on("collect", async (reaction, user) => {
            if(user.id === client.user.id) return;
        
        
        
        
            if(reaction.emoji.id === "958143851569238126"){
                
                await select.stop()
        
               
        const married = new Discord.MessageEmbed()
        .setAuthor('Disowned', message.author.displayAvatarURL())
        .setDescription('You have disowned <@' + spouse1.kid1 + '>. You were a bad parent anyways.')
        .setColor(0x2C2F33)
        
        const married1 = new Discord.MessageEmbed()
        .setAuthor('Disowned', message.author.displayAvatarURL())
        .setDescription(`<@${message.author.id}> has disowned <@${spouse1.kid1}>. Pray for the kid`)
        .setColor(0x2C2F33)
        
        react.edit(married)
        message.channel.send(married1)
        db.query(`UPDATE marriage set kid1 = ? WHERE user_id = ?`, ['0', message.author.id]);
        db.query(`UPDATE marriage set kidamount = kidamount-1 WHERE user_id = ?`, [message.author.id]);
          db.query(`UPDATE marriage set parent = ? WHERE user_id = ?`, ['0', spouse1.kid1]);
          
            }
        
        
        
            if(reaction.emoji.id === "958143868275146812"){
                
                await select.stop()
        
               
        const married = new Discord.MessageEmbed()
        .setAuthor('Disowned', message.author.displayAvatarURL())
        .setDescription('You have disowned <@' + spouse1.kid2 + '>. You were a bad parent anyways.')
        .setColor(0x2C2F33)
        
        const married1 = new Discord.MessageEmbed()
        .setAuthor('Disowned', message.author.displayAvatarURL())
        .setDescription(`<@${message.author.id}> has disowned <@${spouse1.kid2}>. Pray for the kid`)
        .setColor(0x2C2F33)
        
        react.edit(married)
        message.channel.send(married1)
        db.query(`UPDATE marriage set kid2 = ? WHERE user_id = ?`, ['0', message.author.id]);
        db.query(`UPDATE marriage set kidamount = kidamount-1 WHERE user_id = ?`, [message.author.id]);
          db.query(`UPDATE marriage set parent = ? WHERE user_id = ?`, ['0', spouse1.kid2]);
          
            }
        
             } ) 
            })
                .catch(select => {
                    return message.channel.send(`Timed out, or this user has DMs closed, so I am not able to send a DM to them.`)
           
           })
    }
    

} else if (children === '1'){
    if(spouse1.kid1 === '0' && spouse1.kid2 === '0'){
        
        const embed = new Discord.MessageEmbed()
        .setAuthor('Disownment', message.author.displayAvatarURL())
         .setDescription('`' + message.author.tag + '`' + ' is thinking about disowning their child.' + ` <@${message.author.id}>` + ', Check your DMs!')
         .setColor(0x2C2F33)
         message.channel.send(embed)
        const embed1 = new Discord.MessageEmbed()
        .setAuthor('Disownment', message.author.displayAvatarURL())
        .setDescription(`<@${message.author.id}>, you have one child, <@${spouse1.kid3}>. Are you sure you want to disown them?`) 
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
        
               
        const married = new Discord.MessageEmbed()
        .setAuthor('Disowned', message.author.displayAvatarURL())
        .setDescription('You have disowned <@' + spouse1.kid3 + '>. You were a bad parent anyways.')
        .setColor(0x2C2F33)
        
        const married1 = new Discord.MessageEmbed()
        .setAuthor('Disowned', message.author.displayAvatarURL())
        .setDescription(`<@${message.author.id}> has disowned <@${spouse1.kid3}>. Pray for the kid`)
        .setColor(0x2C2F33)
        
        react.edit(married)
        message.channel.send(married1)
        db.query(`UPDATE marriage set kid3 = ? WHERE user_id = ?`, ['0', message.author.id]);
        db.query(`UPDATE marriage set kidamount = kidamount-1 WHERE user_id = ?`, [message.author.id]);
          db.query(`UPDATE marriage set parent = ? WHERE user_id = ?`, ['0', spouse1.kid3]);
          
            }


            if(reaction.emoji.id === "745865688635277403"){
            
                await select.stop()
        const notdivorced = new Discord.MessageEmbed()
        .setAuthor('Cancelled', message.author.displayAvatarURL())
        .setDescription('You have decided to keep the child.')
        .setColor(0x2C2F33)
        
        
        
        const not1divorced = new Discord.MessageEmbed()
        .setAuthor('Cancelled', message.author.displayAvatarURL())
        .setDescription('<@' + message.author.id + '> has changed their mind and kept the child.') 
        .setColor(0x2C2F33)
        
        react.edit(notdivorced)
        message.channel.send(not1divorced)
        
            }
        
           
             } ) 
            })
                .catch(select => {
                    return message.channel.send(`Timed out, or this user has DMs closed, so I am not able to send a DM to them.`)
           
           })
    } else if(spouse1.kid2 === '0' && spouse1.kid3 === '0'){
        const embed = new Discord.MessageEmbed()
        .setAuthor('Disownment', message.author.displayAvatarURL())
         .setDescription('`' + message.author.tag + '`' + ' is thinking about disowning their child.' + ` <@${message.author.id}>` + ', Check your DMs!')
         .setColor(0x2C2F33)
         message.channel.send(embed)
        const embed1 = new Discord.MessageEmbed()
        .setAuthor('Disownment', message.author.displayAvatarURL())
        .setDescription(`<@${message.author.id}>, you have one child,  <@${spouse1.kid1}>. Are you sure you want to disown them?`) 
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
        
               
        const married = new Discord.MessageEmbed()
        .setAuthor('Disowned', message.author.displayAvatarURL())
        .setDescription('You have disowned <@' + spouse1.kid1 + '>. You were a bad parent anyways.')
        .setColor(0x2C2F33)
        
        const married1 = new Discord.MessageEmbed()
        .setAuthor('Disowned', message.author.displayAvatarURL())
        .setDescription(`<@${message.author.id}> has disowned <@${spouse1.kid1}>. Pray for the kid`)
        .setColor(0x2C2F33)
        
        react.edit(married)
        message.channel.send(married1)
        db.query(`UPDATE marriage set kid1 = ? WHERE user_id = ?`, ['0', message.author.id]);
        db.query(`UPDATE marriage set kidamount = kidamount-1 WHERE user_id = ?`, [message.author.id]);
          db.query(`UPDATE marriage set parent = ? WHERE user_id = ?`, ['0', spouse1.kid1]);
          
            }


            if(reaction.emoji.id === "745865688635277403"){
            
                await select.stop()
        const notdivorced = new Discord.MessageEmbed()
        .setAuthor('Cancelled', message.author.displayAvatarURL())
        .setDescription('You have decided to keep the child.')
        .setColor(0x2C2F33)
        
        
        
        const not1divorced = new Discord.MessageEmbed()
        .setAuthor('Cancelled', message.author.displayAvatarURL())
        .setDescription('<@' + message.author.id + '> has changed their mind and kept the child.') 
        .setColor(0x2C2F33)
        
        react.edit(notdivorced)
        message.channel.send(not1divorced)
        
            }
        
           
             } ) 
            })
                .catch(select => {
                    return message.channel.send(`Timed out, or this user has DMs closed, so I am not able to send a DM to them.`)
           
           })
    } else if(spouse1.kid1 === '0' && spouse1.kid3 === '0'){
        const embed = new Discord.MessageEmbed()
        .setAuthor('Disownment', message.author.displayAvatarURL())
         .setDescription('`' + message.author.tag + '`' + ' is thinking about disowning their child.' + ` <@${message.author.id}>` + ', Check your DMs!')
         .setColor(0x2C2F33)
         message.channel.send(embed)
        const embed1 = new Discord.MessageEmbed()
        .setAuthor('Disownment', message.author.displayAvatarURL())
        .setDescription(`<@${message.author.id}>, you have one child, <@${spouse1.kid2}>. Are you sure you want to disown them?`) 
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
        
               
        const married = new Discord.MessageEmbed()
        .setAuthor('Disowned', message.author.displayAvatarURL())
        .setDescription('You have disowned <@' + spouse1.kid2 + '>. You were a bad parent anyways.')
        .setColor(0x2C2F33)
        
        const married1 = new Discord.MessageEmbed()
        .setAuthor('Disowned', message.author.displayAvatarURL())
        .setDescription(`<@${message.author.id}> has disowned <@${spouse1.kid2}>. Pray for the kid`)
        .setColor(0x2C2F33)
        
        react.edit(married)
        message.channel.send(married1)
        db.query(`UPDATE marriage set kid2 = ? WHERE user_id = ?`, ['0', message.author.id]);
        db.query(`UPDATE marriage set kidamount = kidamount-1 WHERE user_id = ?`, [message.author.id]);
          db.query(`UPDATE marriage set parent = ? WHERE user_id = ?`, ['0', spouse1.kid2]);
          
            }


            if(reaction.emoji.id === "745865688635277403"){
            
                await select.stop()
        const notdivorced = new Discord.MessageEmbed()
        .setAuthor('Cancelled', message.author.displayAvatarURL())
        .setDescription('You have decided to keep the child.')
        .setColor(0x2C2F33)
        
        
        
        const not1divorced = new Discord.MessageEmbed()
        .setAuthor('Cancelled', message.author.displayAvatarURL())
        .setDescription('<@' + message.author.id + '> has changed their mind and kept the child.') 
        .setColor(0x2C2F33)
        
        react.edit(notdivorced)
        message.channel.send(not1divorced)
        
            }
        
           
             } ) 
            })
                .catch(select => {
                    return message.channel.send(`Timed out, or this user has DMs closed, so I am not able to send a DM to them.`)
           
           })
    }

} else if (children === '0'){

    return message.inlineReply(`You have no children to disown! Use ${prefix}adopt [user]!`)
}


   
}};