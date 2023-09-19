const Discord = require("discord.js")
// const translate = require("translate-google")
const config1 = require('../../config.js')
 
const { leftShift } = require("mathjs");
module.exports = {
name: "children",
aliases:['kids'],
description: "view your current children",
utilisation: `{prefix}children`,
category: "Love",
module: 'love',
async execute(client, message, args, prefix) {
    const db1 = require("quick.db")
        db1.add(`commands_used`, 1)
    const author1 = message.author.id
const personTagged = message.mentions.members.first() || client.users.cache.get(args[0])




    


let spouse12;
  
await db.promise().query('SELECT * FROM marriage WHERE user_id = ?', [message.author.id]).then(result => {
  spouse12 = result[0][0]

})

if(!spouse12) {

  db.query(`INSERT INTO marriage (user_id) VALUES(?)`, [message.author.id]);
return message.inlineReply(`Sorry, you were not in the database. Please send the message again!`)
}

    
   


    
if(personTagged) {
    let spouse1;
  
    await db.promise().query('SELECT * FROM marriage WHERE user_id = ?', [personTagged.id]).then(result => {
      spouse1 = result[0][0]
    
    })
    
    if(!spouse1) {
    
      db.query(`INSERT INTO marriage (user_id) VALUES(?)`, [personTagged.id]);
    return message.inlineReply(`<@${personTagged.id}> has no children`)
    }

    let spouse2 = message.guild.members.cache.get(spouse1.spouse) || ' '
    let kids = message.guild.members.cache.get(spouse1.kid1) || ' '
    let kids2 = message.guild.members.cache.get(spouse1.kid2) || ' '
    let kids3 = message.guild.members.cache.get(spouse1.kid3) || ' '
    let kids4 = message.guild.members.cache.get(spouse2.kid1) || ' '
    let kids5 = message.guild.members.cache.get(spouse2.kid2) || ' '
    let kids6 = message.guild.members.cache.get(spouse2.kid3) || ' '

    const embed = new Discord.MessageEmbed()
    .setDescription(`**<@${personTagged.id}>'s Children:** ${kids} ${kids2} ${kids3} ${kids4} ${kids5} ${kids6}`)
    message.inlineReply(embed)
    
return
    
} else {

    let spouse1;
  
    await db.promise().query('SELECT * FROM marriage WHERE user_id = ?', [message.author.id]).then(result => {
      spouse1 = result[0][0]
    
    })
    
    if(!spouse1) {
    
      db.query(`INSERT INTO marriage (user_id) VALUES(?)`, [message.author.id]);
    return message.inlineReply(`<@${message.author.id}> has no children`)
    }

    let spouse2 = message.guild.members.cache.get(spouse1.spouse) || ' '
    let kids = message.guild.members.cache.get(spouse1.kid1) || ' '
    let kids2 = message.guild.members.cache.get(spouse1.kid2) || ' '
    let kids3 = message.guild.members.cache.get(spouse1.kid3) || ' '
    let kids4 = message.guild.members.cache.get(spouse2.kid1) || ' '
    let kids5 = message.guild.members.cache.get(spouse2.kid2) || ' '
    let kids6 = message.guild.members.cache.get(spouse2.kid3) || ' '

    const embed = new Discord.MessageEmbed()
    .setDescription(`**${message.author.username}'s Children:** ${kids} ${kids2} ${kids3} ${kids4} ${kids5} ${kids6}`)
    message.inlineReply(embed)
    
return

}
}};