const Discord = require("discord.js")
// const translate = require("translate-google")
const config1 = require('../../config.js')

module.exports = {
name: "forcemarry",
aliases:['forcemarriage'],
description: "divorce your current spouse",
utilisation: `{prefix}forcemarry`,
category: "Love",
module: 'love',
async execute(client, message, args) {
    const db1 = require("quick.db")
        db1.add(`commands_used`, 1)
   
        if(message.author.id !== '901215534966792232') return message.inlineReply('Sorry, only Tim (the bot owner) can use this!')

var count = 0; //To find out what user we're on.
let user1; //Defining the users
let user2; //Defining the users
message.mentions.members.forEach(user => {
    count++; //Adding one onto the count variable
    if (count >= 3) return; //If the user mentioned more than two users return
    if (count === 1) user1 = message.guild.members.cache.get(user.id); //Getting the first mentioned user
    else user2 = message.guild.members.cache.get(user.id); //Getting the second mentioned user
});
       
let spouse1;
  
await db.promise().query('SELECT * FROM marriage WHERE user_id = ?', [user1.id]).then(result => {
  spouse1 = result[0][0]

})

if(!spouse1) {

  db.query(`INSERT INTO marriage (user_id) VALUES(?)`, [user1.id]);
/*console.log(`${message.author.username} has been added to the anti raid users database.`)*/
return message.inlineReply('Dumbass.')
}
let spouse12;
  
await db.promise().query('SELECT * FROM marriage WHERE user_id = ?', [user2.id]).then(result => {
  spouse12 = result[0][0]

})

if(!spouse12) {

  db.query(`INSERT INTO marriage (user_id) VALUES(?)`, [user2.id]);
/*console.log(`${message.author.username} has been added to the anti raid users database.`)*/
return message.inlineReply('Dumbass.')
}



        const exists = spouse1.spouse
        const married1 = spouse12.spouse
        
        
            if (exists !== '0') {
                return message.inlineReply(`<@${user1.id}> is already married to <@${spouse1.spouse}>`)}
              if (married1 !== '0') {
                return message.inlineReply(`<@${user2.id}> is already married to <@${spouse12.spouse}>`)}
              
        
       
         
          const embed = new Discord.MessageEmbed()
          .setAuthor('Force Marriage', message.author.displayAvatarURL())
           .setDescription(`<@${message.author.id}> is attempting to force marry <@${user1.id}> and <@${user2.id}>. <@${message.author.id}>, check your DMs!`)
           .setColor(0x2C2F33)
           message.channel.send(embed)
           
           
    const embed1 = new Discord.MessageEmbed()
    .setAuthor('Force Marry', message.author.displayAvatarURL())
    .setDescription(`You are attempting to force marry <@${user1.id}> and <@${user2.id}>. Are you sure?`) 
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
    .setAuthor('Married', message.author.displayAvatarURL())
    .setDescription(`Congratulations! <@${user1.id}> and <@${user2.id}> are now married!`)
    .setColor(0x2C2F33)
    
    const married1 = new Discord.MessageEmbed()
    .setAuthor('Married', message.author.displayAvatarURL())
    .setDescription('Congratulations! <@' + user1.id + '> is now married to <@' + user2.id + '>')
    .setColor(0x2C2F33)
    
    react.edit(married)
    message.channel.send(married1)
    db.query(`UPDATE marriage set spouse = ? WHERE user_id = ?`, [user2.id, user1.id]);
    db.query(`UPDATE marriage set spouse = ? WHERE user_id = ?`, [user1.id, user2.id]);
   
      
        }
    
    
    
        if(reaction.emoji.id === "745865688635277403"){
            
            await select.stop()
    const notmarried = new Discord.MessageEmbed()
    .setAuthor('Cancelled', message.author.displayAvatarURL())
    .setDescription(`The wedding between <@${user1.id}> and <@${user2.id}> has been cancelled.`)
    .setColor(0x2C2F33)
    
    
    
    const not1married = new Discord.MessageEmbed()
    .setAuthor('Cancelled', message.author.displayAvatarURL())
    .setDescription(`The wedding between <@${user1.id}> and <@${user2.id}> has been cancelled.`) 
    .setColor(0x2C2F33)
    
    react.edit(notmarried)
    message.channel.send(not1married)
    
        }
    
        
          
            
       
         } ) 
        })
            .catch(select => {
                return message.channel.send(`Timed out.`)
       
       })
      
       
       
    
    
    
       


        


}};