const Discord = require("discord.js")
const db = require("../../database/db")

module.exports = {
    name: 'removelock',
    aliases: ['disablelock'],
    category: 'Action',
    utilisation: '{prefix}removelock',
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
    if (user.uselocker == 0) {
        message.channel.send(new Discord.MessageEmbed()
            .setAuthor(`Padlock not Enabled | ${message.author.username}`, message.guild.iconURL())
            .setDescription(`You don\'t even have a padlock enabled. Do \`${prefix}use lock\` to enable it.`)
            .setColor("2c2f33")
        )
        return
    }

    message.inlineReply(new Discord.MessageEmbed()
    .setAuthor(`Disabled Padlock | ${message.author.username}`, message.guild.iconURL())
    .setDescription(`Your padlock has now been disabled.
    
    Please do \`${prefix}use lock\` to enable it again.`)
    .setColor("2c2f33")
    )
    db.query("UPDATE user SET uselocker = 0 WHERE user_id = ?", [message.author.id])
}

};

module.exports.requirements = {
    userPerms: [],
    clientPerms: [],
    ownerOnly: false
}

module.exports.limits = {
    rateLimit: 2,
    cooldown: 2000,
    embedMessage: `**Unlock** is currently on cooldown of **2s**, please wait till the **2s** is over`
}