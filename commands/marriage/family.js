const Discord = require("discord.js")
// const translate = require("translate-google")
const config1 = require('../../config.js')
 
const { leftShift } = require("mathjs");
module.exports = {
name: "family",
aliases:['familytree', 'tree'],
description: "view your current family",
utilisation: `{prefix}family`,
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



    let spouse2 = message.guild.members.cache.get(spouse1.spouse) || 'None'
    let parents = message.guild.members.cache.get(spouse1.parent) || 'None'
    

if(spouse1.parent !== '0'){
    let spouse122;
  
    await db.promise().query('SELECT * FROM marriage WHERE user_id = ?', [spouse1.parent]).then(result => {
      spouse122 = result[0][0]
    
    })
    
    if(!spouse122) {
    
      db.query(`INSERT INTO marriage (user_id) VALUES(?)`, [spouse1.parent]);
    return message.inlineReply(`<@${spouse1.parent}> has no children`)
    }

    let parents2 = message.guild.members.cache.get(spouse122.spouse) || ' '


    if(spouse1.spouse !== '0'){
        

        let spouse121;
  
        await db.promise().query('SELECT * FROM marriage WHERE user_id = ?', [spouse1.spouse]).then(result => {
          spouse121 = result[0][0]
        
        })
        
        if(!spouse121) {
        
          db.query(`INSERT INTO marriage (user_id) VALUES(?)`, [spouse1.spouse]);
        return message.inlineReply(`<@${spouse1.spouse}> has no children`)
        }
        if(spouse1.kid1 === '0' && spouse1.kid2 === '0' && spouse1.kid3 === '0' && spouse121.kid1 === '0' && spouse121.kid2 === '0' && spouse121.kid3 === '0'){
    let kids = message.guild.members.cache.get(spouse1.kid1) || ' '
    let kids2 = message.guild.members.cache.get(spouse1.kid2) || ' '
    let kids3 = message.guild.members.cache.get(spouse1.kid3) || ' '
    let kids4 = message.guild.members.cache.get(spouse121.kid1) || ' '
    let kids5 = message.guild.members.cache.get(spouse121.kid2) || ' '
    let kids6 = message.guild.members.cache.get(spouse121.kid3) || ' '
    

    const embed = new Discord.MessageEmbed()
    .setAuthor('Family Tree', personTagged.user.displayAvatarURL())
    .addField(`**Spouse:**`, spouse2)
    .addField(`**Parents:**`, (`${parents} ${parents2}`))
    .addField(`**Children:**`, (`None`))
message.channel.send(embed)
return
        } else {
            let kids = message.guild.members.cache.get(spouse1.kid1) || ' '
    let kids2 = message.guild.members.cache.get(spouse1.kid2) || ' '
    let kids3 = message.guild.members.cache.get(spouse1.kid3) || ' '
    let kids4 = message.guild.members.cache.get(spouse121.kid1) || ' '
    let kids5 = message.guild.members.cache.get(spouse121.kid2) || ' '
    let kids6 = message.guild.members.cache.get(spouse121.kid3) || ' '
    

    const embed = new Discord.MessageEmbed()
    .setAuthor('Family Tree', personTagged.user.displayAvatarURL())
    .addField(`**Spouse:**`, spouse2)
    .addField(`**Parents:**`, (`${parents} ${parents2}`))
    .addField(`**Children:**`, (`${kids} ${kids2} ${kids3} ${kids4} ${kids5} ${kids6}`))
message.channel.send(embed)
return
        }
    } else if(spouse1.spouse === '0'){

        if(spouse1.kid1 === '0' && spouse1.kid2 === '0' && spouse1.kid3 === '0'){
        let kids = message.guild.members.cache.get(spouse1.kid1) || ' '
    let kids2 = message.guild.members.cache.get(spouse1.kid2) || ' '
    let kids3 = message.guild.members.cache.get(spouse1.kid3) || ' '
   
    

    const embed = new Discord.MessageEmbed()
    .setAuthor('Family Tree', personTagged.user.displayAvatarURL())
    .addField(`**Spouse:**`, spouse2)
    .addField(`**Parents:**`, (`${parents} ${parents2}`))
    .addField(`**Children:**`, (`None`))
message.channel.send(embed)

        } else {
            let kids = message.guild.members.cache.get(spouse1.kid1) || ' '
    let kids2 = message.guild.members.cache.get(spouse1.kid2) || ' '
    let kids3 = message.guild.members.cache.get(spouse1.kid3) || ' '
   
    

    const embed = new Discord.MessageEmbed()
    .setAuthor('Family Tree', personTagged.user.displayAvatarURL())
    .addField(`**Spouse:**`, spouse2)
    .addField(`**Parents:**`, (`${parents} ${parents2}`))
    .addField(`**Children:**`, (`${kids} ${kids2} ${kids3}`))
message.channel.send(embed)
        }
    }
} else {
    if(spouse1.spouse !== '0'){
        

        let spouse121;
  
        await db.promise().query('SELECT * FROM marriage WHERE user_id = ?', [spouse1.spouse]).then(result => {
          spouse121 = result[0][0]
        
        })
        
        if(!spouse121) {
        
          db.query(`INSERT INTO marriage (user_id) VALUES(?)`, [spouse1.spouse]);
        return message.inlineReply(`<@${spouse1.spouse}> has no children`)
        }
        if(spouse1.kid1 === '0' && spouse1.kid2 === '0' && spouse1.kid3 === '0' && spouse121.kid1 === '0' && spouse121.kid2 === '0' && spouse121.kid3 === '0'){
    let kids = message.guild.members.cache.get(spouse1.kid1) || ' '
    let kids2 = message.guild.members.cache.get(spouse1.kid2) || ' '
    let kids3 = message.guild.members.cache.get(spouse1.kid3) || ' '
    let kids4 = message.guild.members.cache.get(spouse121.kid1) || ' '
    let kids5 = message.guild.members.cache.get(spouse121.kid2) || ' '
    let kids6 = message.guild.members.cache.get(spouse121.kid3) || ' '
    

    const embed = new Discord.MessageEmbed()
    .setAuthor('Family Tree', personTagged.user.displayAvatarURL())
    .addField(`**Spouse:**`, spouse2)
    .addField(`**Parents:**`, (`${parents}`))
    .addField(`**Children:**`, (`None`))
message.channel.send(embed)
return
        } else {
            let kids = message.guild.members.cache.get(spouse1.kid1) || ' '
    let kids2 = message.guild.members.cache.get(spouse1.kid2) || ' '
    let kids3 = message.guild.members.cache.get(spouse1.kid3) || ' '
    let kids4 = message.guild.members.cache.get(spouse121.kid1) || ' '
    let kids5 = message.guild.members.cache.get(spouse121.kid2) || ' '
    let kids6 = message.guild.members.cache.get(spouse121.kid3) || ' '
    

    const embed = new Discord.MessageEmbed()
    .setAuthor('Family Tree', personTagged.user.displayAvatarURL())
    .addField(`**Spouse:**`, spouse2)
    .addField(`**Parents:**`, (`${parents}`))
    .addField(`**Children:**`, (`${kids} ${kids2} ${kids3} ${kids4} ${kids5} ${kids6}`))
message.channel.send(embed)
return
        }
    } else if(spouse1.spouse === '0'){

        if(spouse1.kid1 === '0' && spouse1.kid2 === '0' && spouse1.kid3 === '0'){
        let kids = message.guild.members.cache.get(spouse1.kid1) || ' '
    let kids2 = message.guild.members.cache.get(spouse1.kid2) || ' '
    let kids3 = message.guild.members.cache.get(spouse1.kid3) || ' '
   
    

    const embed = new Discord.MessageEmbed()
    .setAuthor('Family Tree', personTagged.user.displayAvatarURL())
    .addField(`**Spouse:**`, spouse2)
    .addField(`**Parents:**`, (`${parents}`))
    .addField(`**Children:**`, (`None`))
message.channel.send(embed)

        } else {
            let kids = message.guild.members.cache.get(spouse1.kid1) || ' '
    let kids2 = message.guild.members.cache.get(spouse1.kid2) || ' '
    let kids3 = message.guild.members.cache.get(spouse1.kid3) || ' '
   
    

    const embed = new Discord.MessageEmbed()
    .setAuthor('Family Tree', personTagged.user.displayAvatarURL())
    .addField(`**Spouse:**`, spouse2)
    .addField(`**Parents:**`, (`${parents}`))
    .addField(`**Children:**`, (`${kids} ${kids2} ${kids3}`))
message.channel.send(embed)
        }
    }
}
    









// persontagged ends

} else {
    let spouse1;
  
    await db.promise().query('SELECT * FROM marriage WHERE user_id = ?', [message.author.id]).then(result => {
      spouse1 = result[0][0]
    
    })
    
    if(!spouse1) {
    
      db.query(`INSERT INTO marriage (user_id) VALUES(?)`, [message.author.id]);
    return message.inlineReply(`<@${message.author.id}> has no children`)
    }

    let spouse2 = message.guild.members.cache.get(spouse1.spouse) || 'None'
    let parents = message.guild.members.cache.get(spouse1.parent) || 'None'
    
    if(spouse1.parent !== '0'){
        let spouse1223;
      
        await db.promise().query('SELECT * FROM marriage WHERE user_id = ?', [spouse1.parent]).then(result => {
          spouse1223 = result[0][0]
        
        })
        
        if(!spouse1223) {
        
          db.query(`INSERT INTO marriage (user_id) VALUES(?)`, [spouse1.parent]);
        return message.inlineReply(`<@${spouse1.parent}> has no children`)
        }
    
        let parents2 = message.guild.members.cache.get(spouse1223.spouse) || ' '

    if(spouse1.spouse !== '0'){

        let spouse121;
  
        await db.promise().query('SELECT * FROM marriage WHERE user_id = ?', [spouse1.spouse]).then(result => {
          spouse121 = result[0][0]
        
        })
        
        if(!spouse121) {
        
          db.query(`INSERT INTO marriage (user_id) VALUES(?)`, [spouse1.spouse]);
        return message.inlineReply(`<@${spouse1.spouse}> has no children`)
        }

        if(spouse1.kid1 === '0' && spouse1.kid2 === '0' && spouse1.kid3 === '0' && spouse121.kid1 === '0' && spouse121.kid2 === '0' && spouse121.kid3 === '0'){

    let kids = message.guild.members.cache.get(spouse1.kid1) || ' '
    let kids2 = message.guild.members.cache.get(spouse1.kid2) || ' '
    let kids3 = message.guild.members.cache.get(spouse1.kid3) || ' '
    let kids4 = message.guild.members.cache.get(spouse121.kid1) || ' '
    let kids5 = message.guild.members.cache.get(spouse121.kid2) || ' '
    let kids6 = message.guild.members.cache.get(spouse121.kid3) || ' '
    

    const embed = new Discord.MessageEmbed()
    .setAuthor('Family Tree', message.author.displayAvatarURL())
    .addField(`**Spouse:**`, spouse2)
    .addField(`**Parents:**`, (`${parents} ${parents2}`))
    .addField(`**Children:**`, (`None`))
message.channel.send(embed)
return
        } else {
            let kids = message.guild.members.cache.get(spouse1.kid1) || ' '
            let kids2 = message.guild.members.cache.get(spouse1.kid2) || ' '
            let kids3 = message.guild.members.cache.get(spouse1.kid3) || ' '
            let kids4 = message.guild.members.cache.get(spouse121.kid1) || ' '
            let kids5 = message.guild.members.cache.get(spouse121.kid2) || ' '
            let kids6 = message.guild.members.cache.get(spouse121.kid3) || ' '
            
        
            const embed = new Discord.MessageEmbed()
            .setAuthor('Family Tree', message.author.displayAvatarURL())
            .addField(`**Spouse:**`, spouse2)
            .addField(`**Parents:**`, (`${parents} ${parents2}`))
            .addField(`**Children:**`, (`${kids} ${kids2} ${kids3} ${kids4} ${kids5} ${kids6}`))
        message.channel.send(embed)
        return

        }


    } else if(spouse1.spouse === '0'){

        if(spouse1.kid1 === '0' && spouse1.kid2 === '0' && spouse1.kid3 === '0' ){
    let kids = message.guild.members.cache.get(spouse1.kid1) || ' '
    let kids2 = message.guild.members.cache.get(spouse1.kid2) || ' '
    let kids3 = message.guild.members.cache.get(spouse1.kid3) || ' '
    
    

    const embed = new Discord.MessageEmbed()
    .setAuthor('Family Tree', message.author.displayAvatarURL())
    .addField(`**Spouse:**`, spouse2)
    .addField(`**Parents:**`, (`${parents} ${parents2}`))
    .addField(`**Children:**`, (`None`))

message.channel.send(embed)
return

        } else {
            let kids = message.guild.members.cache.get(spouse1.kid1) || ' '
    let kids2 = message.guild.members.cache.get(spouse1.kid2) || ' '
    let kids3 = message.guild.members.cache.get(spouse1.kid3) || ' '
    
    

    const embed = new Discord.MessageEmbed()
    .setAuthor('Family Tree', message.author.displayAvatarURL())
    .addField(`**Spouse:**`, spouse2)
    .addField(`**Parents:**`, (`${parents} ${parents2}`))
    .addField(`**Children:**`, (`${kids} ${kids2} ${kids3}`))

message.channel.send(embed)
return

        }
}


} else {
    

    if(spouse1.spouse !== '0'){

        let spouse121;
  
        await db.promise().query('SELECT * FROM marriage WHERE user_id = ?', [spouse1.spouse]).then(result => {
          spouse121 = result[0][0]
        
        })
        
        if(!spouse121) {
        
          db.query(`INSERT INTO marriage (user_id) VALUES(?)`, [spouse1.spouse]);
        return message.inlineReply(`<@${spouse1.spouse}> has no children`)
        }

        if(spouse1.kid1 === '0' && spouse1.kid2 === '0' && spouse1.kid3 === '0' && spouse121.kid1 === '0' && spouse121.kid2 === '0' && spouse121.kid3 === '0'){

    let kids = message.guild.members.cache.get(spouse1.kid1) || ' '
    let kids2 = message.guild.members.cache.get(spouse1.kid2) || ' '
    let kids3 = message.guild.members.cache.get(spouse1.kid3) || ' '
    let kids4 = message.guild.members.cache.get(spouse121.kid1) || ' '
    let kids5 = message.guild.members.cache.get(spouse121.kid2) || ' '
    let kids6 = message.guild.members.cache.get(spouse121.kid3) || ' '
    

    const embed = new Discord.MessageEmbed()
    .setAuthor('Family Tree', message.author.displayAvatarURL())
    .addField(`**Spouse:**`, spouse2)
    .addField(`**Parents:**`, (`${parents}`))
    .addField(`**Children:**`, (`None`))
message.channel.send(embed)
return
        } else {
            let kids = message.guild.members.cache.get(spouse1.kid1) || ' '
            let kids2 = message.guild.members.cache.get(spouse1.kid2) || ' '
            let kids3 = message.guild.members.cache.get(spouse1.kid3) || ' '
            let kids4 = message.guild.members.cache.get(spouse121.kid1) || ' '
            let kids5 = message.guild.members.cache.get(spouse121.kid2) || ' '
            let kids6 = message.guild.members.cache.get(spouse121.kid3) || ' '
            
        
            const embed = new Discord.MessageEmbed()
            .setAuthor('Family Tree', message.author.displayAvatarURL())
            .addField(`**Spouse:**`, spouse2)
            .addField(`**Parents:**`, (`${parents}`))
            .addField(`**Children:**`, (`${kids} ${kids2} ${kids3} ${kids4} ${kids5} ${kids6}`))
        message.channel.send(embed)
        return

        }


    } else if(spouse1.spouse === '0'){

        if(spouse1.kid1 === '0' && spouse1.kid2 === '0' && spouse1.kid3 === '0' ){
    let kids = message.guild.members.cache.get(spouse1.kid1) || ' '
    let kids2 = message.guild.members.cache.get(spouse1.kid2) || ' '
    let kids3 = message.guild.members.cache.get(spouse1.kid3) || ' '
    
    

    const embed = new Discord.MessageEmbed()
    .setAuthor('Family Tree', message.author.displayAvatarURL())
    .addField(`**Spouse:**`, spouse2)
    .addField(`**Parents:**`, (`${parents}`))
    .addField(`**Children:**`, (`None`))

message.channel.send(embed)
return

        } else {
            let kids = message.guild.members.cache.get(spouse1.kid1) || ' '
    let kids2 = message.guild.members.cache.get(spouse1.kid2) || ' '
    let kids3 = message.guild.members.cache.get(spouse1.kid3) || ' '
    
    

    const embed = new Discord.MessageEmbed()
    .setAuthor('Family Tree', message.author.displayAvatarURL())
    .addField(`**Spouse:**`, spouse2)
    .addField(`**Parents:**`, (`${parents}`))
    .addField(`**Children:**`, (`${kids} ${kids2} ${kids3}`))

message.channel.send(embed)
return

        }}
}
}
// author ends
}};