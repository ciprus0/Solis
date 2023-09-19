const discord = require("discord.js")

const wait = require('util').promisify(setTimeout);
module.exports = {
    name: 'hunt',
    aliases: ['None'],
    category: 'Action',
    utilisation: '{prefix}hunt',
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


    let hunt
    try {
        await db.promise().query('SELECT * FROM hunt WHERE user_id = ?', [message.author.id]).then(result => {
            hunt = result[0][0]

        })
    } catch (error) {
        console.error(error)
        message.reply("This user isnt in the database, please ask them to run the command and try again")
        return
    }

    if (!hunt) {
        db.query(`INSERT INTO hunt (user_id) VALUES(?)`, [message.author.id]);
        return
    }



    if (user.gun == 0) {
        message.inlineReply(new discord.MessageEmbed()
            .setAuthor(`Hunting | ${message.author.username}`, message.guild.iconURL())
            .setDescription(`You do not own a gun, please buy one from the shop`)
        )
        const prefix = '$'
        const args = message.content.slice(prefix.length).trim().split(/ +/g)
        const command = args.shift().toLowerCase()
        client.limits.delete(command + '-' + message.author.id)
      return
    }

    message.inlineReply(new discord.MessageEmbed()
        .setAuthor(`Hunting | ${message.author.username}`, message.guild.iconURL())
        .setDescription(`You have gazed into the forest, looking for an animal..
        
        You are now waiting for an animal to come into vision`)
    ).then(msg => {
        
        wait(2000).then(()=>{

        if (user.gun == 1) {
            let chance = (Math.random() * 100);
            if (chance < 40) {// 0-79
                msg.edit(new discord.MessageEmbed()
                    .setAuthor(`Hunting | ${message.author.username}`, message.guild.iconURL())
                    .setDescription(`You have just shot an animal!`)
                    .addField(`🐿️ Animal Type`, `\`Chipmunk\``, true)
                    .addField(`Animal Price`, `<:nightbux:902400327410679849>\`3000\``, true)
                )

                db.query('UPDATE hunt SET chipmunk = chipmunk + 1 WHERE user_id = ?', [message.author.id])
            }
            else if (chance < 70) { // 80-84
                msg.edit(new discord.MessageEmbed()
                .setAuthor(`Hunting | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`You have shot an animal!`)
                .addField(`🦆 Animal Type`, `\`Duck\``, true)
                .addField(`Animal Price`, `<:nightbux:902400327410679849>\`5,000\``, true)
            )

            db.query('UPDATE hunt SET duck = duck + 1 WHERE user_id = ?', [message.author.id])
            } else if (chance < 85) { // 80-84
                msg.edit(new discord.MessageEmbed()
                .setAuthor(`Hunting | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`You have shot an animal!`)
                .addField(`🦊 Animal Type`, `\`Fox\``, true)
                .addField(`Animal Price`, `<:nightbux:902400327410679849>\`7,000\``, true)
            )

            db.query('UPDATE hunt SET fox = fox + 1 WHERE user_id = ?', [message.author.id])
            }else if (chance < 95) { // 80-84
                msg.edit(new discord.MessageEmbed()
                .setAuthor(`Hunting | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`You have shot an animal!`)
                .addField(`🦌 Animal Type`, `\`Deer\``, true)
                .addField(`Animal Price`, `<:nightbux:902400327410679849>\`10,000\``, true)
            )

            db.query('UPDATE hunt SET deer = deer + 1 WHERE user_id = ?', [message.author.id])
            }
            else { // 85-99
                msg.edit(new discord.MessageEmbed()
                .setAuthor(`Hunting | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`You have shot an animal!`)
                .addField(`🐻 Animal Type`, `\`Bear\``, true)
                .addField(`Animal Price`, `<:nightbux:902400327410679849>\`20,000\``, true)
            )

            db.query('UPDATE hunt SET bear = bear + 1 WHERE user_id = ?', [message.author.id])
            }
        }

        if (user.gun == 2) {
            let chance = (Math.random() * 75) + 25;
            if (chance < 40) {// 0-79
                msg.edit(new discord.MessageEmbed()
                    .setAuthor(`Hunting | ${message.author.username}`, message.guild.iconURL())
                    .setDescription(`You have just shot an animal!`)
                    .addField(`🐿️ Animal Type`, `\`Chipmunk\``, true)
                    .addField(`Animal Price`, `<:nightbux:902400327410679849>\`3000\``, true)
                )

                db.query('UPDATE hunt SET chipmunk = chipmunk + 1 WHERE user_id = ?', [message.author.id])
            }
            else if (chance < 70) { // 80-84
                msg.edit(new discord.MessageEmbed()
                .setAuthor(`Hunting | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`You have shot an animal!`)
                .addField(`🦆 Animal Type`, `\`Duck\``, true)
                .addField(`Animal Price`, `<:nightbux:902400327410679849>\`5,000\``, true)
            )

            db.query('UPDATE hunt SET duck = duck + 1 WHERE user_id = ?', [message.author.id])
            } else if (chance < 85) { // 80-84
                msg.edit(new discord.MessageEmbed()
                .setAuthor(`Hunting | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`You have shot an animal!`)
                .addField(`🦊 Animal Type`, `\`Fox\``, true)
                .addField(`Animal Price`, `<:nightbux:902400327410679849>\`7,000\``, true)
            )

            db.query('UPDATE hunt SET fox = fox + 1 WHERE user_id = ?', [message.author.id])
            }else if (chance < 95) { // 80-84
                msg.edit(new discord.MessageEmbed()
                .setAuthor(`Hunting | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`You have shot an animal!`)
                .addField(`🦌 Animal Type`, `\`Deer\``, true)
                .addField(`Animal Price`, `<:nightbux:902400327410679849>\`10,000\``, true)
            )

            db.query('UPDATE hunt SET deer = deer + 1 WHERE user_id = ?', [message.author.id])
            }
            else { // 85-99
                msg.edit(new discord.MessageEmbed()
                .setAuthor(`Hunting | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`You have shot an animal!`)
                .addField(`🐻 Animal Type`, `\`Bear\``, true)
                .addField(`Animal Price`, `<:nightbux:902400327410679849>\`20,000\``, true)
            )

            db.query('UPDATE hunt SET bear = bear + 1 WHERE user_id = ?', [message.author.id])
            }
        }

        if (user.gun == 3) {
            let chance = (Math.random() * 50) + 50;
            if (chance < 40) {// 0-79
                msg.edit(new discord.MessageEmbed()
                    .setAuthor(`Hunting | ${message.author.username}`, message.guild.iconURL())
                    .setDescription(`You have just shot an animal!`)
                    .addField(`🐿️ Animal Type`, `\`Chipmunk\``, true)
                    .addField(`Animal Price`, `<:nightbux:902400327410679849>\`3000\``, true)
                )

                db.query('UPDATE hunt SET chipmunk = chipmunk + 1 WHERE user_id = ?', [message.author.id])
            }
            else if (chance < 70) { // 80-84
                msg.edit(new discord.MessageEmbed()
                .setAuthor(`Hunting | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`You have shot an animal!`)
                .addField(`🦆 Animal Type`, `\`Duck\``, true)
                .addField(`Animal Price`, `<:nightbux:902400327410679849>\`5,000\``, true)
            )

            db.query('UPDATE hunt SET duck = duck + 1 WHERE user_id = ?', [message.author.id])
            } else if (chance < 85) { // 80-84
                msg.edit(new discord.MessageEmbed()
                .setAuthor(`Hunting | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`You have shot an animal!`)
                .addField(`🦊 Animal Type`, `\`Fox\``, true)
                .addField(`Animal Price`, `<:nightbux:902400327410679849>\`7,000\``, true)
            )

            db.query('UPDATE hunt SET fox = fox + 1 WHERE user_id = ?', [message.author.id])
            }else if (chance < 95) { // 80-84
                msg.edit(new discord.MessageEmbed()
                .setAuthor(`Hunting | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`You have shot an animal!`)
                .addField(`🦌 Animal Type`, `\`Deer\``, true)
                .addField(`Animal Price`, `<:nightbux:902400327410679849>\`10,000\``, true)
            )

            db.query('UPDATE hunt SET deer = deer + 1 WHERE user_id = ?', [message.author.id])
            }
            else { // 85-99
                msg.edit(new discord.MessageEmbed()
                .setAuthor(`Hunting | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`You have shot an animal!`)
                .addField(`🐻 Animal Type`, `\`Bear\``, true)
                .addField(`Animal Price`, `<:nightbux:902400327410679849>\`20,000\``, true)
            )

            db.query('UPDATE hunt SET bear = bear + 1 WHERE user_id = ?', [message.author.id])
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
    cooldown: 300000,
    embedMessage: `**Hunt** is currently on cooldown of **5 minutes**, please wait till the **5 minutes** is over`
}