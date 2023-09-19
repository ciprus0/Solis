const  Discord = require("discord.js")
const wait = require('util').promisify(setTimeout);
module.exports = {
    name: 'give',
    aliases: ['donate'],
    category: 'Action',
    utilisation: '{prefix}give [ping user] [amount to give]',
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

let toGive = parseInt(args[1])
let robbee = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if (!robbee) {
        message.inlineReply(new dsc.MessageEmbed()
            .setTitle("Nobody to give")
            .setDescription(`Please supply someone to give money to`)
            .setColor("#2c2f33")
            .setThumbnail(message.guild.iconURL())
        )
        return
    }

    if (robbee.user.id == message.author.id) {
        message.inlineReply(new dsc.MessageEmbed()
            .setTitle("Can't give money to yourself")
            .setDescription(`Please supply someone to give money to... you can't give money to yourself`)
            .setColor("#2c2f33")
            .setThumbnail(message.guild.iconURL())
        )
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

    


   


   /* const number = Math.floor(Math.random() * 2)
    const robbed = Math.floor(Math.random() * robbeeBal.pocket)
    console.log(number)
    if (number == 1) {
        message.inlineReply(robbee && new dsc.MessageEmbed()
            .setTitle(`Successfully robbed ${robbee.user.username}`)
            .setDescription(`You have just robbed ${robbee} for <:nightbux:902400327410679849>${robbed}`)
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
            .setDescription(`You were unsuccessful in your attempt to rob ${robbee}, you have been fined <:nightbux:902400327410679849>500`)
            .setColor("#2c2f33")
            .setThumbnail(message.guild.iconURL())
        )
        let newPocket = userPocket - 500
        db.query('UPDATE user SET pocket = ? WHERE user_id = ?', [newPocket, message.member.id])
    }
*/

  
let bank = parseInt(user.bank)
if (!toGive) {
    return message.inlineReply(new Discord.MessageEmbed()
    .setTitle("No money to give")
    .setDescription(`Please supply an amount to give.. you can't donate nothing`)
    .setColor("#2c2f33")
    .setThumbnail(message.guild.iconURL()))
}
if(Number.isNaN(toGive)){
    return  message.reply(new Discord.MessageEmbed()
    .setAuthor(`You have not supplied a number.`,message.author.displayAvatarURL({size: 2048}))
    .setDescription("You havent supplied a number, please redo the command with a number")
    .addField("<:wallet:902400881029431348> Wallet",`<:nightbux:902400327410679849>\`${pocket}\``,true)
    .addField("<:bank:851656706555117588> Bank",`<:nightbux:902400327410679849>\`${bank}\``,true)
    .setThumbnail(message.guild.iconURL()))
    
}

if((toGive > userPocket )){
    return  message.reply(new Discord.MessageEmbed()
    .setAuthor(`Not enough money in your wallet`,message.author.displayAvatarURL({size: 2048}))
    .setDescription("Please supply a number upto your wallet balance")
    .addField("<:wallet:902400881029431348> Wallet",`<:nightbux:902400327410679849>\`${user.pocket}\``,true)
    .addField("<:bank:851656706555117588> Bank",`<:nightbux:902400327410679849>\`${user.bank}\``,true)
    .setThumbnail(message.guild.iconURL()))
    
}



if ((toGive < 0)){
   return message.reply(new Discord.MessageEmbed()
    .setAuthor(`You cannot give 0 money`,message.author.displayAvatarURL({size: 2048}))
    .setDescription("Please choose a number that is not **0** and try again")
    .addField("<:wallet:902400881029431348> Wallet",`<:nightbux:902400327410679849>\`${pocket}\``,true)
    .addField("<:bank:851656706555117588> Bank",`<:nightbux:902400327410679849>\`${bank}\``,true)
    .setThumbnail(message.guild.iconURL()))
    
    
}
let newPocket = userPocket - parseInt(toGive)
        let newRobbeePocket = parseInt(robbeeBal.pocket) + parseInt(toGive)
        db.query('UPDATE user SET pocket = ? WHERE user_id = ?', [newPocket, message.member.id])
        db.query('UPDATE user SET pocket = ? WHERE user_id = ?', [newRobbeePocket, robbee.user.id])


return message.inlineReply(new Discord.MessageEmbed()
.setAuthor(`You have given money`,message.author.displayAvatarURL({size: 2048}))
    .setDescription(`<@${message.author.id}> has given <:nightbux:902400327410679849>\`${toGive}\` to <@${robbee.user.id}>`)
    .addField("<:wallet:902400881029431348> Wallet",`<:nightbux:902400327410679849>\`${newPocket}\``,true)
    .addField("<:bank:851656706555117588> Bank",`<:nightbux:902400327410679849>\`${bank}\``,true)
    .setThumbnail(message.guild.iconURL()))
    
    }};

    module.exports.requirements = {
        userPerms: [],
        clientPerms: [],
        ownerOnly: false
    }
    
    module.exports.limits = {
        rateLimit: 2,
        cooldown: 2000,
        embedMessage: `**Give** is currently on cooldown of **2 seconds**, please wait till the **2 seconds** is over`
    }
    