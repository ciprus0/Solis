const fs = require("fs")
const { user } = require("osenv")
const db = require("../../database/db")
const dsc = require('discord.js')
const Discord = require('discord.js')
const discord = require('discord.js')
const wait = require('util').promisify(setTimeout);
module.exports = {
    name: 'bankrob',
    aliases: ['None'],
    category: 'Action',
    utilisation: '{prefix}bankrob [user]',
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
if(!robbee) { 
    message.inlineReply('Ping a real user or give the ID please')
    const args = message.content.slice(prefix.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase()
    client.limits.delete(command + '-' + message.author.id)
    return
}
        let robbeeBal
    try {
        await db.promise().query('SELECT * FROM user WHERE user_id = ?', [robbee.user.id]).then(result => {
            robbeeBal = result[0][0]
            
        })
    } catch (error) {
        console.log(error)
        message.inlineReply("Sorry, you were not in the database, please send the command again!")
            
            const args = message.content.slice(prefix.length).trim().split(/ +/g)
            const command = args.shift().toLowerCase()
            client.limits.delete(command + '-' + message.author.id)
            return
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
            .setDescription(`You currently have Squire Lock enabled, Please use \`${prefix}removesquirelock\` to use the rob comand`)
            .setColor("#2c2f33")
            .setThumbnail(message.guild.iconURL())
        )
       
            const args = message.content.slice(prefix.length).trim().split(/ +/g);
            const command = args.shift().toLowerCase();
        client.limits.delete(`${command}-${message.author.id}`)
        return
        }

        if (user.ninjasuit == 0) {
            message.inlineReply(new discord.MessageEmbed()
                .setAuthor(`Bank Robbing | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`You do now own a ninjasuit, please buy one from the shop`)
            )
            const prefix = '$'
            const args = message.content.slice(prefix.length).trim().split(/ +/g)
            const command = args.shift().toLowerCase()
            client.limits.delete(command + '-' + message.author.id)
          return
        }
   
    if (!robbee) {
        message.inlineReply(new dsc.MessageEmbed()
            .setTitle("Nobody to rob")
            .setDescription(`Please supply someone to rob as i can't rob nobody`)
            .setColor("#2c2f33")
            .setThumbnail(message.guild.iconURL())
        )
        const prefix = '$'
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        client.limits.delete(`${command}-${message.author.id}`)
        return
    }

if(robbeeBal.usebankvault == 1) return message.inlineReply('This user has a bank vault.. looks like your NinjaSuit won\'t be enough help.')

    if (robbee.user.id == message.author.id) {
        message.inlineReply(new dsc.MessageEmbed()
            .setTitle("Can't rob yourself")
            .setDescription(`Please supply someone to rob ... you cant rob yourself`)
            .setColor("#2c2f33")
            .setThumbnail(message.guild.iconURL())
        )
        const prefix = '$'
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        client.limits.delete(`${command}-${message.author.id}`)
        return
    }
    let userPocket = parseInt(user.pocket)
    let userBank = parseInt(user.bank)
   

    let robeeBank = parseInt(robbeeBal.bank)
   

    
    


    if (parseInt(robbeeBal.bank) <= 10000) {
        message.inlineReply(new dsc.MessageEmbed()
            .setTitle("Person has no money")
            .setDescription(`This person has no money so you cant rob anything from them`)
            .setColor("#2c2f33")
            .setThumbnail(message.guild.iconURL())
        )
        const prefix = '$'
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        client.limits.delete(`${command}-${message.author.id}`)
        return
    }

    if (userPocket <= 5000) {
        message.inlineReply(new dsc.MessageEmbed()
            .setTitle("You dont have enough money")
            .setDescription(`You need atleast \`5000\` nightbux to use bankrob`)
            .setColor("#2c2f33")
            .setThumbnail(message.guild.iconURL())
        )
        const prefix = '$'
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        client.limits.delete(`${command}-${message.author.id}`)
        return
    }
    

    message.inlineReply(new discord.MessageEmbed()
        .setAuthor(`Bank Robbing | ${message.author.username}`, message.guild.iconURL())
        .setDescription(`You have entered the users bank...
        
        You are now attempting to get the money from the vault`)
    ).then(msg => {
        
        wait(2000).then(()=>{


    if (user.ninjasuit == 1){
        const number1 = Math.floor(Math.random() * 10)
        const romax = robbeeBal.pocket
const romin = 0
const romax1 = (robbeeBal.bank / 3)
console.log(`${romax1} | this is bank / 3`)
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
    
   
    const number = Math.floor(Math.random() * 5)
   
    console.log(number)
    if (number == 3 || number == 5) {
        msg.edit(robbee && new dsc.MessageEmbed()
            .setTitle(`Successfully robbed ${robbee.user.username}`)
            .setDescription(`You have just robbed ${robbee} for <:nightbux:902400327410679849>\`${robbed}\``)
            .setColor("#2c2f33")
            .setThumbnail(message.guild.iconURL())
        )
        let newPocket = userPocket + parseInt(robbed)
        let newRobbeeBank = robeeBank - parseInt(robbed)
        db.query('UPDATE user SET pocket = ? WHERE user_id = ?', [newPocket, message.member.id])
        db.query('UPDATE user SET bank = ? WHERE user_id = ?', [newRobbeeBank, robbee.user.id])
    } else {
        msg.edit(new dsc.MessageEmbed()
            .setTitle(`Failed Rob`)
            .setDescription(`You were unsuccessful in your attempt to rob ${robbee}, you have been fined <:nightbux:902400327410679849>\`5000\``)
            .setColor("#2c2f33")
            .setThumbnail(message.guild.iconURL())
        )
        let newPocket = userPocket - 5000
        db.query('UPDATE user SET pocket = ? WHERE user_id = ?', [newPocket, message.member.id])
    }
    
}

if (user.ninjasuit == 2){
    const number1 = Math.floor(Math.random() * 10)
        const romax = robbeeBal.pocket
const romin = 0
const romax1 = (robbeeBal.bank / 3)
console.log(`${romax1} | this is bank / 3`)
console.log(`${romax} | this is pocket`)
console.log(`${romin} | this is minimum`)
console.log(`${number1} | this is the number`)
    if(number1 == 9 || number1 == 8) {
        robbed = Math.floor(Math.random() * (romax - romax1) + romax1)
        console.log(robbed)
    }
    else {
        robbed = Math.floor(Math.random() * (romax1 - romin) + romin)
        console.log(robbed)
    }
    const number = Math.floor(Math.random() * 3)

    console.log(number)
    if (number == 2 || number == 3) {
        msg.edit(robbee && new dsc.MessageEmbed()
            .setTitle(`Successfully robbed ${robbee.user.username}`)
            .setDescription(`You have just robbed ${robbee} for <:nightbux:902400327410679849>\`${robbed}\``)
            .setColor("#2c2f33")
            .setThumbnail(message.guild.iconURL())
        )
        let newPocket = userPocket + parseInt(robbed)
        let newRobbeeBank = robeeBank - parseInt(robbed)
        db.query('UPDATE user SET pocket = ? WHERE user_id = ?', [newPocket, message.member.id])
        db.query('UPDATE user SET bank = ? WHERE user_id = ?', [newRobbeeBank, robbee.user.id])
    } else {
        msg.edit(new dsc.MessageEmbed()
            .setTitle(`Failed Rob`)
            .setDescription(`You were unsuccessful in your attempt to rob ${robbee}, you have been fined <:nightbux:902400327410679849>\`5000\``)
            .setColor("#2c2f33")
            .setThumbnail(message.guild.iconURL())
        )
        let newPocket = userPocket - 5000
        db.query('UPDATE user SET pocket = ? WHERE user_id = ?', [newPocket, message.member.id])
    }
    
}



if (user.ninjasuit == 3){
    const number1 = Math.floor(Math.random() * 10)
        const romax = robbeeBal.pocket
const romin = 0
const romax1 = (robbeeBal.bank / 3)
console.log(`${romax1} | this is bank / 3`)
console.log(`${romax} | this is pocket`)
console.log(`${romin} | this is minimum`)
console.log(`${number1} | this is the number`)
    if(number1 == 9 || number1 == 8 || number1 == 6) {
        robbed = Math.floor(Math.random() * (romax - romax1) + romax1)
        console.log(robbed)
    }
    else {
        robbed = Math.floor(Math.random() * (romax1 - romin) + romin)
        console.log(robbed)
    }
    const number = Math.floor(Math.random() * 4)
 
    console.log(number)
    if (number == 1 || number == 2 || number == 3) {
        msg.edit(robbee && new dsc.MessageEmbed()
            .setTitle(`Successfully robbed ${robbee.user.username}`)
            .setDescription(`You have just robbed ${robbee} for <:nightbux:902400327410679849>\`${robbed}\``)
            .setColor("#2c2f33")
            .setThumbnail(message.guild.iconURL())
        )
        let newPocket = userPocket + parseInt(robbed)
        let newRobbeeBank = robeeBank - parseInt(robbed)
        db.query('UPDATE user SET pocket = ? WHERE user_id = ?', [newPocket, message.member.id])
        db.query('UPDATE user SET bank = ? WHERE user_id = ?', [newRobbeeBank, robbee.user.id])
    } else {
        msg.edit(new dsc.MessageEmbed()
            .setTitle(`Failed Rob`)
            .setDescription(`You were unsuccessful in your attempt to rob ${robbee}, you have been fined <:nightbux:902400327410679849>\`5000\``)
            .setColor("#2c2f33")
            .setThumbnail(message.guild.iconURL())
        )
        let newPocket = userPocket - 5000
        db.query('UPDATE user SET pocket = ? WHERE user_id = ?', [newPocket, message.member.id])
    }
    
}

})})



}

};
module.exports.requirements = {
    userPerms: [],
    clientPerms: [],
    ownerOnly: false
}

module.exports.limits = {
    rateLimit: 1,
    cooldown: 900000,
    embedMessage: `**Bankrob** is currently on cooldown of **30 minutes**, please wait till the **30 minutes** is over`
}