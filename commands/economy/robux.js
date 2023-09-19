const discord = require("discord.js")

module.exports = {
    name: 'robux',
    aliases: ['rbx'],
    category: 'Random',
    utilisation: '{prefix}robux',
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
    message.channel.send(new discord.MessageEmbed()

    .setAuthor(`Robux For Free?!?!?!?! | ${message.author.username}`, message.guild.iconURL())
    .setDescription(`Hahahahahahhahahahahhaa you want robux kid? get lost you poor useless piece of shit`)
    .setColor("#2c2f33")
    )
}

};

module.exports.requirements = {
    userPerms: [],
    clientPerms: [],
    ownerOnly: false
}

module.exports.limits = {
    rateLimit: 1,
    cooldown: 2000,
    embedMessage: `**Robux** is currently on cooldown of **2 seconds**, please wait till the **2 seconds** is over`
}