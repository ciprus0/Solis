const db = require("../../database/db")
const dsc = require('discord.js')

module.exports = {
    name: 'daily',
    aliases: ['None'],
    category: 'Money',
    utilisation: '{prefix}daily',
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
    const Money = Math.floor(Math.random() * (900) + 100)
    pocket = parseInt(user.pocket)
    
    newPocket = (pocket + Money)
    db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[newPocket,message.member.id])

    message.inlineReply(new dsc.MessageEmbed()
    .setAuthor(`Daily Credits`,message.author.displayAvatarURL())
    .addField("Wallet Before", `<:nightbux:902400327410679849>\`${user.pocket}\``,true)
    .addField("Daily Coins", `<:nightbux:902400327410679849>\`${Money}\``,true)
    .addField("Wallet After",`<:nightbux:902400327410679849>\`${newPocket}\``,true)
    .setColor("#2c2f33")
    .setThumbnail(message.guild.iconURL({size: 2048})))
 
}

};

module.exports.requirements = {
    userPerms: [],
    clientPerms: [],
    ownerOnly: false
}

module.exports.limits = {
    rateLimit: 1,
    cooldown: 8.64e+7,
    embedMessage: `**Daily** can only be used once a day, please wait until it's been 24 hours since you last used it!`
}