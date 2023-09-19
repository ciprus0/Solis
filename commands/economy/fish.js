const discord = require("discord.js")

const wait = require('util').promisify(setTimeout);
module.exports = {
    name: 'fish',
    aliases: ['None'],
    category: 'Action',
    utilisation: '{prefix}fish',
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


    let fish
    try {
        await db.promise().query('SELECT * FROM fish WHERE user_id = ?', [message.author.id]).then(result => {
            fish = result[0][0]
      
        })
    } catch (error) {
        console.error(error)
        message.inlineReply("Sorry, you were not in the database, please send the command again!")
        const prefix = '$'
        const args = message.content.slice(prefix.length).trim().split(/ +/g)
        const command = args.shift().toLowerCase()
        client.limits.delete(command + '-' + message.author.id)
        return
    }

    if (!fish) {
        db.query(`INSERT INTO fish (user_id) VALUES(?)`, [message.author.id]);
        const prefix = '$'
        const args = message.content.slice(prefix.length).trim().split(/ +/g)
        const command = args.shift().toLowerCase()
        client.limits.delete(command + '-' + message.author.id)
        return message.inlineReply('You were not in the database, please say the command again!')
    }



    if (user.fishing_rod == 0) {
        message.inlineReply(new discord.MessageEmbed()
            .setAuthor(`Fishing | ${message.author.username}`, message.guild.iconURL())
            .setDescription(`You do now own a fishing rod, please buy one from the shop`)
        )
        const prefix = '$'
        const args = message.content.slice(prefix.length).trim().split(/ +/g)
        const command = args.shift().toLowerCase()
        client.limits.delete(command + '-' + message.author.id)
       return
    }

    message.inlineReply(new discord.MessageEmbed()
        .setAuthor(`Fishing | ${message.author.username}`, message.guild.iconURL())
        .setDescription(`You have dropped your rod into the water
        
        You are now waiting for a bite`)
    ).then(msg => {
        
        wait(2000).then(()=>{

        if (user.fishing_rod == 1) {
            let chance = (Math.random() * 100);
            if (chance < 75) {// 0-79
                msg.edit(new discord.MessageEmbed()
                    .setAuthor(`Fishing | ${message.author.username}`, message.guild.iconURL())
                    .setDescription(`You have just caught a fish!`)
                    .addField(`🐟 Fish Type`, `\`Cod Fish\``, true)
                    .addField(`Fish Price`, `<:nightbux:902400327410679849>\`1000\``, true)
                )

                db.query('UPDATE fish SET cod = cod + 1 WHERE user_id = ?', [message.author.id])
            }
            else if (chance < 95) { // 80-84
                msg.edit(new discord.MessageEmbed()
                .setAuthor(`Fishing | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`You have just caught a fish!`)
                .addField(`🐠 Fish Type`, `\`Tropical Fish\``, true)
                .addField(`Fish Price`, `<:nightbux:902400327410679849>\`3,000\``, true)
            )

            db.query('UPDATE fish SET tropical = tropical + 1 WHERE user_id = ?', [message.author.id])
            }
            else { // 85-99
                msg.edit(new discord.MessageEmbed()
                .setAuthor(`Fishing | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`You have just caught a fish!`)
                .addField(`🐡 Fish Type`, `\`BlowFish\``, true)
                .addField(`Fish Price`, `<:nightbux:902400327410679849>\`7,000\``, true)
            )

            db.query('UPDATE fish SET blowfish = blowfish + 1 WHERE user_id = ?', [message.author.id])
            }
        }

        if (user.fishing_rod == 2) {
            let chance = (Math.random() * 75) + 25;
            if (chance < 75) {// 0-79
                msg.edit(new discord.MessageEmbed()
                    .setAuthor(`Fishing | ${message.author.username}`, message.guild.iconURL())
                    .setDescription(`You have just caught a fish!`)
                    .addField(`🐟 Fish Type`, `\`Cod Fish\``, true)
                    .addField(`Fish Price`, `<:nightbux:902400327410679849>\`1000\``, true)
                )

                db.query('UPDATE fish SET cod = cod + 1 WHERE user_id = ?', [message.author.id])
            }
            else if (chance < 95) { // 80-84
                msg.edit(new discord.MessageEmbed()
                .setAuthor(`Fishing | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`You have just caught a fish!`)
                .addField(`🐠 Fish Type`, `\`Tropical Fish\``, true)
                .addField(`Fish Price`, `<:nightbux:902400327410679849>\`3,000\``, true)
            )

            db.query('UPDATE fish SET tropical = tropical + 1 WHERE user_id = ?', [message.author.id])
            }
            else { // 85-99
                msg.edit(new discord.MessageEmbed()
                .setAuthor(`Fishing | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`You have just caught a fish!`)
                .addField(`🐡 Fish Type`, `\`BlowFish\``, true)
                .addField(`Fish Price`, `<:nightbux:902400327410679849>\`7,000\``, true)
            )

            db.query('UPDATE fish SET blowfish = blowfish + 1 WHERE user_id = ?', [message.author.id])
            }
        }

        if (user.fishing_rod == 3) {
            let chance = (Math.random() * 50) + 50;
            if (chance < 75) {// 0-79
                msg.edit(new discord.MessageEmbed()
                    .setAuthor(`Fishing | ${message.author.username}`, message.guild.iconURL())
                    .setDescription(`You have just caught a fish!`)
                    .addField(`🐟 Fish Type`, `\`Cod Fish\``, true)
                    .addField(`Fish Price`, `<:nightbux:902400327410679849>\`1000\``, true)
                )
                
                db.query('UPDATE fish SET cod = cod + 1 WHERE user_id = ?', [message.author.id])
            }
            else if (chance < 95) { // 80-84
                msg.edit(new discord.MessageEmbed()
                .setAuthor(`Fishing | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`You have just caught a fish!`)
                .addField(`🐠 Fish Type`, `\`Tropical Fish\``, true)
                .addField(`Fish Price`, `<:nightbux:902400327410679849>\`3,000\``, true)
            )

            db.query('UPDATE fish SET tropical = tropical + 1 WHERE user_id = ?', [message.author.id])
            }
            else { // 85-99
                msg.edit(new discord.MessageEmbed()
                .setAuthor(`Fishing | ${message.author.username}`, message.guild.iconURL())
                .setDescription(`You have just caught a fish!`)
                .addField(`🐡 Fish Type`, `\`BlowFish\``, true)
                .addField(`Fish Price`, `<:nightbux:902400327410679849>\`7,000\``, true)
            )

            db.query('UPDATE fish SET blowfish = blowfish + 1 WHERE user_id = ?', [message.author.id])
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
    embedMessage: `**Fish** is currently on cooldown of **30 minute**, please wait till the **30 minutes** is over`
}