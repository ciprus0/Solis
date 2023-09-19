const  Discord = require("discord.js")


module.exports = {
    name: 'buy',
    aliases: ['purchase'],
    category: 'Action',
    utilisation: '{prefix}buy [item]',
    module: 'economy',
    async execute(client, message, args, prefix) {
        let user;

        try {
          await  db.promise().query('SELECT * FROM user WHERE user_id = ?',[message.author.id]).then(result => {
          user = result[0][0]
          })
        } catch (error) {
            console.log(error)
            message.inlineReply('Sorry, you were not in the databas. Please say the command again!')

        }
const pocket = user.pocket
const query = args[0]
if(query == 'shovel' || query == 'shovels'){
    if(user.shovel == 3)return message.reply("You already have a Legendary Shovel, sell that first!")
    if(user.shovel == 2)return message.reply("You already have a Pro Shovel, sell that first!")
    if(user.shovel == 1)return message.reply("You already have a Basic Shovel, sell that first!")
        const react = new Discord.MessageEmbed()
        .setTitle("<:shovel:853051667365101568> Shovel")
        .setDescription(`Choose from 3 choices for your Shovel!`)
        .setFooter('Say cancel to cancel')
        .addField('Shovel Options',
        `<:shovelpro:858222049758543903> **Sharp** — <:nightbux:902400327410679849>[20,000](https://discord.com/oauth2/authorize?client_id=962901764401676350&scope=bot&permissions=8)\n30% chance to get more money!
\u200B
<:shovelrounded:858223139410411520> **Dull** — <:nightbux:902400327410679849>[10,000](https://discord.com/oauth2/authorize?client_id=962901764401676350&scope=bot&permissions=8)\n15% chance to get more money!
\u200B
<:shovelbasic:858221626087833600> **Beach** — <:nightbux:902400327410679849>[5,000](https://discord.com/oauth2/authorize?client_id=962901764401676350&scope=bot&permissions=8)\n5% chance of getting a lot of money!`)
        
    message.inlineReply(react).then(async react => {

    let shovel = new Map()
    shovel.set('0',"None")
    shovel.set('1',"Beach Shovel")    
    shovel.set('2',"Dull Shovel")
    shovel.set('3',"Sharp Shovel")
    
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
      
      if(!channel) { msg.inlineReply(`Please provide the Shovel level you would like to buy. Ex: \`dull\``) 
    
    return;
}
if(msg.content.toLowerCase().includes("sharp shovel") || msg.content.toLowerCase().includes('sharp') || msg.content.toLowerCase().includes('3') || msg.content.toLowerCase().includes('level 3')) {
    if(pocket < 20000)return message.reply("You do not have <:nightbux:902400327410679849>\`20,000\`")
    
    finalPocket = (pocket - 20000)
    const changed = new Discord.MessageEmbed()
    .setTitle("Successfully Purchased")
    .setDescription(`You have just bought a Sharp Shovel for <:nightbux:902400327410679849>\`20,000\``)
    
    db.query('UPDATE user SET shovel = ? WHERE user_id = ?',["3",message.author.id])
    db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
    await react.delete()
    message.inlineReply(changed)

    await join.stop()
} else if(msg.content.toLowerCase().includes("2") || msg.content.toLowerCase().includes('level 2') || msg.content.toLowerCase().includes('dull') || msg.content.toLowerCase().includes('dull shovel')) {
    if(pocket < 10000)return message.reply("You do not have <:nightbux:902400327410679849>\`10,000\`")
   
    finalPocket = (pocket - 10000)
    const changed = new Discord.MessageEmbed()
    .setTitle("Successfully Purchased")
    .setDescription(`You have just bought a Dull Shovel for <:nightbux:902400327410679849>\`10,000\``)
    
    db.query('UPDATE user SET shovel = ? WHERE user_id = ?',["2",message.author.id])
    db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
    await react.delete()
    message.inlineReply(changed)

    await join.stop()
} else if(msg.content.toLowerCase().includes("1") || msg.content.toLowerCase().includes('level 1') || msg.content.toLowerCase().includes('beach') || msg.content.toLowerCase().includes('beach shovel')) {
    if(pocket < 5000)return message.reply("You do not have <:nightbux:902400327410679849>\`5,000\`")
  
    finalPocket = (pocket - 5000)
    const changed = new Discord.MessageEmbed()
    .setTitle("Successfully Purchased")
    .setDescription(`You have just bought a Beach Shovel for <:nightbux:902400327410679849>\`5,000\``)
    
    db.query('UPDATE user SET shovel = ? WHERE user_id = ?',["1",message.author.id])
    db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
 
    
     
    await react.delete()
    message.inlineReply(changed)

    await join.stop()
} else {
  return  message.reply('Please send a valid shovel name! (Re-send the command) **Ex:** \`dull\`')
}



    })})}



    if(query == 'camera' || query == 'cameras'){
        if(user.camera == 3)return message.reply("You already have a Nikon Camera, sell that first!")
        if(user.camera == 2)return message.reply("You already have a Canon Camera, sell that first!")
        if(user.camera == 1)return message.reply("You already have a Panasonic Camera, sell that first!")
            const react = new Discord.MessageEmbed()
            .setTitle("<:shovel:853051667365101568> Camera")
            .setDescription(`Choose from 3 choices for your Camera!`)
            .setFooter('Say cancel to cancel')
            .addField('Camera Options',
            `<:nikon:858234074102759444> **Nikon** — <:nightbux:902400327410679849>[30,000](https://discord.com/oauth2/authorize?client_id=962901764401676350&scope=bot&permissions=8)\n30% chance to get more money!
\u200B
<:canon:858234486500229130> **Canon** — <:nightbux:902400327410679849>[20,000](https://discord.com/oauth2/authorize?client_id=962901764401676350&scope=bot&permissions=8)\n15% chance to get more money!
\u200B
<:panasonic:858234177354465320> **Panasonic** — <:nightbux:902400327410679849>[10,000](https://discord.com/oauth2/authorize?client_id=962901764401676350&scope=bot&permissions=8)\n5% chance of getting a lot of money!`)
            
        message.inlineReply(react).then(async react => {
    
        let camera = new Map()
        camera.set('0',"None")
        camera.set('1',"Panasonic Camera")    
        camera.set('2',"Canon Camera")
        camera.set('3',"Nikon Camera")
       
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
          
          if(!channel) { msg.inlineReply(`Please provide the Camera level you would like to buy. Ex: \`nikon\``) 
        
        return;
    }
    if(msg.content.toLowerCase().includes("nikon camera") || msg.content.toLowerCase().includes('nikon') || msg.content.toLowerCase().includes('3') || msg.content.toLowerCase().includes('level 3')) {
        if(pocket < 30000)return message.reply("You do not have <:nightbux:902400327410679849>\`30,000\`")
        
        finalPocket = (pocket - 30000)
        const changed = new Discord.MessageEmbed()
        .setTitle("Successfully Purchased")
        .setDescription(`You have just bought a Nikon Camera for <:nightbux:902400327410679849>\`30,000\``)
        
        db.query('UPDATE user SET camera = ? WHERE user_id = ?',["3",message.author.id])
        db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
        await react.delete()
        message.inlineReply(changed)
    
        await join.stop()
    } else if(msg.content.toLowerCase().includes("2") || msg.content.toLowerCase().includes('level 2') || msg.content.toLowerCase().includes('canon') || msg.content.toLowerCase().includes('canon camera')) {
        if(pocket < 20000)return message.reply("You do not have <:nightbux:902400327410679849>\`20,000\`")
       
        finalPocket = (pocket - 20000)
        const changed = new Discord.MessageEmbed()
        .setTitle("Successfully Purchased")
        .setDescription(`You have just bought a Canon Camera for <:nightbux:902400327410679849>\`20,000\``)
        
        db.query('UPDATE user SET camera = ? WHERE user_id = ?',["2",message.author.id])
        db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
        await react.delete()
        message.inlineReply(changed)
    
        await join.stop()
    } else if(msg.content.toLowerCase() === "1" || msg.content.toLowerCase() === 'level 1' || msg.content.toLowerCase() === 'beach' || msg.content.toLowerCase() === 'beach shovel') {
        if(pocket < 10000)return message.reply("You do not have <:nightbux:902400327410679849>\`10,000\`")
      
        finalPocket = (pocket - 10000)
        const changed = new Discord.MessageEmbed()
        .setTitle("Successfully Purchased")
        .setDescription(`You have just bought a Panasonic Camera for <:nightbux:902400327410679849>\`10,000\``)
        
        db.query('UPDATE user SET camera = ? WHERE user_id = ?',["1",message.author.id])
        db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
     
        
         
        await react.delete()
        message.inlineReply(changed)
    
        await join.stop()
    } else {
      return  message.reply('Please send a valid camera name! (Re-send the command) **Ex:** \`nikon\`')
    }
    
    
    
        })})}



        if(query == 'flashlight' || query == 'flashlights'){
            if(user.flashlight == 3)return message.reply("You already have a LED Flashlight, sell that first!")
            if(user.flashlight == 2)return message.reply("You already have a Headlamp Flashlight, sell that first!")
            if(user.flashlight == 1)return message.reply("You already have a Dull Flashlight, sell that first!")
                const react = new Discord.MessageEmbed()
                .setTitle("<:shovel:853051667365101568> Flashlight")
                .setDescription(`Choose from 3 choices for your Flashlight!`)
                .setFooter('Say cancel to cancel')
                .addField('Flashlight Options',
                `<:led:858534703904194581> **LED** — <:nightbux:902400327410679849>[10,000](https://discord.com/oauth2/authorize?client_id=962901764401676350&scope=bot&permissions=8)\n30% chance to get more money!
\u200B
<:headlamp:858534684529786880> **Headlamp** — <:nightbux:902400327410679849>[5,000](https://discord.com/oauth2/authorize?client_id=962901764401676350&scope=bot&permissions=8)\n15% chance to get more money!
\u200B
<:dull:858534256800563203> **Dull** — <:nightbux:902400327410679849>[2,000](https://discord.com/oauth2/authorize?client_id=962901764401676350&scope=bot&permissions=8)\n5% chance of getting a lot of money!`)
                
            message.inlineReply(react).then(async react => {
        
            let flashlight = new Map()
            flashlight.set('0',"None")
            flashlight.set('1',"Dull Flashlight")    
            flashlight.set('2',"Headlamp Flashlight")
            flashlight.set('3',"LED Flashlight")
           
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
              
              if(!channel) { msg.inlineReply(`Please provide the Flashlight level you would like to buy. Ex: \`led\``) 
            
            return;
        }
        if(msg.content.toLowerCase().includes("led flashlight") || msg.content.toLowerCase().includes('led') || msg.content.toLowerCase().includes('3') || msg.content.toLowerCase().includes('level 3')) {
            if(pocket < 10000)return message.reply("You do not have <:nightbux:902400327410679849>\`10,000\`")
            
            finalPocket = (pocket - 10000)
            const changed = new Discord.MessageEmbed()
            .setTitle("Successfully Purchased")
            .setDescription(`You have just bought a LED Flashlight for <:nightbux:902400327410679849>\`10,000\``)
            
            db.query('UPDATE user SET flashlight = ? WHERE user_id = ?',["3",message.author.id])
            db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
            await react.delete()
            message.inlineReply(changed)
        
            await join.stop()
        } else if(msg.content.toLowerCase().includes("2") || msg.content.toLowerCase().includes('level 2') || msg.content.toLowerCase().includes('headlamp') || msg.content.toLowerCase().includes('headlamp flashlight')) {
            if(pocket < 5000)return message.reply("You do not have <:nightbux:902400327410679849>\`5,000\`")
           
            finalPocket = (pocket - 5000)
            const changed = new Discord.MessageEmbed()
            .setTitle("Successfully Purchased")
            .setDescription(`You have just bought a Headlamp Flashlight for <:nightbux:902400327410679849>\`5,000\``)
            
            db.query('UPDATE user SET flashlight = ? WHERE user_id = ?',["2",message.author.id])
            db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
            await react.delete()
            message.inlineReply(changed)
        
            await join.stop()
        } else if(msg.content.toLowerCase() === "1" || msg.content.toLowerCase() === 'level 1' || msg.content.toLowerCase() === 'dull' || msg.content.toLowerCase() === 'dull flashlight') {
            if(pocket < 2000)return message.reply("You do not have <:nightbux:902400327410679849>\`2,000\`")
          
            finalPocket = (pocket - 2000)
            const changed = new Discord.MessageEmbed()
            .setTitle("Successfully Purchased")
            .setDescription(`You have just bought a Panasonic Camera for <:nightbux:902400327410679849>\`2,000\``)
            
            db.query('UPDATE user SET flashlight = ? WHERE user_id = ?',["1",message.author.id])
            db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
         
            
             
            await react.delete()
            message.inlineReply(changed)
        
            await join.stop()
        } else {
          return  message.reply('Please send a valid flashlight name! (Re-send the command) **Ex:** \`led\`')
        }
        
        
        
            })})}
        


    if (query == "lock" || query == 'padlock'){
      
        let amount = parseInt(args[1])
      
        let books = parseInt(user.locker)
        if(!args[1] || Number.isNaN(amount)) { 
            amount = 1
            let newbooks = (books + amount)
            if(pocket < 20000)return message.reply("You do not have <:nightbux:902400327410679849>\`20,000\`")
           
            finalPocket = (pocket - 20000)
            message.inlineReply(new Discord.MessageEmbed()
            .setTitle("Successfully Purchased 🔏")
            .setDescription(`You have just bought a lock from the shop for <:nightbux:902400327410679849>20,000`)
            )
            db.query('UPDATE user SET locker = ? WHERE user_id = ?',[newbooks,message.author.id])
            db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
        } else {
            let newbooks = (books + amount)
            const amount1 = (amount * 20000)
            
            if(pocket < 20000)return message.reply("You do not have <:nightbux:902400327410679849>\`20,000\`")
             
                finalPocket = (pocket - amount1)
                message.inlineReply(new Discord.MessageEmbed()
                .setTitle("Successfully Purchased 🔏")
                .setDescription(`You have just bought ${amount} Lock/s from the shop for <:nightbux:902400327410679849>${amount1}`)
                )
                db.query('UPDATE user SET locker = ? WHERE user_id = ?',[newbooks,message.author.id])
                db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
        }
            }
        
    
    

    if (query == "squirelock" || query == 'squire' || query == 'squirepadlock'){
        if(pocket < 10000000)return message.reply("You do not have <:nightbux:902400327410679849>\`10,000,000\`")
        if(user.squirelocker == 1)return message.reply("You already have a Squire Padlock.")
        finalPocket = (pocket - 10000000)
        message.inlineReply(new Discord.MessageEmbed()
        .setTitle("Successfully Purchased 🔏")
        .setDescription(`You have just bought a Squire Padlock from the shop for <:nightbux:902400327410679849>10,000,000`)
        )
        db.query('UPDATE user SET squirelocker = ? WHERE user_id = ?',["1",message.author.id])
        db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
    }

    if (query == "bankvault" || query == 'vault' || query == 'bvault'){
        if(pocket < 5000000)return message.reply("You do not have <:nightbux:902400327410679849>\`5,000,000\`")
        if(user.bankvault == 1)return message.reply("You already have a Bank Vault.")
        finalPocket = (pocket - 5000000)
        message.inlineReply(new Discord.MessageEmbed()
        .setTitle("Successfully Purchased <:bankvault:863514649287065640>")
        .setDescription(`You have just bought a Bank Vault from the shop for <:nightbux:902400327410679849>5,000,000`)
        )
        db.query('UPDATE user SET bankvault = ? WHERE user_id = ?',["1",message.author.id])
        db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
    }

    if (query == "bodyguard" || query == 'guard' || query == 'bguard'){
        if(pocket < 500000)return message.reply("You do not have <:nightbux:902400327410679849>\`500,000\`")
        if(user.bodyguard == 1)return message.reply("You already have a Bodyguard.")
        finalPocket = (pocket - 500000)
        message.inlineReply(new Discord.MessageEmbed()
        .setTitle("Successfully Purchased <:bodyguard:863677518695235584>")
        .setDescription(`You have just bought a Bodyguard from the shop for <:nightbux:902400327410679849>500,000`)
        )
        db.query('UPDATE user SET bodyguard = ? WHERE user_id = ?',["1",message.author.id])
        db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
    }
    

    if (query == "husky"){
        if(pocket < 200000)return message.reply("You do not have <:nightbux:902400327410679849>\`200,000\`")
        if(user.husky == 1)return message.reply("You already have a Husky.")
        finalPocket = (pocket - 200000)
        message.inlineReply(new Discord.MessageEmbed()
        .setTitle("Successfully Purchased <:husky:863944870161809428>")
        .setDescription(`You have just bought a Husky from the shop for <:nightbux:902400327410679849>200,000`)
        )
        db.query('UPDATE user SET husky = ? WHERE user_id = ?',["1",message.author.id])
        db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
    }


    if (query == "cutters" || query == 'boltcutters' || query == 'bolt'){
        if(user.boltcutters == 1) return message.inlineReply(`You already own bolt cutters! Do \`${prefix}sell cutters\` to buy more.`)
        let amount = parseInt(args[1])
const bolts = parseInt(user.boltcutters)

if(!args[1] || Number.isNaN(amount)) { 
    amount = 1
    let newbolts = (bolts + amount)
        if(pocket < 2000000)return message.reply("You do not have <:nightbux:902400327410679849>\`2,000,000\`")
        
        finalPocket = (pocket - 2000000)
        message.inlineReply(new Discord.MessageEmbed()
        .setTitle("Successfully Purchased <:boltcutters:858580586183524362>")
        .setDescription(`You have just bought bolt cutters from the shop for <:nightbux:902400327410679849>2,000,000`)
        )
        db.query('UPDATE user SET boltcutters = ? WHERE user_id = ?',[newbolts,message.author.id])
        db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
} 
    }
    
    

    if (query == "book" || query == "classbook" || query == 'classbooks' || query == 'books'){
        
        let amount = parseInt(args[1])
const books = parseInt(user.books)

if(!args[1] || Number.isNaN(amount)) { 
    amount = 1
    let newbooks = (books + amount)
    if(pocket < 15000)return message.reply("You do not have <:nightbux:902400327410679849>\`15,000\`")
    if(user.books == 8)return message.reply("You already have the maximum amount of class books!")
    finalPocket = (pocket - 15000)
    message.inlineReply(new Discord.MessageEmbed()
    .setTitle("Successfully Purchased")
    .setDescription(`You have just bought a class book from the shop for <:nightbux:902400327410679849>15,000`)
    )
    db.query('UPDATE user SET books = ? WHERE user_id = ?',[newbooks,message.author.id])
    db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
} else {
    let newbooks = (books + amount)
    const amount1 = (amount * 15000)
    if(newbooks > 8) return message.inlineReply(`You can't have more than 8 books.`)
    if(amount >= 8) return message.inlineReply(`You can't buy more than 8 books.`)
    if(pocket < 15000)return message.reply("You do not have <:nightbux:902400327410679849>\`15,000\`")
        if(user.books == 8)return message.reply("You already have the maximum amount of class books!")
        finalPocket = (pocket - amount1)
        message.inlineReply(new Discord.MessageEmbed()
        .setTitle("Successfully Purchased")
        .setDescription(`You have just bought a class book from the shop for <:nightbux:902400327410679849>${amount1}`)
        )
        db.query('UPDATE user SET books = ? WHERE user_id = ?',[newbooks,message.author.id])
        db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
}
    }



    if (query == "bat" || query == "baseball" || query == 'baseballbat' || query == 'bats'){
        
        let amount = parseInt(args[1])
const books = parseInt(user.bat)

if(!args[1] || Number.isNaN(amount)) { 
    amount = 1
    let newbooks = (books + amount)
    if(pocket < 30000)return message.reply("You do not have <:nightbux:902400327410679849>\`30,000\`")
    
    finalPocket = (pocket - 30000)
    message.inlineReply(new Discord.MessageEmbed()
    .setTitle("Successfully Purchased")
    .setDescription(`You have just bought a Baseball Bat from the shop for <:nightbux:902400327410679849>30,000`)
    )
    db.query('UPDATE user SET bat = ? WHERE user_id = ?',[newbooks,message.author.id])
    db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
} else {
    let newbooks = (books + amount)
    const amount1 = (amount * 30000)
    
   
    if(pocket < amount1)return message.reply(`You do not have <:nightbux:902400327410679849>\`${amount1}\``)
     
        finalPocket = (pocket - amount1)
        message.inlineReply(new Discord.MessageEmbed()
        .setTitle("Successfully Purchased")
        .setDescription(`You have just bought ${amount} Baseball Bat/s from the shop for <:nightbux:902400327410679849>${amount1}`)
        )
        db.query('UPDATE user SET bat = ? WHERE user_id = ?',[newbooks,message.author.id])
        db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
}
    }


    if (query == "knuckles" || query == "brass" || query == 'brassknuckles'){
        
        let amount = parseInt(args[1])
const books = parseInt(user.brassknucks)

if(!args[1] || Number.isNaN(amount)) { 
    amount = 1
    let newbooks = (books + amount)
    if(pocket < 40000)return message.reply("You do not have <:nightbux:902400327410679849>\`40,000\`")
    
    finalPocket = (pocket - 40000)
    message.inlineReply(new Discord.MessageEmbed()
    .setTitle("Successfully Purchased")
    .setDescription(`You have just bought Brass Knuckles from the shop for <:nightbux:902400327410679849>40,000`)
    )
    db.query('UPDATE user SET brassknucks = ? WHERE user_id = ?',[newbooks,message.author.id])
    db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
} else {
    let newbooks = (books + amount)
    const amount1 = (amount * 40000)
    
   
    if(pocket < amount1)return message.reply(`You do not have <:nightbux:902400327410679849>\`${amount1}\``)
     
        finalPocket = (pocket - amount1)
        message.inlineReply(new Discord.MessageEmbed()
        .setTitle("Successfully Purchased")
        .setDescription(`You have just bought ${amount} Brass Knuckle/s from the shop for <:nightbux:902400327410679849>${amount1}`)
        )
        db.query('UPDATE user SET brassknucks = ? WHERE user_id = ?',[newbooks,message.author.id])
        db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
}
    }





    if (query == "machete" || query == "knife"){
        
        let amount = parseInt(args[1])
const books = parseInt(user.machete)

if(!args[1] || Number.isNaN(amount)) { 
    amount = 1
    let newbooks = (books + amount)
    if(pocket < 50000)return message.reply("You do not have <:nightbux:902400327410679849>\`50,000\`")
    
    finalPocket = (pocket - 50000)
    message.inlineReply(new Discord.MessageEmbed()
    .setTitle("Successfully Purchased")
    .setDescription(`You have just bought a Machete from the shop for <:nightbux:902400327410679849>50,000`)
    )
    db.query('UPDATE user SET machete = ? WHERE user_id = ?',[newbooks,message.author.id])
    db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
} else {
    let newbooks = (books + amount)
    const amount1 = (amount * 50000)
    
   
    if(pocket < amount1)return message.reply(`You do not have <:nightbux:902400327410679849>\`${amount1}\``)
     
        finalPocket = (pocket - amount1)
        message.inlineReply(new Discord.MessageEmbed()
        .setTitle("Successfully Purchased")
        .setDescription(`You have just bought ${amount} Machete/s from the shop for <:nightbux:902400327410679849>${amount1}`)
        )
        db.query('UPDATE user SET machete = ? WHERE user_id = ?',[newbooks,message.author.id])
        db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
}
    }

    



    if (query == "ninjasuit" || query == 'suit' || query == 'ninja'){
        if(user.ninjasuit == 3)return message.reply("You already have a Level 3 NinjaSuit, sell that first!")
    if(user.ninjasuit == 2)return message.reply("You already have a Level 2 NinjaSuit, sell that first!")
    if(user.ninjasuit == 1)return message.reply("You already have a Level 1 NinjaSuit, sell that first!")
        const react = new Discord.MessageEmbed()
        .setTitle("<:ninjasuit:851891822183186443> NinjaSuit")
        .setDescription(`Choose from 3 choices for your Ninja Suit!`)
        .addField('Suit Options',
        `<:ninjasuit3:851922910658166815> **Level 3** — <:nightbux:902400327410679849>[1,000,000](https://discord.gg/bar)\n30% chance to get more money!
\u200B
<:ninjasuit2:851922887073464320> **Level 2** — <:nightbux:902400327410679849>[500,000](https://discord.gg/bar)\n15% chance to get more money!
\u200B
<:ninjasuit1:851922858778165279> **Level 1** — <:nightbux:902400327410679849>[300,000](https://discord.gg/bar)\n5% chance of getting a lot of money!`)
        
    message.inlineReply(react).then(async react => {

    let ninjasuit = new Map()
    ninjasuit.set('0',"None")
    ninjasuit.set('1',"Level 1")    
    ninjasuit.set('2',"Level 2")
    ninjasuit.set('3',"Level 3")
   
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
      
      if(!channel) { msg.inlineReply(`Please provide the NinjaSuit level you would like to buy. Ex: \`level 3\``) 
    
    return;
}
if(msg.content.toLowerCase().includes("3") || msg.content.toLowerCase().includes('level 3')) {
    if(pocket < 1000000)return message.reply("You do not have <:nightbux:902400327410679849>\`1,000,000\`")
    
    finalPocket = (pocket - 1000000)
    const changed = new Discord.MessageEmbed()
    .setTitle("Successfully Purchased")
    .setDescription(`You have just bought a Level 3 NinjaSuit for <:nightbux:902400327410679849>\`1,000,000\``)
    
    db.query('UPDATE user SET ninjasuit = ? WHERE user_id = ?',["3",message.author.id])
    db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
    await react.delete()
    message.inlineReply(changed)

    await join.stop()
} else if(msg.content.toLowerCase().includes("2") || msg.content.toLowerCase().includes('level 2')) {
    if(pocket < 500000)return message.reply("You do not have <:nightbux:902400327410679849>\`500,000\`")
   
    finalPocket = (pocket - 500000)
    const changed = new Discord.MessageEmbed()
    .setTitle("Successfully Purchased")
    .setDescription(`You have just bought a Level 2 NinjaSuit for <:nightbux:902400327410679849>\`500,000\``)
    
    db.query('UPDATE user SET ninjasuit = ? WHERE user_id = ?',["2",message.author.id])
    db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
    await react.delete()
    message.inlineReply(changed)

    await join.stop()
} else if(msg.content.toLowerCase().includes("1") || msg.content.toLowerCase().includes('level 1')) {
    if(pocket < 300000)return message.reply("You do not have <:nightbux:902400327410679849>\`300,000\`")
  
    finalPocket = (pocket - 300000)
    const changed = new Discord.MessageEmbed()
    .setTitle("Successfully Purchased")
    .setDescription(`You have just bought a Level 1 NinjaSuit for <:nightbux:902400327410679849>\`300,000\``)
    
    db.query('UPDATE user SET ninjasuit = ? WHERE user_id = ?',["1",message.author.id])
    db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
 
    
     
    await react.delete()
    message.inlineReply(changed)

    await join.stop()
} else {
  return  message.reply('Please send a valid NinjaSuit level! Ex: \`level 3\`')
}



    })})}


    if (query == "rod" || query == 'fishingrod' || query == 'fishing rod'){
        if(user.fishing_rod == 3)return message.reply("You already have a Legendary fishing rod, sell that first!")
    if(user.fishing_rod == 2)return message.reply("You already have a Pro fishing rod, sell that first!")
    if(user.fishing_rod == 1)return message.reply("You already have a Basic fishing rod, sell that first!")
        const react = new Discord.MessageEmbed()
        .setTitle("🎣 Fishing Rod")
        .setDescription(`Choose from 3 choices for your Fishing rod!`)
        .addField('Fish Options',
        `<:legendary_fishing_rod:851654353445584927> **Legendary** — <:nightbux:902400327410679849>[30,000](https://discord.gg/bar)\n30% chance to get better fish!
\u200B
<:pro_fishing_rod:851653701000364064> **Pro** — <:nightbux:902400327410679849>[15,000](https://discord.gg/bar)\n15% chance to get better fish!
\u200B
🎣 **Basic** — <:nightbux:902400327410679849>[5,000](https://discord.gg/bar)\n5% chance of getting the best fish!`)
        
    message.inlineReply(react).then(async react => {

    let fishing_rod = new Map()
    fishing_rod.set('0',"None")
    fishing_rod.set('1',"Basic")    
    fishing_rod.set('2',"Pro")
    fishing_rod.set('3',"Legendary")
 
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
      
      if(!channel) { msg.inlineReply(`Please provide the Fishing Rod level you would like to buy. Ex: \`legendary\``) 
    
    return;
}
if(msg.content.toLowerCase().includes("legendary")) {
    if(pocket < 30000)return message.reply("You do not have <:nightbux:902400327410679849>\`30,000\`")
    
    finalPocket = (pocket - 30000)
    const changed = new Discord.MessageEmbed()
    .setTitle("Successfully Purchased")
    .setDescription(`You have just bought a Legendary fishing rod for <:nightbux:902400327410679849>\`30,000\``)
    
    db.query('UPDATE user SET fishing_rod = ? WHERE user_id = ?',["3",message.author.id])
    db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
    await react.delete()
    message.inlineReply(changed)

    await join.stop()
} else if(msg.content.toLowerCase().includes("pro")) {
    if(pocket < 15000)return message.reply("You do not have <:nightbux:902400327410679849>\`15,000\`")
   
    finalPocket = (pocket - 15000)
    const changed = new Discord.MessageEmbed()
    .setTitle("Successfully Purchased")
    .setDescription(`You have just bought a Pro fishing rod for <:nightbux:902400327410679849>\`15,000\``)
    
    db.query('UPDATE user SET fishing_rod = ? WHERE user_id = ?',["2",message.author.id])
    db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
    await react.delete()
    message.inlineReply(changed)

    await join.stop()
} else if(msg.content.toLowerCase().includes("basic")) {
    if(pocket < 5000)return message.reply("You do not have <:nightbux:902400327410679849>\`5,000\`")
  
    finalPocket = (pocket - 5000)
    const changed = new Discord.MessageEmbed()
    .setTitle("Successfully Purchased")
    .setDescription(`You have just bought a Basic fishing rod for <:nightbux:902400327410679849>\`5,000\``)
    
    db.query('UPDATE user SET fishing_rod = ? WHERE user_id = ?',["1",message.author.id])
    db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
 
    
     
    await react.delete()
    message.inlineReply(changed)

    await join.stop()
} else {
  return  message.reply('Please send a valid Fishing Rod level! Ex: \`legendary\`')
}



    })})}
    if (query == "gun"){
        if(user.gun == 3)return message.reply("You already have a Sniper, sell that first!")
    if(user.gun == 2)return message.reply("You already have a Shotgun, sell that first!")
    if(user.gun == 1)return message.reply("You already have a Pistol, sell that first!")
        const react = new Discord.MessageEmbed()
        .setTitle("🔫 Gun")
        .setDescription(`Choose from 3 choices for your Gun!`)
        .addField('Gun Options',
        `<:sniper:851682459875409930> **Sniper**— <:nightbux:902400327410679849>[200,000](https://discord.gg/bar)\n30% chance to get better animals!
\u200B
<:shotgun:851682921228271617> **Shotgun**— <:nightbux:902400327410679849>[100,000](https://discord.gg/bar)\n15% chance to get better animals!
\u200B
<:pistol:851683267483533312> **Pistol**— <:nightbux:902400327410679849>[50,000](https://discord.gg/bar)\n5% chance of getting the best animals!`)
        
    message.inlineReply(react).then(async react => {

    let gun = new Map()
    gun.set('0',"None")
    gun.set('1',"Pistol")    
    gun.set('2',"Shotgun")
    gun.set('3',"Sniper")
 
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
      
      if(!channel) { msg.inlineReply(`Please provide the Gun you would like to buy. Ex: \`Sniper\``) 
    
    return;
}
if(msg.content.toLowerCase().includes("sniper")) {
    if(pocket < 200000)return message.reply("You do not have <:nightbux:902400327410679849>\`200,000\`")
    
    finalPocket = (pocket - 200000)
    const changed = new Discord.MessageEmbed()
    .setTitle("Successfully Purchased")
    .setDescription(`You have just bought a Sniper for <:nightbux:902400327410679849>\`200,000\``)
    
    db.query('UPDATE user SET gun = ? WHERE user_id = ?',["3",message.author.id])
    db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
    await react.delete()
    message.inlineReply(changed)

    await join.stop()
} else if(msg.content.toLowerCase().includes("shotgun")) {
    if(pocket < 100000)return message.reply("You do not have <:nightbux:902400327410679849>\`100,000\`")
   
    finalPocket = (pocket - 100000)
    const changed = new Discord.MessageEmbed()
    .setTitle("Successfully Purchased")
    .setDescription(`You have just bought a Shotgun for <:nightbux:902400327410679849>\`100,000\``)
    
    db.query('UPDATE user SET gun = ? WHERE user_id = ?',["2",message.author.id])
    db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
    await react.delete()
    message.inlineReply(changed)

    await join.stop()
} else if(msg.content.toLowerCase().includes("pistol")) {
    if(pocket < 50000)return message.reply("You do not have <:nightbux:902400327410679849>\`50,000\`")
  
    finalPocket = (pocket - 50000)
    const changed = new Discord.MessageEmbed()
    .setTitle("Successfully Purchased")
    .setDescription(`You have just bought a Pistol for <:nightbux:902400327410679849>\`50,000\``)
    
    db.query('UPDATE user SET gun = ? WHERE user_id = ?',["1",message.author.id])
    db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[finalPocket,message.author.id])
 
    
     
    await react.delete()
    message.inlineReply(changed)

    await join.stop()
} else {
  return  message.inlineReply(`Please send a valid Gun Level! Ex: \`pistol\``)
}



    })})}


}};



module.exports.requirements = {
    userPerms: [],
    clientPerms: [],
    ownerOnly: false
}

module.exports.limits = {
    rateLimit: 2,
    cooldown: 2000,
    embedMessage: `**Buy** is currently on cooldown of **2 seconds**, please wait till the **2 seconds** is over`
}