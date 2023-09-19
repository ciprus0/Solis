const Discord = require("discord.js")
// const translate = require("translate-google")
const config1 = require('../../config.js')
 
const { leftShift } = require("mathjs");
module.exports = {
name: "spouse",
aliases:['wife', 'husband'],
description: "view your current spouse",
utilisation: `{prefix}spouse`,
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
    return message.inlineReply(`<@${personTagged.id}> is currently married to nobody`)
    }


   
    if(spouse1.spouse === '0'){
        const spouseembed = new Discord.MessageEmbed()
        .setDescription(`<@${personTagged.id}> is currently married to nobody`)
    return message.inlineReply(spouseembed) } 
    else if (spouse1.spouse !== '0'){
        const spouseembed1 = new Discord.MessageEmbed()
    .setDescription(`<@${personTagged.id}> is currently married to <@${spouse1.spouse}>`)
         message.inlineReply(spouseembed1) } 
    

    
} else if (spouse12.spouse !== '0') {
    const spouseembed2 = new Discord.MessageEmbed()
    .setDescription(`You are currently married to <@${spouse12.spouse}>`)
    return message.inlineReply(spouseembed2)
}   


else if (spouse12.spouse === '0') {
    return message.inlineReply(`You are currently not married. Use ${prefix}marry [user]!`)
}
}};