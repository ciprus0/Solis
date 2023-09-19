const fs = require("fs")
const db = require("../../database/db")

module.exports = {
    name: 'rob',
    aliases: ['None'],
    category: 'Action',
    utilisation: '{prefix}rob [user]',
    module: 'economy',
    async execute(client, message, args, prefix) {
        const db1 = require("quick.db")
        db1.add(`commands_used`, 1)
        let user

        try {
            await db.promise().query('SELECT * FROM user WHERE user_id = ?', [message.author.id]).then(result => {
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



    let robbee = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if (!robbee) {
        message.inlineReply(new dsc.MessageEmbed()
            .setTitle("Nobody to rob")
            .setDescription(`Please supply someone to rob as i can't rob nobody`)
            .setColor("#2c2f33")
            .setThumbnail(message.guild.iconURL())
        )
       
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        client.limits.delete(`${command}-${message.author.id}`)
        return
    }

    if (robbee.user.id == message.author.id) {
        message.inlineReply(new dsc.MessageEmbed()
            .setTitle("Can't rob yourself")
            .setDescription(`Please supply someone to rob ... you cant rob yourself`)
            .setColor("#2c2f33")
            .setThumbnail(message.guild.iconURL())
        )
        
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        client.limits.delete(`${command}-${message.author.id}`)
        return
    }
    let userPocket = parseInt(user.pocket)
    let userBank = parseInt(user.bank)
    let robbeeBal
    try {
        await db.promise().query('SELECT * FROM user WHERE user_id = ?', [robbee.user.id]).then(result => {
            robbeeBal = result[0][0]
        })
    } catch (error) {
        console.log(error)
    }






    if(user.uselocker != 0){
        message.inlineReply(new dsc.MessageEmbed()
        .setTitle("Lock Enabled")
        .setDescription(`You currently have lock enabled, Please use \`${prefix}removelock\` to use the rob comand`)
        .setColor("#2c2f33")
        .setThumbnail(message.guild.iconURL())
    )
   
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
    client.limits.delete(`${command}-${message.author.id}`)
    return
    }

    if(user.usesquirelocker != 0){
        message.inlineReply(new dsc.MessageEmbed()
        .setTitle("Squire Lock Enabled")
        .setDescription(`You currently have the Squire Lock enabled, Please use \`${prefix}removesquirelock\` to use the rob comand`)
        .setColor("#2c2f33")
        .setThumbnail(message.guild.iconURL())
    )
   
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
    client.limits.delete(`${command}-${message.author.id}`)
    return
    }



    


    if(robbeeBal.uselocker != 0){
        message.inlineReply(new dsc.MessageEmbed()
        .setTitle("Users Lock Enabled")
        .setDescription(`${robbee} currently has lock enabled, you can't rob then unless they disable it`)
        .setColor("#2c2f33")
        .setThumbnail(message.guild.iconURL())
    )

        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
    client.limits.delete(`${command}-${message.author.id}`)
    return
    }


    if(robbeeBal.usesquirelocker != 0){
        message.inlineReply(new dsc.MessageEmbed()
        .setTitle("Squire Lock Enabled")
        .setDescription(`${robbee} has the Squire Padlock, so no, you will not be robbing them.`)
        .setColor("#2c2f33")
        .setThumbnail(message.guild.iconURL())
    )

        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
    client.limits.delete(`${command}-${message.author.id}`)
    return
    }

    if (parseInt(robbeeBal.pocket) <= 250) {
        message.inlineReply(new dsc.MessageEmbed()
            .setTitle("Person has no money")
            .setDescription(`This person has no money so you cant rob anything from them`)
            .setColor("#2c2f33")
            .setThumbnail(message.guild.iconURL())
        )
 
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        client.limits.delete(`${command}-${message.author.id}`)
        return
    }

    if (userPocket <= 500) {
        message.inlineReply(new dsc.MessageEmbed()
            .setTitle("You don\'t have enough money")
            .setDescription(`You need at least \`501\` nightbux **in your wallet** to use rob`)
            .setColor("#2c2f33")
            .setThumbnail(message.guild.iconURL())
        )

        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        client.limits.delete(`${command}-${message.author.id}`)
        return
    }

    
    if(robbeeBal.usebodyguard == 1){
        if(user.husky == 1){
            if(user.bat >= 1){
                const embed = new dsc.MessageEmbed()
                .setDescription(`Your dog sniffed out the **${robbee.user.username}**\'s bodyguard! Would you like to attack them with your baseball bat?
                \u200B
                Reply with **Y/Yes** or **N/No.**`)

        message.inlineReply(embed).then(async react => {

            let joina = m => m.author.id === message.author.id;
        let join = new Discord.MessageCollector(message.channel, joina, { max: 1 });
         
        join.on('collect', async msg => {
          if(msg.content.toLowerCase() === "cancel") {
            msg.channel.send(`Cancelled`)
            await react.delete()
            await join.stop()
         return
        }
          let channel = msg.content.toLowerCase();
          
          if(!channel) { msg.inlineReply(`Please say Y or N`) 
        
        return;
    }
    if(msg.content.toLowerCase().includes("yes") || msg.content.toLowerCase().includes('y')) {
        const changed = new dsc.MessageEmbed()
        .setAuthor('ATTACK', message.author.displayAvatarURL())
        .setDescription(`What would you like to do? \`Reply with the letter or action\`
\u200B
**A.** Hit
**B.** Trip
**C.** Dodge
**D.** Run`)

react.delete()
message.inlineReply(changed).then(async react => {

    let joina = m => m.author.id === message.author.id;
let join = new Discord.MessageCollector(message.channel, joina, { max: 1 });
 
join.on('collect', async msg => {
  if(msg.content.toLowerCase() === "cancel") {
    msg.channel.send(`Cancelled`)
    await react.delete()
    await join.stop()
 return
}
  let channel = msg.content.toLowerCase();
  
  if(!channel) { msg.inlineReply(`Please say Y or N`) 

return;
}
if(msg.content.toLowerCase() == "a" || msg.content.toLowerCase().includes('hit')) {
    
const changed = new dsc.MessageEmbed()
.setAuthor('ATTACK', message.author.displayAvatarURL())
.setDescription(`You have hit the bodyguard and they took damange! What would you like to do next? \`Reply with the letter or action\`
\u200B
**A.** Hit
**B.** Trip
**C.** Dodge
**D.** Run`)

react.delete()
message.inlineReply(changed).then(async react => {

    let joina = m => m.author.id === message.author.id;
let join2 = new Discord.MessageCollector(message.channel, joina, { max: 1 });
 
join2.on('collect', async msg => {
  if(msg.content.toLowerCase() === "cancel") {
    msg.channel.send(`Cancelled`)
    await react.delete()
    await join2.stop()
 return
}
  let channel = msg.content.toLowerCase();
  
  if(!channel) { msg.inlineReply(`Please say Y or N`) 

return;
}
if(msg.content.toLowerCase() == "a" || msg.content.toLowerCase().includes('hit')) {
    const chance5 = Math.floor(Math.random() * 5)
    if(chance5 == 1 || chance5 == 0 || chance5 == 2){
const changed = new dsc.MessageEmbed()
.setAuthor('ATTACK', message.author.displayAvatarURL())
.setDescription(`You have knocked out the bodyguard! Now you can rob the user.`)

db.query('UPDATE user SET bodyguard = bodyguard - 1 WHERE user_id = ?',[robbee.user.id])

react.delete()
message.inlineReply(changed)
await join2.stop()
return
    }  else {
        const changed = new dsc.MessageEmbed()
.setAuthor('ATTACK', message.author.displayAvatarURL())
.setDescription(`Your attack failed! You have been knocked out and sent to jail. Your weapon has been confiscated.`)


db.query('UPDATE user SET bat = bat - 1 WHERE user_id = ?',[robbee.user.id])
react.delete()
message.inlineReply(changed)
await join2.stop()
return
    }
} else if(msg.content.toLowerCase() == "b" || msg.content.toLowerCase().includes('trip')) {
    const chance5 = Math.floor(Math.random() * 5)
    if(chance5 == 1 || chance5 == 0 || chance5 == 2){
const changed = new dsc.MessageEmbed()
.setAuthor('ATTACK', message.author.displayAvatarURL())
.setDescription(`You have tripped and wounded the bodyguard! Now you can rob the user.`)
db.query('UPDATE user SET bodyguard = bodyguard - 1 WHERE user_id = ?',[robbee.user.id])
react.delete()
message.inlineReply(changed)
await join2.stop()
return
    }  else {
        const changed = new dsc.MessageEmbed()
.setAuthor('ATTACK', message.author.displayAvatarURL())
.setDescription(`Your attack failed! You have been knocked out and sent to jail.`)
db.query('UPDATE user SET bat = bat - 1 WHERE user_id = ?',[robbee.user.id])
react.delete()
message.inlineReply(changed)
await join2.stop()
return
    }
} else if(msg.content.toLowerCase() == "c" || msg.content.toLowerCase().includes('dodge')) {
    const chance5 = Math.floor(Math.random() * 5)
    if(chance5 == 1 || chance5 == 0 || chance5 == 2){
const changed = new dsc.MessageEmbed()
.setAuthor('ATTACK', message.author.displayAvatarURL())
.setDescription(`You have knocked out the bodyguard! Now you can rob the user.`)
db.query('UPDATE user SET bodyguard = bodyguard - 1 WHERE user_id = ?',[robbee.user.id])
react.delete()
message.inlineReply(changed)
await join2.stop()
return
    }  else {
        const changed = new dsc.MessageEmbed()
.setAuthor('ATTACK', message.author.displayAvatarURL())
.setDescription(`Your attack failed! You have been knocked out and sent to jail.`)
db.query('UPDATE user SET bat = bat - 1 WHERE user_id = ?',[robbee.user.id])
react.delete()
message.inlineReply(changed)
await join2.stop()
return
    }
} else if(msg.content.toLowerCase() == "d" || msg.content.toLowerCase().includes('run')) {
    const chance5 = Math.floor(Math.random() * 5)
    if(chance5 == 1 || chance5 == 0 || chance5 == 2){
const changed = new dsc.MessageEmbed()
.setAuthor('ATTACK', message.author.displayAvatarURL())
.setDescription(`You successfully fled!`)

react.delete()
message.inlineReply(changed)
await join2.stop()
return
    }  else {
        const changed = new dsc.MessageEmbed()
.setAuthor('ATTACK', message.author.displayAvatarURL())
.setDescription(`LOL. While fleeing, the bodyguard caught up to you and tackled you. You have been sent to jail. Your weapon has been confiscated.`)
db.query('UPDATE user SET bat = bat - 1 WHERE user_id = ?',[robbee.user.id])
react.delete()
message.inlineReply(changed)
await join2.stop()
return
    }
    
} else {
    message.inlineReply('Well you didn\'t provide an answer.. so I\'ll just ignore you.')
    await join2.stop()

    return
}
})})


} else if(msg.content.toLowerCase() == "b" || msg.content.toLowerCase().includes('trip')) {
   
const changed = new dsc.MessageEmbed()
.setAuthor('ATTACK', message.author.displayAvatarURL())
.setDescription(`You have tripped the bodyguard and they took damange! What would you like to do next? \`Reply with the letter or action\`
\u200B
**A.** Hit
**B.** Trip
**C.** Dodge
**D.** Run`)

react.delete()
message.inlineReply(changed).then(async react => {

    let joina = m => m.author.id === message.author.id;
let join2 = new Discord.MessageCollector(message.channel, joina, { max: 1 });
 
join2.on('collect', async msg => {
  if(msg.content.toLowerCase() === "cancel") {
    msg.channel.send(`Cancelled`)
    await react.delete()
    await join2.stop()
 return
}
  let channel = msg.content.toLowerCase();
  
  if(!channel) { msg.inlineReply(`Please say Y or N`) 

return;
}
if(msg.content.toLowerCase() == "a" || msg.content.toLowerCase().includes('hit')) {
    const chance5 = Math.floor(Math.random() * 5)
    if(chance5 == 1 || chance5 == 0 || chance5 == 2){
const changed = new dsc.MessageEmbed()
.setAuthor('ATTACK', message.author.displayAvatarURL())
.setDescription(`You have knocked out the bodyguard! Now you can rob the user.`)

db.query('UPDATE user SET bodyguard = bodyguard - 1 WHERE user_id = ?',[robbee.user.id])

react.delete()
message.inlineReply(changed)
await join2.stop()
return
    }  else {
        const changed = new dsc.MessageEmbed()
.setAuthor('ATTACK', message.author.displayAvatarURL())
.setDescription(`Your attack failed! You have been knocked out and sent to jail. Your weapon has been confiscated.`)


db.query('UPDATE user SET bat = bat - 1 WHERE user_id = ?',[robbee.user.id])
react.delete()
message.inlineReply(changed)
await join2.stop()
return
    }
} else if(msg.content.toLowerCase() == "b" || msg.content.toLowerCase().includes('trip')) {
    const chance5 = Math.floor(Math.random() * 5)
    if(chance5 == 1 || chance5 == 0 || chance5 == 2){
const changed = new dsc.MessageEmbed()
.setAuthor('ATTACK', message.author.displayAvatarURL())
.setDescription(`You have tripped and wounded the bodyguard! Now you can rob the user.`)
db.query('UPDATE user SET bodyguard = bodyguard - 1 WHERE user_id = ?',[robbee.user.id])
react.delete()
message.inlineReply(changed)
await join2.stop()
return
    }  else {
        const changed = new dsc.MessageEmbed()
.setAuthor('ATTACK', message.author.displayAvatarURL())
.setDescription(`Your attack failed! You have been knocked out and sent to jail.`)
db.query('UPDATE user SET bat = bat - 1 WHERE user_id = ?',[robbee.user.id])
react.delete()
message.inlineReply(changed)
await join2.stop()
return
    }
} else if(msg.content.toLowerCase() == "c" || msg.content.toLowerCase().includes('dodge')) {
    const chance5 = Math.floor(Math.random() * 5)
    if(chance5 == 1 || chance5 == 0 || chance5 == 2){
const changed = new dsc.MessageEmbed()
.setAuthor('ATTACK', message.author.displayAvatarURL())
.setDescription(`You have knocked out the bodyguard! Now you can rob the user.`)
db.query('UPDATE user SET bodyguard = bodyguard - 1 WHERE user_id = ?',[robbee.user.id])
react.delete()
message.inlineReply(changed)
await join2.stop()
return
    }  else {
        const changed = new dsc.MessageEmbed()
.setAuthor('ATTACK', message.author.displayAvatarURL())
.setDescription(`Your attack failed! You have been knocked out and sent to jail.`)
db.query('UPDATE user SET bat = bat - 1 WHERE user_id = ?',[robbee.user.id])
react.delete()
message.inlineReply(changed)
await join2.stop()
return
    }
} else if(msg.content.toLowerCase() == "d" || msg.content.toLowerCase().includes('run')) {
    const chance5 = Math.floor(Math.random() * 5)
    if(chance5 == 1 || chance5 == 0 || chance5 == 2){
const changed = new dsc.MessageEmbed()
.setAuthor('ATTACK', message.author.displayAvatarURL())
.setDescription(`You successfully fled!`)

react.delete()
message.inlineReply(changed)
await join2.stop()
return
    }  else {
        const changed = new dsc.MessageEmbed()
.setAuthor('ATTACK', message.author.displayAvatarURL())
.setDescription(`LOL. While fleeing, the bodyguard caught up to you and tackled you. You have been sent to jail. Your weapon has been confiscated.`)
db.query('UPDATE user SET bat = bat - 1 WHERE user_id = ?',[robbee.user.id])
react.delete()
message.inlineReply(changed)
await join2.stop()
return
    }
    
} else {
    message.inlineReply('Well you didn\'t provide an answer.. so I\'ll just ignore you.')
    await join2.stop()
    return
}
})})


} else if(msg.content.toLowerCase() == "c" || msg.content.toLowerCase().includes('dodge')) {
   
    const changed = new dsc.MessageEmbed()
    .setAuthor('ATTACK', message.author.displayAvatarURL())
    .setDescription(`You have dodged the bodyguard\'s attack! What would you like to do next? \`Reply with the letter or action\`
    \u200B
    **A.** Hit
    **B.** Trip
    **C.** Dodge
    **D.** Run`)
    
    react.delete()
    message.inlineReply(changed).then(async react => {
    
        let joina = m => m.author.id === message.author.id;
    let join2 = new Discord.MessageCollector(message.channel, joina, { max: 1 });
     
    join2.on('collect', async msg => {
      if(msg.content.toLowerCase() === "cancel") {
        msg.channel.send(`Cancelled`)
        await react.delete()
        await join2.stop()
     return
    }
      let channel = msg.content.toLowerCase();
      
      if(!channel) { msg.inlineReply(`Please say Y or N`) 
    
    return;
    }
    if(msg.content.toLowerCase() == "a" || msg.content.toLowerCase().includes('hit')) {
        const chance5 = Math.floor(Math.random() * 5)
        if(chance5 == 1 || chance5 == 0 || chance5 == 2){
    const changed = new dsc.MessageEmbed()
    .setAuthor('ATTACK', message.author.displayAvatarURL())
    .setDescription(`You have knocked out the bodyguard! Now you can rob the user.`)
    
    db.query('UPDATE user SET bodyguard = bodyguard - 1 WHERE user_id = ?',[robbee.user.id])
    
    react.delete()
    message.inlineReply(changed)
    await join2.stop()
    return
        }  else {
            const changed = new dsc.MessageEmbed()
    .setAuthor('ATTACK', message.author.displayAvatarURL())
    .setDescription(`Your attack failed! You have been knocked out and sent to jail. Your weapon has been confiscated.`)
    
    
    db.query('UPDATE user SET bat = bat - 1 WHERE user_id = ?',[robbee.user.id])
    react.delete()
    message.inlineReply(changed)
    await join2.stop()
    return
        }
    } else if(msg.content.toLowerCase() == "b" || msg.content.toLowerCase().includes('trip')) {
        const chance5 = Math.floor(Math.random() * 5)
        if(chance5 == 1 || chance5 == 0 || chance5 == 2){
    const changed = new dsc.MessageEmbed()
    .setAuthor('ATTACK', message.author.displayAvatarURL())
    .setDescription(`You have tripped and wounded the bodyguard! Now you can rob the user.`)
    db.query('UPDATE user SET bodyguard = bodyguard - 1 WHERE user_id = ?',[robbee.user.id])
    react.delete()
    message.inlineReply(changed)
    await join2.stop()
    return
        }  else {
            const changed = new dsc.MessageEmbed()
    .setAuthor('ATTACK', message.author.displayAvatarURL())
    .setDescription(`Your attack failed! You have been knocked out and sent to jail.`)
    db.query('UPDATE user SET bat = bat - 1 WHERE user_id = ?',[robbee.user.id])
    react.delete()
    message.inlineReply(changed)
    await join2.stop()
    return
        }
    } else if(msg.content.toLowerCase() == "c" || msg.content.toLowerCase().includes('dodge')) {
        const chance5 = Math.floor(Math.random() * 5)
        if(chance5 == 1 || chance5 == 0 || chance5 == 2){
    const changed = new dsc.MessageEmbed()
    .setAuthor('ATTACK', message.author.displayAvatarURL())
    .setDescription(`You have knocked out the bodyguard! Now you can rob the user.`)
    db.query('UPDATE user SET bodyguard = bodyguard - 1 WHERE user_id = ?',[robbee.user.id])
    react.delete()
    message.inlineReply(changed)
    await join2.stop()
    return
        }  else {
            const changed = new dsc.MessageEmbed()
    .setAuthor('ATTACK', message.author.displayAvatarURL())
    .setDescription(`Your attack failed! You have been knocked out and sent to jail.`)
    db.query('UPDATE user SET bat = bat - 1 WHERE user_id = ?',[robbee.user.id])
    react.delete()
    message.inlineReply(changed)
    await join2.stop()
    return
        }
    } else if(msg.content.toLowerCase() == "d" || msg.content.toLowerCase().includes('run')) {
        const chance5 = Math.floor(Math.random() * 5)
        if(chance5 == 1 || chance5 == 0 || chance5 == 2){
    const changed = new dsc.MessageEmbed()
    .setAuthor('ATTACK', message.author.displayAvatarURL())
    .setDescription(`You successfully fled!`)
    
    react.delete()
    message.inlineReply(changed)
    await join2.stop()
    return
        }  else {
            const changed = new dsc.MessageEmbed()
    .setAuthor('ATTACK', message.author.displayAvatarURL())
    .setDescription(`LOL. While fleeing, the bodyguard caught up to you and tackled you. You have been sent to jail. Your weapon has been confiscated.`)
    db.query('UPDATE user SET bat = bat - 1 WHERE user_id = ?',[robbee.user.id])
    react.delete()
    message.inlineReply(changed)
    await join2.stop()
    return
        }
        
    } else {
        message.inlineReply('Well you didn\'t provide an answer.. so I\'ll just ignore you.')
        await join2.stop()
        return
    }
    })})
    
    
    } else if(msg.content.toLowerCase().includes('run') || msg.content.toLowerCase() == 'd'){
        const changed = new dsc.MessageEmbed()
        .setAuthor('Flee', message.author.displayAvatarURL())
        .setDescription('LOL. You ran away like the coward you are.')
        react.delete()
        message.inlineReply(changed)
        await join2.stop()
        return
    } else {
        message.inlineReply('Well you didn\'t provide an answer.. so I\'ll just ignore you.')
        await join2.stop()
        return
    }
})})

    } else if(msg.content.toLowerCase().includes("no") || msg.content.toLowerCase().includes('n')) {
        const changed = new dsc.MessageEmbed()
        .setAuthor('Flee', message.author.displayAvatarURL())
        .setDescription('LOL. You ran away like the coward you are.')
        react.delete()
        message.inlineReply(changed)
        return 
    } else {
        message.inlineReply('Well you didn\'t provide an option... so I\'ll just ignore you.')
    }

})})
        
        
            } else if(user.brassknucks >= 1){
                const embed = new dsc.MessageEmbed()
                .setDescription(`Your dog sniffed out the **${robbee.user.username}**\'s bodyguard! Would you like to attack them with your brass knuckles?
                \u200B
                Reply with **Y/Yes** or **N/No.**`)

        message.inlineReply(embed).then(async react => {

            let joina = m => m.author.id === message.author.id;
        let join = new Discord.MessageCollector(message.channel, joina, { max: 1 });
         
        join.on('collect', async msg => {
          if(msg.content.toLowerCase() === "cancel") {
            msg.channel.send(`Cancelled`)
            await react.delete()
            await join.stop()
         return
        }
          let channel = msg.content.toLowerCase();
          
          if(!channel) { msg.inlineReply(`Please say Y or N`) 
        
        return;
    }
    if(msg.content.toLowerCase().includes("yes") || msg.content.toLowerCase().includes('y')) {
        const changed = new dsc.MessageEmbed()
        .setAuthor('ATTACK', message.author.displayAvatarURL())
        .setDescription(`What would you like to do? \`Reply with the letter or action\`
\u200B
**A.** Punch
**B.** Trip
**C.** Dodge
**D.** Run`)

react.delete()
message.inlineReply(changed).then(async react => {

    let joina = m => m.author.id === message.author.id;
let join = new Discord.MessageCollector(message.channel, joina, { max: 1 });
 
join.on('collect', async msg => {
  if(msg.content.toLowerCase() === "cancel") {
    msg.channel.send(`Cancelled`)
    await react.delete()
    await join.stop()
 return
}
  let channel = msg.content.toLowerCase();
  
  if(!channel) { msg.inlineReply(`Please say Y or N`) 

return;
}
if(msg.content.toLowerCase() == "a" || msg.content.toLowerCase().includes('punch')) {
    
const changed = new dsc.MessageEmbed()
.setAuthor('ATTACK', message.author.displayAvatarURL())
.setDescription(`You have punched the bodyguard and they took damange! What would you like to do next? \`Reply with the letter or action\`
\u200B
**A.** Punch
**B.** Trip
**C.** Dodge
**D.** Run`)

react.delete()
message.inlineReply(changed).then(async react => {

    let joina = m => m.author.id === message.author.id;
let join2 = new Discord.MessageCollector(message.channel, joina, { max: 1 });
 
join2.on('collect', async msg => {
  if(msg.content.toLowerCase() === "cancel") {
    msg.channel.send(`Cancelled`)
    await react.delete()
    await join2.stop()

 return
}
  let channel = msg.content.toLowerCase();
  
  if(!channel) { msg.inlineReply(`Please say Y or N`) 

return;
}
if(msg.content.toLowerCase() == "a" || msg.content.toLowerCase().includes('punch')) {
    const chance5 = Math.floor(Math.random() * 5)
    if(chance5 == 1 || chance5 == 0 || chance5 == 2){
const changed = new dsc.MessageEmbed()
.setAuthor('ATTACK', message.author.displayAvatarURL())
.setDescription(`You have knocked out the bodyguard! Now you can rob the user.`)

db.query('UPDATE user SET bodyguard = bodyguard - 1 WHERE user_id = ?',[robbee.user.id])

react.delete()
message.inlineReply(changed)
await join2.stop()
return
    }  else {
        const changed = new dsc.MessageEmbed()
.setAuthor('ATTACK', message.author.displayAvatarURL())
.setDescription(`Your attack failed! You have been knocked out and sent to jail. Your weapon has been confiscated.`)


db.query('UPDATE user SET brassknucks = brassknucks - 1 WHERE user_id = ?',[robbee.user.id])
react.delete()
message.inlineReply(changed)
await join2.stop()
return
    }
} else if(msg.content.toLowerCase() == "b" || msg.content.toLowerCase().includes('trip')) {
    const chance5 = Math.floor(Math.random() * 5)
    if(chance5 == 1 || chance5 == 0 || chance5 == 2){
const changed = new dsc.MessageEmbed()
.setAuthor('ATTACK', message.author.displayAvatarURL())
.setDescription(`You have tripped and wounded the bodyguard! Now you can rob the user.`)
db.query('UPDATE user SET bodyguard = bodyguard - 1 WHERE user_id = ?',[robbee.user.id])
react.delete()
message.inlineReply(changed)
await join2.stop()
return
    }  else {
        const changed = new dsc.MessageEmbed()
.setAuthor('ATTACK', message.author.displayAvatarURL())
.setDescription(`Your attack failed! You have been knocked out and sent to jail.`)
db.query('UPDATE user SET brassknucks = brassknucks - 1 WHERE user_id = ?',[robbee.user.id])
react.delete()
message.inlineReply(changed)
await join2.stop()
return
    }
} else if(msg.content.toLowerCase() == "c" || msg.content.toLowerCase().includes('dodge')) {
    const chance5 = Math.floor(Math.random() * 5)
    if(chance5 == 1 || chance5 == 0 || chance5 == 2){
const changed = new dsc.MessageEmbed()
.setAuthor('ATTACK', message.author.displayAvatarURL())
.setDescription(`You have knocked out the bodyguard! Now you can rob the user.`)
db.query('UPDATE user SET bodyguard = bodyguard - 1 WHERE user_id = ?',[robbee.user.id])
react.delete()
message.inlineReply(changed)
await join2.stop()
return
    }  else {
        const changed = new dsc.MessageEmbed()
.setAuthor('ATTACK', message.author.displayAvatarURL())
.setDescription(`Your attack failed! You have been knocked out and sent to jail.`)
db.query('UPDATE user SET brassknucks = brassknucks - 1 WHERE user_id = ?',[robbee.user.id])
react.delete()
message.inlineReply(changed)
await join2.stop()
return
    }
} else if(msg.content.toLowerCase() == "d" || msg.content.toLowerCase().includes('run')) {
    const chance5 = Math.floor(Math.random() * 5)
    if(chance5 == 1 || chance5 == 0 || chance5 == 2){
const changed = new dsc.MessageEmbed()
.setAuthor('ATTACK', message.author.displayAvatarURL())
.setDescription(`You successfully fled!`)

react.delete()
message.inlineReply(changed)
await join2.stop()
return
    }  else {
        const changed = new dsc.MessageEmbed()
.setAuthor('ATTACK', message.author.displayAvatarURL())
.setDescription(`LOL. While fleeing, the bodyguard caught up to you and tackled you. You have been sent to jail. Your weapon has been confiscated.`)
db.query('UPDATE user SET brassknucks = brassknucks - 1 WHERE user_id = ?',[robbee.user.id])
react.delete()
message.inlineReply(changed)
await join2.stop()
return
    }
    
} else {
    message.inlineReply('Well you didn\'t provide an answer.. so I\'ll just ignore you.')
    await join2.stop()
    return
}
})})


} else if(msg.content.toLowerCase() == "b" || msg.content.toLowerCase().includes('trip')) {
   
const changed = new dsc.MessageEmbed()
.setAuthor('ATTACK', message.author.displayAvatarURL())
.setDescription(`You have tripped the bodyguard and they took damange! What would you like to do next? \`Reply with the letter or action\`
\u200B
**A.** Punch
**B.** Trip
**C.** Dodge
**D.** Run`)

react.delete()
message.inlineReply(changed).then(async react => {

    let joina = m => m.author.id === message.author.id;
let join2 = new Discord.MessageCollector(message.channel, joina, { max: 1 });
 
join2.on('collect', async msg => {
  if(msg.content.toLowerCase() === "cancel") {
    msg.channel.send(`Cancelled`)
    await react.delete()
    await join2.stop()
 return
}
  let channel = msg.content.toLowerCase();
  
  if(!channel) { msg.inlineReply(`Please say Y or N`) 

return;
}
if(msg.content.toLowerCase() == "a" || msg.content.toLowerCase().includes('punch')) {
    const chance5 = Math.floor(Math.random() * 5)
    if(chance5 == 1 || chance5 == 0 || chance5 == 2){
const changed = new dsc.MessageEmbed()
.setAuthor('ATTACK', message.author.displayAvatarURL())
.setDescription(`You have knocked out the bodyguard! Now you can rob the user.`)

db.query('UPDATE user SET bodyguard = bodyguard - 1 WHERE user_id = ?',[robbee.user.id])

react.delete()
message.inlineReply(changed)
await join2.stop()
return
    }  else {
        const changed = new dsc.MessageEmbed()
.setAuthor('ATTACK', message.author.displayAvatarURL())
.setDescription(`Your attack failed! You have been knocked out and sent to jail. Your weapon has been confiscated.`)


db.query('UPDATE user SET brassknucks = brassknucks - 1 WHERE user_id = ?',[robbee.user.id])
react.delete()
message.inlineReply(changed)
await join2.stop()
return
    }
} else if(msg.content.toLowerCase() == "b" || msg.content.toLowerCase().includes('trip')) {
    const chance5 = Math.floor(Math.random() * 5)
    if(chance5 == 1 || chance5 == 0 || chance5 == 2){
const changed = new dsc.MessageEmbed()
.setAuthor('ATTACK', message.author.displayAvatarURL())
.setDescription(`You have tripped and wounded the bodyguard! Now you can rob the user.`)
db.query('UPDATE user SET bodyguard = bodyguard - 1 WHERE user_id = ?',[robbee.user.id])
react.delete()
message.inlineReply(changed)
await join2.stop()
return
    }  else {
        const changed = new dsc.MessageEmbed()
.setAuthor('ATTACK', message.author.displayAvatarURL())
.setDescription(`Your attack failed! You have been knocked out and sent to jail.`)
db.query('UPDATE user SET brassknucks = brassknucks - 1 WHERE user_id = ?',[robbee.user.id])
react.delete()
message.inlineReply(changed)
await join2.stop()
return
    }
} else if(msg.content.toLowerCase() == "c" || msg.content.toLowerCase().includes('dodge')) {
    const chance5 = Math.floor(Math.random() * 5)
    if(chance5 == 1 || chance5 == 0 || chance5 == 2){
const changed = new dsc.MessageEmbed()
.setAuthor('ATTACK', message.author.displayAvatarURL())
.setDescription(`You have knocked out the bodyguard! Now you can rob the user.`)
db.query('UPDATE user SET bodyguard = bodyguard - 1 WHERE user_id = ?',[robbee.user.id])
react.delete()
message.inlineReply(changed)
await join2.stop()
return
    }  else {
        const changed = new dsc.MessageEmbed()
.setAuthor('ATTACK', message.author.displayAvatarURL())
.setDescription(`Your attack failed! You have been knocked out and sent to jail.`)
db.query('UPDATE user SET brassknucks = brassknucks - 1 WHERE user_id = ?',[robbee.user.id])
react.delete()
message.inlineReply(changed)
await join2.stop()
return
    }
} else if(msg.content.toLowerCase() == "d" || msg.content.toLowerCase().includes('run')) {
    const chance5 = Math.floor(Math.random() * 5)
    if(chance5 == 1 || chance5 == 0 || chance5 == 2){
const changed = new dsc.MessageEmbed()
.setAuthor('ATTACK', message.author.displayAvatarURL())
.setDescription(`You successfully fled!`)

react.delete()
message.inlineReply(changed)
await join2.stop()
return
    }  else {
        const changed = new dsc.MessageEmbed()
.setAuthor('ATTACK', message.author.displayAvatarURL())
.setDescription(`LOL. While fleeing, the bodyguard caught up to you and tackled you. You have been sent to jail. Your weapon has been confiscated.`)
db.query('UPDATE user SET brassknucks = brassknucks - 1 WHERE user_id = ?',[robbee.user.id])
react.delete()
message.inlineReply(changed)
await join2.stop()
return
    }
    
} else {
    message.inlineReply('Well you didn\'t provide an answer.. so I\'ll just ignore you.')
    await join2.stop()
    return
}
})})


} else if(msg.content.toLowerCase() == "c" || msg.content.toLowerCase().includes('dodge')) {
   
    const changed = new dsc.MessageEmbed()
    .setAuthor('ATTACK', message.author.displayAvatarURL())
    .setDescription(`You have dodged the bodyguard\'s attack! What would you like to do next? \`Reply with the letter or action\`
    \u200B
    **A.** Punch
    **B.** Trip
    **C.** Dodge
    **D.** Run`)
    
    react.delete()
    message.inlineReply(changed).then(async react => {
    
        let joina = m => m.author.id === message.author.id;
    let join2 = new Discord.MessageCollector(message.channel, joina, { max: 1 });
     
    join2.on('collect', async msg => {
      if(msg.content.toLowerCase() === "cancel") {
        msg.channel.send(`Cancelled`)
        await react.delete()
        await join2.stop()
     return
    }
      let channel = msg.content.toLowerCase();
      
      if(!channel) { msg.inlineReply(`Please say Y or N`) 
    
    return;
    }
    if(msg.content.toLowerCase() == "a" || msg.content.toLowerCase().includes('punch')) {
        const chance5 = Math.floor(Math.random() * 5)
        if(chance5 == 1 || chance5 == 0 || chance5 == 2){
    const changed = new dsc.MessageEmbed()
    .setAuthor('ATTACK', message.author.displayAvatarURL())
    .setDescription(`You have knocked out the bodyguard! Now you can rob the user.`)
    
    db.query('UPDATE user SET bodyguard = bodyguard - 1 WHERE user_id = ?',[robbee.user.id])
    
    react.delete()
    message.inlineReply(changed)
    await join2.stop()
    return
        }  else {
            const changed = new dsc.MessageEmbed()
    .setAuthor('ATTACK', message.author.displayAvatarURL())
    .setDescription(`Your attack failed! You have been knocked out and sent to jail. Your weapon has been confiscated.`)
    
    
    db.query('UPDATE user SET brassknucks = brassknucks - 1 WHERE user_id = ?',[robbee.user.id])
    react.delete()
    message.inlineReply(changed)
    await join2.stop()
    return
        }
    } else if(msg.content.toLowerCase() == "b" || msg.content.toLowerCase().includes('trip')) {
        const chance5 = Math.floor(Math.random() * 5)
        if(chance5 == 1 || chance5 == 0 || chance5 == 2){
    const changed = new dsc.MessageEmbed()
    .setAuthor('ATTACK', message.author.displayAvatarURL())
    .setDescription(`You have tripped and wounded the bodyguard! Now you can rob the user.`)
    db.query('UPDATE user SET bodyguard = bodyguard - 1 WHERE user_id = ?',[robbee.user.id])
    react.delete()
    message.inlineReply(changed)
    await join2.stop()
    return
        }  else {
            const changed = new dsc.MessageEmbed()
    .setAuthor('ATTACK', message.author.displayAvatarURL())
    .setDescription(`Your attack failed! You have been knocked out and sent to jail.`)
    db.query('UPDATE user SET brassknucks = brassknucks - 1 WHERE user_id = ?',[robbee.user.id])
    react.delete()
    message.inlineReply(changed)
    await join2.stop()
    return
        }
    } else if(msg.content.toLowerCase() == "c" || msg.content.toLowerCase().includes('dodge')) {
        const chance5 = Math.floor(Math.random() * 5)
        if(chance5 == 1 || chance5 == 0 || chance5 == 2){
    const changed = new dsc.MessageEmbed()
    .setAuthor('ATTACK', message.author.displayAvatarURL())
    .setDescription(`You have knocked out the bodyguard! Now you can rob the user.`)
    db.query('UPDATE user SET bodyguard = bodyguard - 1 WHERE user_id = ?',[robbee.user.id])
    react.delete()
    message.inlineReply(changed)
    await join2.stop()
    return
        }  else {
            const changed = new dsc.MessageEmbed()
    .setAuthor('ATTACK', message.author.displayAvatarURL())
    .setDescription(`Your attack failed! You have been knocked out and sent to jail.`)
    db.query('UPDATE user SET brassknucks = brassknucks - 1 WHERE user_id = ?',[robbee.user.id])
    react.delete()
    message.inlineReply(changed)
    await join2.stop()
    return
        }
    } else if(msg.content.toLowerCase() == "d" || msg.content.toLowerCase().includes('run')) {
        const chance5 = Math.floor(Math.random() * 5)
        if(chance5 == 1 || chance5 == 0 || chance5 == 2){
    const changed = new dsc.MessageEmbed()
    .setAuthor('ATTACK', message.author.displayAvatarURL())
    .setDescription(`You successfully fled!`)
    
    react.delete()
    message.inlineReply(changed)
    await join2.stop()
    return
        }  else {
            const changed = new dsc.MessageEmbed()
    .setAuthor('ATTACK', message.author.displayAvatarURL())
    .setDescription(`LOL. While fleeing, the bodyguard caught up to you and tackled you. You have been sent to jail. Your weapon has been confiscated.`)
    db.query('UPDATE user SET brassknucks = brassknucks - 1 WHERE user_id = ?',[robbee.user.id])
    react.delete()
    message.inlineReply(changed)
    await join2.stop()
    return
        }
        
    } else {
        message.inlineReply('Well you didn\'t provide an answer.. so I\'ll just ignore you.')
        await join2.stop()
        
        return
    }
    })})
    
    
    } else if(msg.content.toLowerCase().includes('run') || msg.content.toLowerCase() == 'd'){
        const changed = new dsc.MessageEmbed()
        .setAuthor('Flee', message.author.displayAvatarURL())
        .setDescription('LOL. You ran away like the coward you are.')
        react.delete()
        message.inlineReply(changed)
        await join2.stop()
        return
    } else {
        message.inlineReply('Well you didn\'t provide an answer.. so I\'ll just ignore you.')
        await join2.stop()
        return
    }
})})

    } else if(msg.content.toLowerCase().includes("no") || msg.content.toLowerCase().includes('n')) {
        const changed = new dsc.MessageEmbed()
        .setAuthor('Flee', message.author.displayAvatarURL())
        .setDescription('LOL. You ran away like the coward you are.')
        react.delete()
        message.inlineReply(changed)
        return 
    } else {
        message.inlineReply('Well you didn\'t provide an option... so I\'ll just ignore you.')
    }

})})
            } else if(user.golfclub >= 1){
                const embed = new dsc.MessageEmbed()
                .setDescription(`Your dog sniffed out the **${robbee.user.username}**\'s bodyguard! Would you like to attack them with your golf club?
                \u200B
                Reply with **Y/Yes** or **N/No.**`)

        message.inlineReply(embed).then(async react => {

            let joina = m => m.author.id === message.author.id;
        let join = new Discord.MessageCollector(message.channel, joina, { max: 1 });
         
        join.on('collect', async msg => {
          if(msg.content.toLowerCase() === "cancel") {
            msg.channel.send(`Cancelled`)
            await react.delete()
            await join.stop()
         return
        }
          let channel = msg.content.toLowerCase();
          
          if(!channel) { msg.inlineReply(`Please say Y or N`) 
        
        return;
    }
    if(msg.content.toLowerCase().includes("yes") || msg.content.toLowerCase().includes('y')) {
        const changed = new dsc.MessageEmbed()
        .setAuthor('ATTACK', message.author.displayAvatarURL())
        .setDescription(`What would you like to do? \`Reply with the letter or action\`
\u200B
**A.** Hit
**B.** Trip
**C.** Dodge
**D.** Run`)

react.delete()
message.inlineReply(changed).then(async react => {

    let joina = m => m.author.id === message.author.id;
let join = new Discord.MessageCollector(message.channel, joina, { max: 1 });
 
join.on('collect', async msg => {
  if(msg.content.toLowerCase() === "cancel") {
    msg.channel.send(`Cancelled`)
    await react.delete()
    await join.stop()
 return
}
  let channel = msg.content.toLowerCase();
  
  if(!channel) { msg.inlineReply(`Please say Y or N`) 

return;
}
if(msg.content.toLowerCase() == "a" || msg.content.toLowerCase().includes('hit')) {
    
const changed = new dsc.MessageEmbed()
.setAuthor('ATTACK', message.author.displayAvatarURL())
.setDescription(`You have hit the bodyguard and they took damange! What would you like to do next? \`Reply with the letter or action\`
\u200B
**A.** Hit
**B.** Trip
**C.** Dodge
**D.** Run`)

react.delete()
message.inlineReply(changed).then(async react => {

    let joina = m => m.author.id === message.author.id;
let join2 = new Discord.MessageCollector(message.channel, joina, { max: 1 });
 
join2.on('collect', async msg => {
  if(msg.content.toLowerCase() === "cancel") {
    msg.channel.send(`Cancelled`)
    await react.delete()
    await join2.stop()
 return
}
  let channel = msg.content.toLowerCase();
  
  if(!channel) { msg.inlineReply(`Please say Y or N`) 

return;
}
if(msg.content.toLowerCase() == "a" || msg.content.toLowerCase().includes('hit')) {
    const chance5 = Math.floor(Math.random() * 5)
    if(chance5 == 1 || chance5 == 0 || chance5 == 2){
const changed = new dsc.MessageEmbed()
.setAuthor('ATTACK', message.author.displayAvatarURL())
.setDescription(`You have knocked out the bodyguard! Now you can rob the user.`)

db.query('UPDATE user SET bodyguard = bodyguard - 1 WHERE user_id = ?',[robbee.user.id])

react.delete()
message.inlineReply(changed)
await join2.stop()
return
    }  else {
        const changed = new dsc.MessageEmbed()
.setAuthor('ATTACK', message.author.displayAvatarURL())
.setDescription(`Your attack failed! You have been knocked out and sent to jail. Your weapon has been confiscated.`)


db.query('UPDATE user SET golfclub = golfclub - 1 WHERE user_id = ?',[robbee.user.id])
react.delete()
message.inlineReply(changed)
await join2.stop()
return
    }
} else if(msg.content.toLowerCase() == "b" || msg.content.toLowerCase().includes('trip')) {
    const chance5 = Math.floor(Math.random() * 5)
    if(chance5 == 1 || chance5 == 0 || chance5 == 2){
const changed = new dsc.MessageEmbed()
.setAuthor('ATTACK', message.author.displayAvatarURL())
.setDescription(`You have tripped and wounded the bodyguard! Now you can rob the user.`)
db.query('UPDATE user SET bodyguard = bodyguard - 1 WHERE user_id = ?',[robbee.user.id])
react.delete()
message.inlineReply(changed)
await join2.stop()
return
    }  else {
        const changed = new dsc.MessageEmbed()
.setAuthor('ATTACK', message.author.displayAvatarURL())
.setDescription(`Your attack failed! You have been knocked out and sent to jail.`)
db.query('UPDATE user SET golfclub = golfclub - 1 WHERE user_id = ?',[robbee.user.id])
react.delete()
message.inlineReply(changed)
await join2.stop()
return
    }
} else if(msg.content.toLowerCase() == "c" || msg.content.toLowerCase().includes('dodge')) {
    const chance5 = Math.floor(Math.random() * 5)
    if(chance5 == 1 || chance5 == 0 || chance5 == 2){
const changed = new dsc.MessageEmbed()
.setAuthor('ATTACK', message.author.displayAvatarURL())
.setDescription(`You have knocked out the bodyguard! Now you can rob the user.`)
db.query('UPDATE user SET bodyguard = bodyguard - 1 WHERE user_id = ?',[robbee.user.id])
react.delete()
message.inlineReply(changed)
await join2.stop()
return
    }  else {
        const changed = new dsc.MessageEmbed()
.setAuthor('ATTACK', message.author.displayAvatarURL())
.setDescription(`Your attack failed! You have been knocked out and sent to jail.`)
db.query('UPDATE user SET golfclub = golfclub - 1 WHERE user_id = ?',[robbee.user.id])
react.delete()
message.inlineReply(changed)
await join2.stop()
return
    }
} else if(msg.content.toLowerCase() == "d" || msg.content.toLowerCase().includes('run')) {
    const chance5 = Math.floor(Math.random() * 5)
    if(chance5 == 1 || chance5 == 0 || chance5 == 2){
const changed = new dsc.MessageEmbed()
.setAuthor('ATTACK', message.author.displayAvatarURL())
.setDescription(`You successfully fled!`)

react.delete()
message.inlineReply(changed)
await join2.stop()
return
    }  else {
        const changed = new dsc.MessageEmbed()
.setAuthor('ATTACK', message.author.displayAvatarURL())
.setDescription(`LOL. While fleeing, the bodyguard caught up to you and tackled you. You have been sent to jail. Your weapon has been confiscated.`)
db.query('UPDATE user SET golfclub = golfclub - 1 WHERE user_id = ?',[robbee.user.id])
react.delete()
message.inlineReply(changed)
await join2.stop()
return
    }
    
} else {
    message.inlineReply('Well you didn\'t provide an answer.. so I\'ll just ignore you.')
    await join2.stop()
    return
}
})})


} else if(msg.content.toLowerCase() == "b" || msg.content.toLowerCase().includes('trip')) {
   
const changed = new dsc.MessageEmbed()
.setAuthor('ATTACK', message.author.displayAvatarURL())
.setDescription(`You have tripped the bodyguard and they took damange! What would you like to do next? \`Reply with the letter or action\`
\u200B
**A.** Hit
**B.** Trip
**C.** Dodge
**D.** Run`)

react.delete()
message.inlineReply(changed).then(async react => {

    let joina = m => m.author.id === message.author.id;
let join2 = new Discord.MessageCollector(message.channel, joina, { max: 1 });
 
join2.on('collect', async msg => {
  if(msg.content.toLowerCase() === "cancel") {
    msg.channel.send(`Cancelled`)
    await react.delete()
    await join2.stop()
 return
}
  let channel = msg.content.toLowerCase();
  
  if(!channel) { msg.inlineReply(`Please say Y or N`) 

return;
}
if(msg.content.toLowerCase() == "a" || msg.content.toLowerCase().includes('hit')) {
    const chance5 = Math.floor(Math.random() * 5)
    if(chance5 == 1 || chance5 == 0 || chance5 == 2){
const changed = new dsc.MessageEmbed()
.setAuthor('ATTACK', message.author.displayAvatarURL())
.setDescription(`You have knocked out the bodyguard! Now you can rob the user.`)

db.query('UPDATE user SET bodyguard = bodyguard - 1 WHERE user_id = ?',[robbee.user.id])

react.delete()
message.inlineReply(changed)
await join2.stop()
return
    }  else {
        const changed = new dsc.MessageEmbed()
.setAuthor('ATTACK', message.author.displayAvatarURL())
.setDescription(`Your attack failed! You have been knocked out and sent to jail. Your weapon has been confiscated.`)


db.query('UPDATE user SET golfclub = golfclub - 1 WHERE user_id = ?',[robbee.user.id])
react.delete()
message.inlineReply(changed)
await join2.stop()
return
    }
} else if(msg.content.toLowerCase() == "b" || msg.content.toLowerCase().includes('trip')) {
    const chance5 = Math.floor(Math.random() * 5)
    if(chance5 == 1 || chance5 == 0 || chance5 == 2){
const changed = new dsc.MessageEmbed()
.setAuthor('ATTACK', message.author.displayAvatarURL())
.setDescription(`You have tripped and wounded the bodyguard! Now you can rob the user.`)
db.query('UPDATE user SET bodyguard = bodyguard - 1 WHERE user_id = ?',[robbee.user.id])
react.delete()
message.inlineReply(changed)
await join2.stop()
return
    }  else {
        const changed = new dsc.MessageEmbed()
.setAuthor('ATTACK', message.author.displayAvatarURL())
.setDescription(`Your attack failed! You have been knocked out and sent to jail.`)
db.query('UPDATE user SET golfclub = golfclub - 1 WHERE user_id = ?',[robbee.user.id])
react.delete()
message.inlineReply(changed)
await join2.stop()
return
    }
} else if(msg.content.toLowerCase() == "c" || msg.content.toLowerCase().includes('dodge')) {
    const chance5 = Math.floor(Math.random() * 5)
    if(chance5 == 1 || chance5 == 0 || chance5 == 2){
const changed = new dsc.MessageEmbed()
.setAuthor('ATTACK', message.author.displayAvatarURL())
.setDescription(`You have knocked out the bodyguard! Now you can rob the user.`)
db.query('UPDATE user SET bodyguard = bodyguard - 1 WHERE user_id = ?',[robbee.user.id])
react.delete()
message.inlineReply(changed)
await join2.stop()
return
    }  else {
        const changed = new dsc.MessageEmbed()
.setAuthor('ATTACK', message.author.displayAvatarURL())
.setDescription(`Your attack failed! You have been knocked out and sent to jail.`)
db.query('UPDATE user SET golfclub = golfclub - 1 WHERE user_id = ?',[robbee.user.id])
react.delete()
message.inlineReply(changed)
await join2.stop()
return
    }
} else if(msg.content.toLowerCase() == "d" || msg.content.toLowerCase().includes('run')) {
    const chance5 = Math.floor(Math.random() * 5)
    if(chance5 == 1 || chance5 == 0 || chance5 == 2){
const changed = new dsc.MessageEmbed()
.setAuthor('ATTACK', message.author.displayAvatarURL())
.setDescription(`You successfully fled!`)

react.delete()
message.inlineReply(changed)
await join2.stop()
return
    }  else {
        const changed = new dsc.MessageEmbed()
.setAuthor('ATTACK', message.author.displayAvatarURL())
.setDescription(`LOL. While fleeing, the bodyguard caught up to you and tackled you. You have been sent to jail. Your weapon has been confiscated.`)
db.query('UPDATE user SET golfclub = golfclub - 1 WHERE user_id = ?',[robbee.user.id])
react.delete()
message.inlineReply(changed)
await join2.stop()
return
    }
    
} else {
    message.inlineReply('Well you didn\'t provide an answer.. so I\'ll just ignore you.')
    await join2.stop()
    return
}
})})


} else if(msg.content.toLowerCase() == "c" || msg.content.toLowerCase().includes('dodge')) {
   
    const changed = new dsc.MessageEmbed()
    .setAuthor('ATTACK', message.author.displayAvatarURL())
    .setDescription(`You have dodged the bodyguard\'s attack! What would you like to do next? \`Reply with the letter or action\`
    \u200B
    **A.** Hit
    **B.** Trip
    **C.** Dodge
    **D.** Run`)
    
    react.delete()
    message.inlineReply(changed).then(async react => {
    
        let joina = m => m.author.id === message.author.id;
    let join2 = new Discord.MessageCollector(message.channel, joina, { max: 1 });
     
    join2.on('collect', async msg => {
      if(msg.content.toLowerCase() === "cancel") {
        msg.channel.send(`Cancelled`)
        await react.delete()
        await join2.stop()
     return
    }
      let channel = msg.content.toLowerCase();
      
      if(!channel) { msg.inlineReply(`Please say Y or N`) 
    
    return;
    }
    if(msg.content.toLowerCase() == "a" || msg.content.toLowerCase().includes('hit')) {
        const chance5 = Math.floor(Math.random() * 5)
        if(chance5 == 1 || chance5 == 0 || chance5 == 2){
    const changed = new dsc.MessageEmbed()
    .setAuthor('ATTACK', message.author.displayAvatarURL())
    .setDescription(`You have knocked out the bodyguard! Now you can rob the user.`)
    
    db.query('UPDATE user SET bodyguard = bodyguard - 1 WHERE user_id = ?',[robbee.user.id])
    
    react.delete()
    message.inlineReply(changed)
    await join2.stop()
    return
        }  else {
            const changed = new dsc.MessageEmbed()
    .setAuthor('ATTACK', message.author.displayAvatarURL())
    .setDescription(`Your attack failed! You have been knocked out and sent to jail. Your weapon has been confiscated.`)
    
    
    db.query('UPDATE user SET golfclub = golfclub - 1 WHERE user_id = ?',[robbee.user.id])
    react.delete()
    message.inlineReply(changed)
    await join2.stop()
    return
        }
    } else if(msg.content.toLowerCase() == "b" || msg.content.toLowerCase().includes('trip')) {
        const chance5 = Math.floor(Math.random() * 5)
        if(chance5 == 1 || chance5 == 0 || chance5 == 2){
    const changed = new dsc.MessageEmbed()
    .setAuthor('ATTACK', message.author.displayAvatarURL())
    .setDescription(`You have tripped and wounded the bodyguard! Now you can rob the user.`)
    db.query('UPDATE user SET bodyguard = bodyguard - 1 WHERE user_id = ?',[robbee.user.id])
    react.delete()
    message.inlineReply(changed)
    await join2.stop()
    return
        }  else {
            const changed = new dsc.MessageEmbed()
    .setAuthor('ATTACK', message.author.displayAvatarURL())
    .setDescription(`Your attack failed! You have been knocked out and sent to jail.`)
    db.query('UPDATE user SET golfclub = golfclub - 1 WHERE user_id = ?',[robbee.user.id])
    react.delete()
    message.inlineReply(changed)
    await join2.stop()
    return
        }
    } else if(msg.content.toLowerCase() == "c" || msg.content.toLowerCase().includes('dodge')) {
        const chance5 = Math.floor(Math.random() * 5)
        if(chance5 == 1 || chance5 == 0 || chance5 == 2){
    const changed = new dsc.MessageEmbed()
    .setAuthor('ATTACK', message.author.displayAvatarURL())
    .setDescription(`You have knocked out the bodyguard! Now you can rob the user.`)
    db.query('UPDATE user SET bodyguard = bodyguard - 1 WHERE user_id = ?',[robbee.user.id])
    react.delete()
    message.inlineReply(changed)
    await join2.stop()
    return
        }  else {
            const changed = new dsc.MessageEmbed()
    .setAuthor('ATTACK', message.author.displayAvatarURL())
    .setDescription(`Your attack failed! You have been knocked out and sent to jail.`)
    db.query('UPDATE user SET golfclub = golfclub - 1 WHERE user_id = ?',[robbee.user.id])
    react.delete()
    message.inlineReply(changed)
    await join2.stop()
    return
        }
    } else if(msg.content.toLowerCase() == "d" || msg.content.toLowerCase().includes('run')) {
        const chance5 = Math.floor(Math.random() * 5)
        if(chance5 == 1 || chance5 == 0 || chance5 == 2){
    const changed = new dsc.MessageEmbed()
    .setAuthor('ATTACK', message.author.displayAvatarURL())
    .setDescription(`You successfully fled!`)
    
    react.delete()
    message.inlineReply(changed)
    await join2.stop()
    return
        }  else {
            const changed = new dsc.MessageEmbed()
    .setAuthor('ATTACK', message.author.displayAvatarURL())
    .setDescription(`LOL. While fleeing, the bodyguard caught up to you and tackled you. You have been sent to jail. Your weapon has been confiscated.`)
    db.query('UPDATE user SET golfclub = golfclub - 1 WHERE user_id = ?',[robbee.user.id])
    react.delete()
    message.inlineReply(changed)
    await join2.stop()
    return
        }
        
    } else {
        message.inlineReply('Well you didn\'t provide an answer.. so I\'ll just ignore you.')
        await join2.stop()
        return
    }
    })})
    
    
    } else if(msg.content.toLowerCase().includes('run') || msg.content.toLowerCase() == 'd'){
        const changed = new dsc.MessageEmbed()
        .setAuthor('Flee', message.author.displayAvatarURL())
        .setDescription('LOL. You ran away like the coward you are.')
        react.delete()
        message.inlineReply(changed)
        await join2.stop()
        return
    } else {
        message.inlineReply('Well you didn\'t provide an answer.. so I\'ll just ignore you.')
        await join2.stop()
        return
    }
})})

    } else if(msg.content.toLowerCase().includes("no") || msg.content.toLowerCase().includes('n')) {
        const changed = new dsc.MessageEmbed()
        .setAuthor('Flee', message.author.displayAvatarURL())
        .setDescription('LOL. You ran away like the coward you are.')
        react.delete()
        message.inlineReply(changed)
        return 
    } else {
        message.inlineReply('Well you didn\'t provide an option... so I\'ll just ignore you.')
    }

})})
            } else if(user.machete >= 1){
                const embed = new dsc.MessageEmbed()
                .setDescription(`Your dog sniffed out the **${robbee.user.username}**\'s bodyguard! Would you like to attack them with your machete?
                \u200B
                Reply with **Y/Yes** or **N/No.**`)

        message.inlineReply(embed).then(async react => {

            let joina = m => m.author.id === message.author.id;
        let join = new Discord.MessageCollector(message.channel, joina, { max: 1 });
         
        join.on('collect', async msg => {
          if(msg.content.toLowerCase() === "cancel") {
            msg.channel.send(`Cancelled`)
            await react.delete()
            await join.stop()
         return
        }
          let channel = msg.content.toLowerCase();
          
          if(!channel) { msg.inlineReply(`Please say Y or N`) 
        
        return;
    }
    if(msg.content.toLowerCase().includes("yes") || msg.content.toLowerCase().includes('y')) {
        const changed = new dsc.MessageEmbed()
        .setAuthor('ATTACK', message.author.displayAvatarURL())
        .setDescription(`What would you like to do? \`Reply with the letter or action\`
\u200B
**A.** Hit
**B.** Stab
**C.** Dodge
**D.** Run`)

react.delete()
message.inlineReply(changed).then(async react => {

    let joina = m => m.author.id === message.author.id;
let join = new Discord.MessageCollector(message.channel, joina, { max: 1 });
 
join.on('collect', async msg => {
  if(msg.content.toLowerCase() === "cancel") {
    msg.channel.send(`Cancelled`)
    await react.delete()
    await join.stop()
 return
}
  let channel = msg.content.toLowerCase();
  
  if(!channel) { msg.inlineReply(`Please say Y or N`) 

return;
}
if(msg.content.toLowerCase() == "a" || msg.content.toLowerCase().includes('hit')) {
    
const changed = new dsc.MessageEmbed()
.setAuthor('ATTACK', message.author.displayAvatarURL())
.setDescription(`You have hit the bodyguard and they took damange! What would you like to do next? \`Reply with the letter or action\`
\u200B
**A.** Hit
**B.** Stab
**C.** Dodge
**D.** Run`)

react.delete()
message.inlineReply(changed).then(async react => {

    let joina = m => m.author.id === message.author.id;
let join2 = new Discord.MessageCollector(message.channel, joina, { max: 1 });
 
join2.on('collect', async msg => {
  if(msg.content.toLowerCase() === "cancel") {
    msg.channel.send(`Cancelled`)
    await react.delete()
    await join2.stop()
 return
}
  let channel = msg.content.toLowerCase();
  
  if(!channel) { msg.inlineReply(`Please say Y or N`) 

return;
}
if(msg.content.toLowerCase() == "a" || msg.content.toLowerCase().includes('hit')) {
    const chance5 = Math.floor(Math.random() * 5)
    if(chance5 == 1 || chance5 == 0 || chance5 == 2){
const changed = new dsc.MessageEmbed()
.setAuthor('ATTACK', message.author.displayAvatarURL())
.setDescription(`You have knocked out the bodyguard! Now you can rob the user.`)

db.query('UPDATE user SET bodyguard = bodyguard - 1 WHERE user_id = ?',[robbee.user.id])

react.delete()
message.inlineReply(changed)
await join2.stop()
return
    }  else {
        const changed = new dsc.MessageEmbed()
.setAuthor('ATTACK', message.author.displayAvatarURL())
.setDescription(`Your attack failed! You have been knocked out and sent to jail. Your weapon has been confiscated.`)


db.query('UPDATE user SET machete = machete - 1 WHERE user_id = ?',[robbee.user.id])
react.delete()
message.inlineReply(changed)
await join2.stop()
return
    }
} else if(msg.content.toLowerCase() == "b" || msg.content.toLowerCase().includes('stab')) {
    const chance5 = Math.floor(Math.random() * 5)
    if(chance5 == 1 || chance5 == 0 || chance5 == 2){
const changed = new dsc.MessageEmbed()
.setAuthor('ATTACK', message.author.displayAvatarURL())
.setDescription(`You have stabbed and wounded the bodyguard! Now you can rob the user.`)
db.query('UPDATE user SET bodyguard = bodyguard - 1 WHERE user_id = ?',[robbee.user.id])
react.delete()
message.inlineReply(changed)
await join2.stop()
return
    }  else {
        const changed = new dsc.MessageEmbed()
.setAuthor('ATTACK', message.author.displayAvatarURL())
.setDescription(`Your attack failed! You have been knocked out and sent to jail.`)
db.query('UPDATE user SET machete = machete - 1 WHERE user_id = ?',[robbee.user.id])
react.delete()
message.inlineReply(changed)
await join2.stop()
return
    }
} else if(msg.content.toLowerCase() == "c" || msg.content.toLowerCase().includes('dodge')) {
    const chance5 = Math.floor(Math.random() * 5)
    if(chance5 == 1 || chance5 == 0 || chance5 == 2){
const changed = new dsc.MessageEmbed()
.setAuthor('ATTACK', message.author.displayAvatarURL())
.setDescription(`You have knocked out the bodyguard! Now you can rob the user.`)
db.query('UPDATE user SET bodyguard = bodyguard - 1 WHERE user_id = ?',[robbee.user.id])
react.delete()
message.inlineReply(changed)
await join2.stop()
return
    }  else {
        const changed = new dsc.MessageEmbed()
.setAuthor('ATTACK', message.author.displayAvatarURL())
.setDescription(`Your attack failed! You have been knocked out and sent to jail.`)
db.query('UPDATE user SET machete = machete - 1 WHERE user_id = ?',[robbee.user.id])
react.delete()
message.inlineReply(changed)
await join2.stop()
return
    }
} else if(msg.content.toLowerCase() == "d" || msg.content.toLowerCase().includes('run')) {
    const chance5 = Math.floor(Math.random() * 5)
    if(chance5 == 1 || chance5 == 0 || chance5 == 2){
const changed = new dsc.MessageEmbed()
.setAuthor('ATTACK', message.author.displayAvatarURL())
.setDescription(`You successfully fled!`)

react.delete()
message.inlineReply(changed)
await join2.stop()
return
    }  else {
        const changed = new dsc.MessageEmbed()
.setAuthor('ATTACK', message.author.displayAvatarURL())
.setDescription(`LOL. While fleeing, the bodyguard caught up to you and tackled you. You have been sent to jail. Your weapon has been confiscated.`)
db.query('UPDATE user SET machete = machete - 1 WHERE user_id = ?',[robbee.user.id])
react.delete()
message.inlineReply(changed)
await join2.stop()
return
    }
    
} else {
    message.inlineReply('Well you didn\'t provide an answer.. so I\'ll just ignore you.')
    await join2.stop()
    return
}
})})


} else if(msg.content.toLowerCase() == "b" || msg.content.toLowerCase().includes('stab')) {
   
const changed = new dsc.MessageEmbed()
.setAuthor('ATTACK', message.author.displayAvatarURL())
.setDescription(`You have stabbed the bodyguard and they took damange! What would you like to do next? \`Reply with the letter or action\`
\u200B
**A.** Hit
**B.** Stab
**C.** Dodge
**D.** Run`)

react.delete()
message.inlineReply(changed).then(async react => {

    let joina = m => m.author.id === message.author.id;
let join2 = new Discord.MessageCollector(message.channel, joina, { max: 1 });
 
join2.on('collect', async msg => {
  if(msg.content.toLowerCase() === "cancel") {
    msg.channel.send(`Cancelled`)
    await react.delete()
    await join2.stop()
 return
}
  let channel = msg.content.toLowerCase();
  
  if(!channel) { msg.inlineReply(`Please say Y or N`) 

return;
}
if(msg.content.toLowerCase() == "a" || msg.content.toLowerCase().includes('hit')) {
    const chance5 = Math.floor(Math.random() * 5)
    if(chance5 == 1 || chance5 == 0 || chance5 == 2){
const changed = new dsc.MessageEmbed()
.setAuthor('ATTACK', message.author.displayAvatarURL())
.setDescription(`You have knocked out the bodyguard! Now you can rob the user.`)

db.query('UPDATE user SET bodyguard = bodyguard - 1 WHERE user_id = ?',[robbee.user.id])

react.delete()
message.inlineReply(changed)
await join2.stop()
return
    }  else {
        const changed = new dsc.MessageEmbed()
.setAuthor('ATTACK', message.author.displayAvatarURL())
.setDescription(`Your attack failed! You have been knocked out and sent to jail. Your weapon has been confiscated.`)


db.query('UPDATE user SET machete = machete - 1 WHERE user_id = ?',[robbee.user.id])
react.delete()
message.inlineReply(changed)
await join2.stop()
return
    }
} else if(msg.content.toLowerCase() == "b" || msg.content.toLowerCase().includes('stab')) {
    const chance5 = Math.floor(Math.random() * 5)
    if(chance5 == 1 || chance5 == 0 || chance5 == 2){
const changed = new dsc.MessageEmbed()
.setAuthor('ATTACK', message.author.displayAvatarURL())
.setDescription(`You have stabbed and wounded the bodyguard! Now you can rob the user.`)
db.query('UPDATE user SET bodyguard = bodyguard - 1 WHERE user_id = ?',[robbee.user.id])
react.delete()
message.inlineReply(changed)
await join2.stop()
return
    }  else {
        const changed = new dsc.MessageEmbed()
.setAuthor('ATTACK', message.author.displayAvatarURL())
.setDescription(`Your attack failed! You have been knocked out and sent to jail.`)
db.query('UPDATE user SET machete = machete - 1 WHERE user_id = ?',[robbee.user.id])
react.delete()
message.inlineReply(changed)
await join2.stop()
return
    }
} else if(msg.content.toLowerCase() == "c" || msg.content.toLowerCase().includes('dodge')) {
    const chance5 = Math.floor(Math.random() * 5)
    if(chance5 == 1 || chance5 == 0 || chance5 == 2){
const changed = new dsc.MessageEmbed()
.setAuthor('ATTACK', message.author.displayAvatarURL())
.setDescription(`You have knocked out the bodyguard! Now you can rob the user.`)
db.query('UPDATE user SET bodyguard = bodyguard - 1 WHERE user_id = ?',[robbee.user.id])
react.delete()
message.inlineReply(changed)
await join2.stop()
    }  else {
        const changed = new dsc.MessageEmbed()
.setAuthor('ATTACK', message.author.displayAvatarURL())
.setDescription(`Your attack failed! You have been knocked out and sent to jail.`)
db.query('UPDATE user SET machete = machete - 1 WHERE user_id = ?',[robbee.user.id])
react.delete()
message.inlineReply(changed)
await join2.stop()

return
    }
} else if(msg.content.toLowerCase() == "d" || msg.content.toLowerCase().includes('run')) {
    const chance5 = Math.floor(Math.random() * 5)
    if(chance5 == 1 || chance5 == 0 || chance5 == 2){
const changed = new dsc.MessageEmbed()
.setAuthor('ATTACK', message.author.displayAvatarURL())
.setDescription(`You successfully fled!`)

react.delete()
message.inlineReply(changed)
await join2.stop()
return
    }  else {
        const changed = new dsc.MessageEmbed()
.setAuthor('ATTACK', message.author.displayAvatarURL())
.setDescription(`LOL. While fleeing, the bodyguard caught up to you and tackled you. You have been sent to jail. Your weapon has been confiscated.`)
db.query('UPDATE user SET machete = machete - 1 WHERE user_id = ?',[robbee.user.id])
react.delete()
message.inlineReply(changed)
await join2.stop()
return
    }
    
} else {
    message.inlineReply('Well you didn\'t provide an answer.. so I\'ll just ignore you.')
    await join2.stop()
    return
}
})})


} else if(msg.content.toLowerCase() == "c" || msg.content.toLowerCase().includes('dodge')) {
   
    const changed = new dsc.MessageEmbed()
    .setAuthor('ATTACK', message.author.displayAvatarURL())
    .setDescription(`You have dodged the bodyguard\'s attack! What would you like to do next? \`Reply with the letter or action\`
    \u200B
    **A.** Hit
    **B.** Stab
    **C.** Dodge
    **D.** Run`)
    
    react.delete()
    message.inlineReply(changed).then(async react => {
    
        let joina = m => m.author.id === message.author.id;
    let join2 = new Discord.MessageCollector(message.channel, joina, { max: 1 });
     
    join2.on('collect', async msg => {
      if(msg.content.toLowerCase() === "cancel") {
        msg.channel.send(`Cancelled`)
        await react.delete()
        await join2.stop()
     return
    }
      let channel = msg.content.toLowerCase();
      
      if(!channel) { msg.inlineReply(`Please say Y or N`) 
    
    return;
    }
    if(msg.content.toLowerCase() == "a" || msg.content.toLowerCase().includes('hit')) {
        const chance5 = Math.floor(Math.random() * 5)
        if(chance5 == 1 || chance5 == 0 || chance5 == 2){
    const changed = new dsc.MessageEmbed()
    .setAuthor('ATTACK', message.author.displayAvatarURL())
    .setDescription(`You have knocked out the bodyguard! Now you can rob the user.`)
    
    db.query('UPDATE user SET bodyguard = bodyguard - 1 WHERE user_id = ?',[robbee.user.id])
    
    react.delete()
    message.inlineReply(changed)
    await join2.stop()
    return
        }  else {
            const changed = new dsc.MessageEmbed()
    .setAuthor('ATTACK', message.author.displayAvatarURL())
    .setDescription(`Your attack failed! You have been knocked out and sent to jail. Your weapon has been confiscated.`)
    
    
    db.query('UPDATE user SET machete = machete - 1 WHERE user_id = ?',[robbee.user.id])
    react.delete()
    message.inlineReply(changed)
    await join2.stop()
    return
        }
    } else if(msg.content.toLowerCase() == "b" || msg.content.toLowerCase().includes('stab')) {
        const chance5 = Math.floor(Math.random() * 5)
        if(chance5 == 1 || chance5 == 0 || chance5 == 2){
    const changed = new dsc.MessageEmbed()
    .setAuthor('ATTACK', message.author.displayAvatarURL())
    .setDescription(`You have stabbed and wounded the bodyguard! Now you can rob the user.`)
    db.query('UPDATE user SET bodyguard = bodyguard - 1 WHERE user_id = ?',[robbee.user.id])
    react.delete()
    message.inlineReply(changed)
    await join2.stop()
    return
        }  else {
            const changed = new dsc.MessageEmbed()
    .setAuthor('ATTACK', message.author.displayAvatarURL())
    .setDescription(`Your attack failed! You have been knocked out and sent to jail.`)
    db.query('UPDATE user SET machete = machete - 1 WHERE user_id = ?',[robbee.user.id])
    react.delete()
    message.inlineReply(changed)
    await join2.stop()
    return
        }
    } else if(msg.content.toLowerCase() == "c" || msg.content.toLowerCase().includes('dodge')) {
        const chance5 = Math.floor(Math.random() * 5)
        if(chance5 == 1 || chance5 == 0 || chance5 == 2){
    const changed = new dsc.MessageEmbed()
    .setAuthor('ATTACK', message.author.displayAvatarURL())
    .setDescription(`You have knocked out the bodyguard! Now you can rob the user.`)
    db.query('UPDATE user SET bodyguard = bodyguard - 1 WHERE user_id = ?',[robbee.user.id])
    react.delete()
    message.inlineReply(changed)
    await join2.stop()
    return
        }  else {
            const changed = new dsc.MessageEmbed()
    .setAuthor('ATTACK', message.author.displayAvatarURL())
    .setDescription(`Your attack failed! You have been knocked out and sent to jail.`)
    db.query('UPDATE user SET machete = machete - 1 WHERE user_id = ?',[robbee.user.id])
    react.delete()
    message.inlineReply(changed)
    await join2.stop()
    return
        }
    } else if(msg.content.toLowerCase() == "d" || msg.content.toLowerCase().includes('run')) {
        const chance5 = Math.floor(Math.random() * 5)
        if(chance5 == 1 || chance5 == 0 || chance5 == 2){
    const changed = new dsc.MessageEmbed()
    .setAuthor('ATTACK', message.author.displayAvatarURL())
    .setDescription(`You successfully fled!`)
    
    react.delete()
    message.inlineReply(changed)
    await join2.stop()
    return
        }  else {
            const changed = new dsc.MessageEmbed()
    .setAuthor('ATTACK', message.author.displayAvatarURL())
    .setDescription(`LOL. While fleeing, the bodyguard caught up to you and tackled you. You have been sent to jail. Your weapon has been confiscated.`)
    db.query('UPDATE user SET machete = machete - 1 WHERE user_id = ?',[robbee.user.id])
    react.delete()
    message.inlineReply(changed)
    await join2.stop()
    return
        }
        
    }
    })})
    
    
    } else if(msg.content.toLowerCase().includes('run') || msg.content.toLowerCase() == 'd'){
        const changed = new dsc.MessageEmbed()
        .setAuthor('Flee', message.author.displayAvatarURL())
        .setDescription('LOL. You ran away like the coward you are.')
        react.delete()
        message.inlineReply(changed)
        await join2.stop()
        return
    } else {
        message.inlineReply('Well you didn\'t provide an answer.. so I\'ll just ignore you.')
        await join2.stop()
        return
    }
})})

    } else if(msg.content.toLowerCase().includes("no") || msg.content.toLowerCase().includes('n')) {
        const changed = new dsc.MessageEmbed()
        .setAuthor('Flee', message.author.displayAvatarURL())
        .setDescription('LOL. You ran away like the coward you are.')
        react.delete()
        message.inlineReply(changed)
        await join.stop()
        return 
    } else {
        message.inlineReply('Well you didn\'t provide an answer.. so I\'ll just ignore you.')
        await join.stop()
        return

    }

})})
            } else return message.inlineReply(`Your dog sniffed out the **${robbee.user.username}**\'s bodyguard! Unfortunately you do not have a weapon, so, like a coward, you ran away.`)
        } else {
            const embed = new dsc.MessageEmbed()
            .setAuthor('CAUGHT', message.author.displayAvatarURL())
            .setDescription(`**${robbee.user.username}**\'s bodyguard caught you from behind. He called the police and you have been sent to jail.`)
            message.inlineReply(embed)
            return
        }
    }



    const number = Math.floor(Math.random() * 4)
    const number1 = Math.floor(Math.random() * 10)

    let robbed;
const romax = robbeeBal.pocket
const romin = 0
const romax1 = (robbeeBal.pocket / 3)
console.log(`${romax1} | this is pocket / 3`)
console.log(`${romax} | this is pocket`)
console.log(`${romin} | this is minimum`)
console.log(`${number1} | this is the number`)
    if(number1 == 9) {
        robbed = Math.floor(Math.random() * (romax - romax1) + romax1)
        console.log(robbed)
    }
    else {
        robbed = Math.floor(Math.random() * (romax1 - romin) + romin)
        console.log(robbed)
    }
    
    console.log(number)
    if (number == 1 || number == 2 || number == 3 || number == 0) {
        message.inlineReply(robbee && new dsc.MessageEmbed()
            .setTitle(`Successfully robbed ${robbee.user.username}`)
            .setDescription(`You have just robbed ${robbee} for <:nightbux:902400327410679849>\`${robbed}\``)
            .setColor("#2c2f33")
            .setThumbnail(message.guild.iconURL())
        )
        let newPocket = userPocket + parseInt(robbed)
        let newRobbeePocket = parseInt(robbeeBal.pocket) - parseInt(robbed)
        db.query('UPDATE user SET pocket = ? WHERE user_id = ?', [newPocket, message.member.id])
        db.query('UPDATE user SET pocket = ? WHERE user_id = ?', [newRobbeePocket, robbee.user.id])
    } else {
        message.inlineReply(new dsc.MessageEmbed()
            .setTitle(`Failed Rob`)
            .setDescription(`You were unsuccessful in your attempt to rob ${robbee}, you have been fined <:nightbux:902400327410679849>\`500\``)
            .setColor("#2c2f33")
            .setThumbnail(message.guild.iconURL())
        )
        let newPocket = userPocket - 500
        db.query('UPDATE user SET pocket = ? WHERE user_id = ?', [newPocket, message.member.id])
    }




}

};
module.exports.requirements = {
    userPerms: [],
    clientPerms: [],
    ownerOnly: false
}

module.exports.limits = {
    rateLimit: 1,
    cooldown: 300000,
    embedMessage: `**Rob** is currently on cooldown of **5 minutes**, please wait till the **5 minutes** is over`
}