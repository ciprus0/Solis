const Discord = require("discord.js")
const functions = require("../../structures/functions")
module.exports = {
    name: 'leaderboard',
    aliases: ['lb'],
    category: 'User',
    utilisation: '{prefix}lb <page>',
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

        let user1

        try {
            await db.promise().query('SELECT * FROM messagecount WHERE user_id = ?', [message.author.id]).then(result => {
                user1 = result[0][0]
        
            })
        } catch (error) {
            console.error(error)
            message.inlineReply("Sorry, you were not in the database, please send the command again!")
            
            const args = message.content.slice(prefix.length).trim().split(/ +/g)
            const command = args.shift().toLowerCase()
            client.limits.delete(command + '-' + message.author.id)
            return
        }

    let data
    try {
        await db.promise().query('SELECT * FROM user ORDER BY networth DESC', [message.guild.id]).then(result => {
            data = result[0]
        })
    } catch (error) {
        console.log(error)
    }
    if(!data.length) return message.reply("There is no leaderboard yet!")
    const page = functions.pages(data,10,args[0]||1)
    if(!page) return message.reply("This page does not exist")

    const userTotal = user.pocket + user.bank
    
    message.inlineReply(new Discord.MessageEmbed()
    .setAuthor(`Global Leaderboard | Total NightBux`,message.guild.iconURL())
    .setColor("#f44336")
    .setDescription(page.map(e => `<@${e.user_id}> | <:wallet:902400881029431348> Networth **${(parseInt(e.pocket)) + (parseInt(e.bank))}**`))
    .setFooter(`Looking for the next page? Try ${prefix}leaderboard [PageNbr]`))
    
   
       
    
}

};

module.exports.requirements = {
    userPerms: [],
    clientPerms: [],
    ownerOnly: false
}

module.exports.limits = {
    rateLimit: 3,
    cooldown: 2000,
    embedMessage: `**Leaderboard** is currently on cooldown of **2 seconds**, please wait till the **2 seconds** is over`
}