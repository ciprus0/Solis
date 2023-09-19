const discord = require("discord.js")

module.exports = {
    name: 'steal',
    aliases: ['None'],
    category: 'Action',
    utilisation: '{prefix}steal',
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

const stole = ["Change", "Credit-Cards", "Money", "Pokemon cards", "PC Parts", "Sunglasses", "Groceries", "Microphones", "Furniture", "Wallets", "Crypto", "iPhones", "Toiletries"]
let num = Math.floor( Math.random() * stole.length );

let stoleFor = parseInt(user.pocket)
    const Money = Math.floor(Math.random() * (500 - 150) + 150)
    let balBefore = stoleFor
    stoleFor += Money
    if(!balBefore){balBefore = 0}

    const embed1 = new discord.MessageEmbed()
        .setAuthor(`${message.author.tag} | Steal`)
        .setDescription(`You stole some \`${stole[num]}\``)
        .addField("Wallet Before",`<:nightbux:902400327410679849>\`${balBefore}\``,true)
        .addField("Stole",`<:nightbux:902400327410679849>\`${Money}\``,true)
        .addField("Wallet After",`<:nightbux:902400327410679849>\`${stoleFor}\``,true)
        .setColor("#2c2f33")
        .setThumbnail(message.guild.iconURL())
    

    db.query('UPDATE user SET pocket = ? WHERE user_id = ?',[stoleFor,message.member.id])
    await message.inlineReply(embed1)
    
    
        
    }
    
};
    
    module.exports.requirements = {
        userPerms: [],
        clientPerms: [],
        ownerOnly: false
    }
    
    module.exports.limits = {
        rateLimit: 1,
        cooldown: 60000,
        embedMessage: `**Steal** is currently on cooldown of **10 minutes**, please wait till the **10 minutes** is over`
    }