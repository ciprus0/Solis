const Discord = require("discord.js")
// const translate = require("translate-google")
const config1 = require('../../config.js')

module.exports = {
name: "runaway",
aliases:['run'],
description: "runaway from your parent",
utilisation: `{prefix}runaway`,
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




        if(spouse1.parent === '0') return message.inlineReply('You have nobody to run away from. Ask someone to adopt you!')
        if(spouse1.parent !== '0'){
            let parental;
  
        await db.promise().query('SELECT * FROM marriage WHERE user_id = ?', [spouse1.parent]).then(result => {
          parental = result[0][0]
        
        })
        
        if(!parental) {
        
          db.query(`INSERT INTO marriage (user_id) VALUES(?)`, [spouse1.parent]);
        /*console.log(`${message.author.username} has been added to the anti raid users database.`)*/
        return message.inlineReply('Sorry, you were not in the database. So clearly you had no children to disown. Now you are in the database.')
        }

        if(parental.kidamount !== '0'){
            const embed = new Discord.MessageEmbed()
      .setAuthor('Runaway', message.author.displayAvatarURL())
       .setDescription('`' + message.author.tag + '`' + ' is thinking about running away from <@' + spouse1.parent + '>! <@' + message.author.id + '>, are you sure? Check your DMs!')
       .setColor(0x2C2F33)
       message.channel.send(embed)
       
       
const embed1 = new Discord.MessageEmbed()
.setAuthor('Runaway', message.author.displayAvatarURL())
.setDescription('You are trying to run away from <@' + spouse1.parent + '>. Are you sure?') 
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
.setAuthor('Ran Away', message.author.displayAvatarURL())
.setDescription('Congrats? You have run away from <@' + spouse1.parent + '>')
.setColor(0x2C2F33)

const married1 = new Discord.MessageEmbed()
.setAuthor('Ran Away', message.author.displayAvatarURL())
.setDescription('Congrats? <@' + message.author.id + '> has ran away from <@' + spouse1.parent + '>')
.setColor(0x2C2F33)

react.edit(married)
message.channel.send(married1)
if(parental.kid1 === message.author.id){
    db.query(`UPDATE marriage set kid1 = ? WHERE user_id = ?`, ['0', spouse1.parent]);
    db.query(`UPDATE marriage set parent = ? WHERE user_id = ?`, ['0', message.author.id]);
    db.query(`UPDATE marriage set kidamount = kidamount-1 WHERE user_id = ?`, [spouse1.parent]);
} else if(parental.kid2 === message.author.id){
    db.query(`UPDATE marriage set kid2 = ? WHERE user_id = ?`, ['0', spouse1.parent]);
  db.query(`UPDATE marriage set parent = ? WHERE user_id = ?`, ['0', message.author.id]);
  db.query(`UPDATE marriage set kidamount = kidamount-1 WHERE user_id = ?`, [spouse1.parent]);
} else if (parental.kid3 === message.author.id){
    db.query(`UPDATE marriage set kid3 = ? WHERE user_id = ?`, ['0', spouse1.parent]);
    db.query(`UPDATE marriage set parent = ? WHERE user_id = ?`, ['0', message.author.id]);
    db.query(`UPDATE marriage set kidamount = kidamount-1 WHERE user_id = ?`, [spouse1.parent]);
}

  
    }



    if(reaction.emoji.id === "745865688635277403"){
        
        await select.stop()
const notmarried = new Discord.MessageEmbed()
.setAuthor('Nevermind', message.author.displayAvatarURL())
.setDescription('Looks like you changed your mind.')
.setColor(0x2C2F33)



const not1married = new Discord.MessageEmbed()
.setAuthor('Nevermind', message.author.displayAvatarURL())
.setDescription('<@' + message.author.id + '> decided they were stupid and actually love their parent.') 
.setColor(0x2C2F33)

react.edit(notmarried)
message.channel.send(not1married)

    }

    
      
        
   
     } ) 
    })
        .catch(select => {
            return message.channel.send(`Timed out, or this user has DMs closed, so I am not able to send a DM to them.`)
   
   })
  

}}


    }}