const Discord = require("discord.js")
// const translate = require("translate-google")
const config1 = require('../../config.js')

module.exports = {
name: "adopt",
aliases:['None'],
description: "adopt someone",
utilisation: `{prefix}adopt [user]`,
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


      let user;
  
      await db.promise().query('SELECT * FROM marriage WHERE user_id = ?', [message.author.id]).then(result => {
        user = result[0][0]
      
      })
      
      if(!user) {
      
        db.query(`INSERT INTO marriage (user_id) VALUES(?)`, [message.author.id]);
      /*console.log(`${message.author.username} has been added to the anti raid users database.`)*/
      return message.inlineReply('Sorry, you were not in the database. Now you are in the database.')
      }

      let dude;
  
      await db.promise().query('SELECT * FROM marriage WHERE user_id = ?', [personTagged.user.id]).then(result => {
        dude = result[0][0]
      
      })
      
      if(!dude) {
      
        db.query(`INSERT INTO marriage (user_id) VALUES(?)`, [personTagged.user.id]);
      /*console.log(`${message.author.username} has been added to the anti raid users database.`)*/
      return message.inlineReply('Sorry, the person you are trying to adopt was not in the database. Now they are. Send it again!')
      }

const parent2a = user.spouse
const kid2 = user.kid2
const kid1 = user.kid1
const kid3 = user.kid3
    const children = user.kidamount
    const kid = dude.parent
    if(personTagged.user.id === user.spouse) return message.inlineReply('You are a very weird person. Adopting your spouse? Smh.')
    if(personTagged.user.id === user.parent) return message.inlineReply('How are you supposed to adopt your parent? Makes no sense.')
    if(personTagged.user.id === user.kid1) return message.inlineReply('You already adopted them!')
    if(personTagged.user.id === user.kid2) return message.inlineReply('You already adopted them!')
    if(personTagged.user.id === user.kid3) return message.inlineReply('You already adopted them!')


        if (children === '3') {
            return message.inlineReply('You already have three children! Put one up for adoption if you want someone else.')}
          if (kid !== '0') {
            return message.inlineReply('They already have a parent! You cannot adopt them.')}
          if (personTagged.id == message.author.id) {
            return message.inlineReply('Adopting yourself? Weird.');
          }
    if (children !== '3' && kid === '0') {
   
     
      const embed = new Discord.MessageEmbed()
      .setAuthor('Adoption', message.author.displayAvatarURL())
       .setDescription('`' + message.author.tag + '`' + ' wants to adopt <@' + personTagged.user.id + '>. <@' + personTagged.user.id + '>, do you accept? Check your DMs!')
       .setColor(0x2C2F33)
       message.channel.send(embed)
       
       
const embed1 = new Discord.MessageEmbed()
.setAuthor('Adoption', message.author.displayAvatarURL())
.setDescription('<@' + personTagged.user.id + '>, <@' + message.author.id + '> would like to adopt you! Do you accept?') 
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
.setAuthor('Adopted', personTagged.user.displayAvatarURL())
.setDescription('Congratulations! You have been adopted by <@' + message.author.id + '>')
.setColor(0x2C2F33)

const married1 = new Discord.MessageEmbed()
.setAuthor('Adopted', personTagged.user.displayAvatarURL())
.setDescription('Congratulations! <@' + message.author.id + '> has adopted <@' + personTagged.user.id + '>')
.setColor(0x2C2F33)

react.edit(married)
message.channel.send(married1)
if(children === '0'){
if(parent2a !== '0'){
        db.query(`UPDATE marriage set kid1 = ? WHERE user_id = ?`, [personTagged.user.id, message.author.id]);
    db.query(`UPDATE marriage set parent = ? WHERE user_id = ?`, [message.author.id, personTagged.user.id]);
    db.query(`UPDATE marriage set parent2 = ? WHERE user_id = ?`, [parent2a, personTagged.user.id]);
    db.query(`UPDATE marriage set kidamount = kidamount+1 WHERE user_id = ?`, [message.author.id]);
    
    return
        } else if (parent2a === '0'){
            db.query(`UPDATE marriage set kid1 = ? WHERE user_id = ?`, [personTagged.user.id, message.author.id]);
    db.query(`UPDATE marriage set parent = ? WHERE user_id = ?`, [message.author.id, personTagged.user.id]);
   
    db.query(`UPDATE marriage set kidamount = kidamount+1 WHERE user_id = ?`, [message.author.id]);
    return
    }
} else if (children === '1'){
    if(user.kid1 !== '0'){

    
    if(parent2a !== '0'){
            db.query(`UPDATE marriage set kid2 = ? WHERE user_id = ?`, [personTagged.user.id, message.author.id]);
        db.query(`UPDATE marriage set parent = ? WHERE user_id = ?`, [message.author.id, personTagged.user.id]);
        db.query(`UPDATE marriage set parent2 = ? WHERE user_id = ?`, [parent2a, personTagged.user.id]);
        db.query(`UPDATE marriage set kidamount = kidamount+1 WHERE user_id = ?`, [message.author.id]);
        
        return
            } else if (parent2a === '0'){
                db.query(`UPDATE marriage set kid2 = ? WHERE user_id = ?`, [personTagged.user.id, message.author.id]);
        db.query(`UPDATE marriage set parent = ? WHERE user_id = ?`, [message.author.id, personTagged.user.id]);
        
        db.query(`UPDATE marriage set kidamount = kidamount+1 WHERE user_id = ?`, [message.author.id]);
        return
    }
} else if(kid2 !== '0'){
    if(parent2a !== '0'){
        db.query(`UPDATE marriage set kid1 = ? WHERE user_id = ?`, [personTagged.user.id, message.author.id]);
    db.query(`UPDATE marriage set parent = ? WHERE user_id = ?`, [message.author.id, personTagged.user.id]);
    db.query(`UPDATE marriage set parent2 = ? WHERE user_id = ?`, [parent2a, personTagged.user.id]);
    db.query(`UPDATE marriage set kidamount = kidamount+1 WHERE user_id = ?`, [message.author.id]);
    
    return
        } else if (parent2a === '0'){
            db.query(`UPDATE marriage set kid1 = ? WHERE user_id = ?`, [personTagged.user.id, message.author.id]);
    db.query(`UPDATE marriage set parent = ? WHERE user_id = ?`, [message.author.id, personTagged.user.id]);
    
    db.query(`UPDATE marriage set kidamount = kidamount+1 WHERE user_id = ?`, [message.author.id]);
    return
}
} else if(kid3 !== '0'){
    if(parent2a !== '0'){
        db.query(`UPDATE marriage set kid2 = ? WHERE user_id = ?`, [personTagged.user.id, message.author.id]);
    db.query(`UPDATE marriage set parent = ? WHERE user_id = ?`, [message.author.id, personTagged.user.id]);
    db.query(`UPDATE marriage set parent2 = ? WHERE user_id = ?`, [parent2a, personTagged.user.id]);
    db.query(`UPDATE marriage set kidamount = kidamount+1 WHERE user_id = ?`, [message.author.id]);
    
    return
        } else if (parent2a === '0'){
            db.query(`UPDATE marriage set kid2 = ? WHERE user_id = ?`, [personTagged.user.id, message.author.id]);
    db.query(`UPDATE marriage set parent = ? WHERE user_id = ?`, [message.author.id, personTagged.user.id]);
    
    db.query(`UPDATE marriage set kidamount = kidamount+1 WHERE user_id = ?`, [message.author.id]);
    return
}
}
} else if (children === '2'){
    if(kid1 !== '0' && kid2 !== '0'){
if(parent2a !== '0'){
        db.query(`UPDATE marriage set kid3 = ? WHERE user_id = ?`, [personTagged.user.id, message.author.id]);
    db.query(`UPDATE marriage set parent = ? WHERE user_id = ?`, [message.author.id, personTagged.user.id]);
    db.query(`UPDATE marriage set kidamount = kidamount+1 WHERE user_id = ?`, [message.author.id]);
    
    db.query(`UPDATE marriage set parent2 = ? WHERE user_id = ?`, [parent2a, personTagged.user.id]);
    return
    
        } else if (parent2a === '0'){
            db.query(`UPDATE marriage set kid3 = ? WHERE user_id = ?`, [personTagged.user.id, message.author.id]);
    db.query(`UPDATE marriage set parent = ? WHERE user_id = ?`, [message.author.id, personTagged.user.id]);
    
    db.query(`UPDATE marriage set kidamount = kidamount+1 WHERE user_id = ?`, [message.author.id]);
    return
        }
} else if(kid1 !== '0' && kid3 !== '0'){
    if(parent2a !== '0'){
        db.query(`UPDATE marriage set kid2 = ? WHERE user_id = ?`, [personTagged.user.id, message.author.id]);
    db.query(`UPDATE marriage set parent = ? WHERE user_id = ?`, [message.author.id, personTagged.user.id]);
    db.query(`UPDATE marriage set parent2 = ? WHERE user_id = ?`, [parent2a, personTagged.user.id]);
    db.query(`UPDATE marriage set kidamount = kidamount+1 WHERE user_id = ?`, [message.author.id]);
    
    return
        } else if (parent2a === '0'){
            db.query(`UPDATE marriage set kid2 = ? WHERE user_id = ?`, [personTagged.user.id, message.author.id]);
    db.query(`UPDATE marriage set parent = ? WHERE user_id = ?`, [message.author.id, personTagged.user.id]);
    
    db.query(`UPDATE marriage set kidamount = kidamount+1 WHERE user_id = ?`, [message.author.id]);
    return
}
} else if(kid2 !== '0' && kid3 !== '0'){
    if(parent2a !== '0'){
        db.query(`UPDATE marriage set kid1 = ? WHERE user_id = ?`, [personTagged.user.id, message.author.id]);
    db.query(`UPDATE marriage set parent = ? WHERE user_id = ?`, [message.author.id, personTagged.user.id]);
    db.query(`UPDATE marriage set parent2 = ? WHERE user_id = ?`, [parent2a, personTagged.user.id]);
    db.query(`UPDATE marriage set kidamount = kidamount+1 WHERE user_id = ?`, [message.author.id]);
    
    return
        } else if (parent2a === '0'){
            db.query(`UPDATE marriage set kid1 = ? WHERE user_id = ?`, [personTagged.user.id, message.author.id]);
    db.query(`UPDATE marriage set parent = ? WHERE user_id = ?`, [message.author.id, personTagged.user.id]);
    
    db.query(`UPDATE marriage set kidamount = kidamount+1 WHERE user_id = ?`, [message.author.id]);
    return
}
}
}
  
    }



    if(reaction.emoji.id === "745865688635277403"){
        
        await select.stop()
const notmarried = new Discord.MessageEmbed()
.setAuthor('Declined', personTagged.user.displayAvatarURL())
.setDescription('You have declined the adoption proposal from <@' + message.author.id + '>')
.setColor(0x2C2F33)



const not1married = new Discord.MessageEmbed()
.setAuthor('Declined', personTagged.user.displayAvatarURL())
.setDescription('<@' + message.author.id + '>, your adoption proposal to <@' + personTagged.user.id + '> has been declined.') 
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