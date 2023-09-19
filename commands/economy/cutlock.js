const fs = require("fs")
const { user } = require("osenv")
const db = require("../../database/db")
const dsc = require('discord.js')
const Discord = require('discord.js')
const discord = require('discord.js')
const wait = require('util').promisify(setTimeout);
module.exports = {
    name: 'cutlock',
    aliases: ['cutbolt', 'boltcut'],
    category: 'Action',
    utilisation: '{prefix}cutlock [user]',
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


    if(robbeeBal.uselocker == 0){
         message.inlineReply('This user doesn\'t even have a lock enabled..')
         const args = message.content.slice(prefix.length).trim().split(/ +/g)
     const command = args.shift().toLowerCase()
     client.limits.delete(command + '-' + message.author.id)
     return
    }
if(user.boltcutters == '0'){
     message.inlineReply(`Uh.. you don't even own bolt cutters. Use \`${prefix}buy cutters\` to get some.`)
     const args = message.content.slice(prefix.length).trim().split(/ +/g)
     const command = args.shift().toLowerCase()
     client.limits.delete(command + '-' + message.author.id)
     return
} else {
 const number = Math.floor(Math.random() * 2)
 if (number == 1){
    let bolts = parseInt(user.boltcutters)
    let newbolts = (bolts - 1)
    const embed = new Discord.MessageEmbed()
     .setAuthor(`Lock Cutting | ${message.author.username}`, message.guild.iconURL())
     .setDescription(`You successfully cut through \`${robbee.user.username}\`'s lock... now anybody can rob them.`)
     message.inlineReply(embed)
     db.query('UPDATE user SET locker = 0 WHERE user_id = ?', [robbee.user.id])
     db.query('UPDATE user SET uselocker = 0 WHERE user_id = ?', [robbee.user.id])
     return
 } else {
     let bolts = parseInt(user.boltcutters)
     let newbolts = (bolts - 1)
     const embed = new Discord.MessageEmbed()
     .setAuthor(`Lock Cutting | ${message.author.username}`, message.guild.iconURL())
     .setDescription(`LOL, you failed horribly.`)
     message.inlineReply(embed)
     
     return
 }
}





    }};



    module.exports.requirements = {
        userPerms: [],
        clientPerms: [],
        ownerOnly: false
    }
    
    module.exports.limits = {
        rateLimit: 1,
        cooldown: 300000,
        embedMessage: `**Cutlock** is currently on cooldown of **5 minutes**, please wait till the **5 minutes** is over`
    }
    