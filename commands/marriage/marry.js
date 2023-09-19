const Discord = require("discord.js")
// const translate = require("translate-google")
const config1 = require('../../config.js')
 
module.exports = {
name: "marry",
aliases:['None'],
description: "marry someone",
utilisation: `{prefix}marry [user]`,
category: "Love",
module: 'love',
async execute(client, message, args, prefix) {
  const db1 = require("quick.db")
        db1.add(`commands_used`, 1)
    let personTagged = message.mentions.members.first() || client.users.cache.get(args[0])
    if (!personTagged) {
     
      const args1 = message.content.slice(prefix.length).trim().split(/ +/g);
      const command = args1.shift().toLowerCase();
      const cmd = client.commands.get(command) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command));
return message.inlineReply({
          embed: {
              color: 0xADC5FF,
              title: `Command: ${command}`,
              footer: { text: 'Created by Tim' },
              fields: [
                  { name: 'Name', value: cmd.name, inline: true },
                  { name: 'Category', value: cmd.category, inline: true },
                  { name: 'Aliase(s)', value: cmd.aliases.length < 1 ? 'None' : cmd.aliases.join(', '), inline: true },
                  { name: 'Usage', value: cmd.utilisation.replace('{prefix}', client.config1.discord.prefix), inline: true },
              ],
              timestamp: new Date(),
              description: 'Find information on the command provided.\nMandatory arguments `[]`, optional arguments `<>`.',
          }
      })}


      let user

      try {
          await db.promise().query('SELECT * FROM marriage WHERE user_id = ?', [message.author.id]).then(result => {
              user = result[0][0]
           
          })
      } catch (error) {
          console.error(error)
          message.inlineReply("Sorry, you were not in the database, please send the command again!")
          
          const args = message.content.slice(prefix.length).trim().split(/ +/g)
          const command = args.shift().toLowerCase()
          client.limits.delete(command + '-' + message.author.id)
          return
      }

      

      let spouse1;
  
      await db.promise().query('SELECT * FROM marriage WHERE user_id = ?', [personTagged.id]).then(result => {
        spouse1 = result[0][0]
      
      })
      
      if(!spouse1) {
      
        db.query(`INSERT INTO marriage (user_id) VALUES(?)`, [personTagged.id]);
      /*console.log(`${message.author.username} has been added to the anti raid users database.`)*/
      return message.inlineReply('Sorry, the user you mentioned was not in the database. But now they are! Propose again')
      }




    const exists = user.spouse
    const married1 = spouse1.spouse
    if(personTagged.id === user.parent) return message.inlineReply('That is just disgusting. Marrying your parent? Disgusting.')
    if(personTagged.id === user.kid1) return message.inlineReply('Eww. You want to marry your kid? So weird.')
    if(personTagged.id === user.kid2) return message.inlineReply('Eww. You want to marry your kid? So weird.')
    if(personTagged.id === user.kid3) return message.inlineReply('Eww. You want to marry your kid? So weird.')
        if (exists !== '0') {
            return message.inlineReply('You are already married to <@' + user.spouse + '>')}
          if (married1 !== '0') {
            return message.inlineReply('Are you trying to make them cheat? They are already married..')}
          if (personTagged.id == message.author.id) {
            return message.inlineReply('Did you really just try to marry yourself? That is pretty sad..');
          }
    if (exists === '0' && married1 === '0') {
   
     
      const embed = new Discord.MessageEmbed()
      .setAuthor('Marriage Proposal', message.author.displayAvatarURL())
       .setDescription('`' + message.author.tag + '`' + ' has proposed to <@' + personTagged.user.id + '>. <@' + personTagged.user.id + '>, do you accept? Check your DMs!')
       .setColor(0x2C2F33)
       message.channel.send(embed)
       
       
const embed1 = new Discord.MessageEmbed()
.setAuthor('Proposal', message.author.displayAvatarURL())
.setDescription('<@' + personTagged.user.id + '>, <@' + message.author.id + '> has proposed to you! Do you accept?') 
.setColor(0x2C2F33)


       personTagged.send(embed1).then(async react => {
        react.react('745865662769135646')
        react.react('745865688635277403')
        const select = react.createReactionCollector((reaction, user) =>
        reaction.emoji.id === "745865662769135646" || "745865688635277403" &&
        user.id === personTagged.user.id,
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
.setAuthor('Married', personTagged.user.displayAvatarURL())
.setDescription('Congratulations! You are now married to <@' + message.author.id + '>')
.setColor(0x2C2F33)

const married1 = new Discord.MessageEmbed()
.setAuthor('Married', personTagged.user.displayAvatarURL())
.setDescription('Congratulations! <@' + personTagged.user.id + '> is now married to <@' + message.author.id + '>')
.setColor(0x2C2F33)

react.edit(married)
message.channel.send(married1)
db.query(`UPDATE marriage set spouse = ? WHERE user_id = ?`, [personTagged.id, message.author.id]);
  db.query(`UPDATE marriage set spouse = ? WHERE user_id = ?`, [message.author.id, personTagged.id]);
  
    }



    if(reaction.emoji.id === "745865688635277403"){
        
        await select.stop()
const notmarried = new Discord.MessageEmbed()
.setAuthor('Declined', personTagged.user.displayAvatarURL())
.setDescription('You have declined the marriage proposal from <@' + message.author.id + '>')
.setColor(0x2C2F33)



const not1married = new Discord.MessageEmbed()
.setAuthor('Declined', personTagged.user.displayAvatarURL())
.setDescription('<@' + message.author.id + '>, your proposal to <@' + personTagged.user.id + '> has been declined.') 
.setColor(0x2C2F33)

react.edit(notmarried)
message.channel.send(not1married)

    }

    
      
        
   
     } ) 
    })
        .catch(select => {
            return message.channel.send(`Timed out, or this user has DMs closed, so I am not able to send a DM to them.`)
   
   })
  }
   
   



       }};