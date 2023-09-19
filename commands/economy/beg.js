const discord = require("discord.js")
module.exports = {
    name: 'beg',
    aliases: ['None'],
    category: 'Action',
    utilisation: '{prefix}beg',
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

const job1 = ["Donald Trump", 'Xplicit', 'Tim', 'Ghost', 'Psycho', 'Maddened', 'Jaszy', 'KSI', 'Logan Paul', 'Jake Paul', 'Bryce Hall']
const job = ['Hillary Clinton', 'Gwyneth Paltrow', 'Tom Brady', 'Michael Jordan', 'Chris Evans', 'Joe Biden', 'Steve Jobs', 'Miley Cyrus', 'DaBaby', 'Roddy Ricch', 'Harry Styles', 'Charli DaMelio', 'Addison Rae']
let num = Math.floor( Math.random() * job.length );
let num1 = Math.floor( Math.random() * job1.length );
const number = Math.floor(Math.random() * 2)
let workedFor = parseInt(user.pocket)
    const Money = Math.floor(Math.random() * (500 - 150) + 150)
    let balBefore = workedFor
    workedFor += Money
    if(!balBefore){balBefore = 0}
    if (number == 1) {
    const embed1 = new discord.MessageEmbed()
        .setAuthor(`${message.author.tag} You have successfully begged!`)
        .setDescription(`You just got money from \`${job[num]}\``)
        .addField("Balance Before",`<:nightbux:902400327410679849>\`${balBefore}\``,true)
        .addField("Given",`<:nightbux:902400327410679849>\`${Money}\``,true)
        .addField("Balance After",`<:nightbux:902400327410679849>\`${workedFor}\``,true)
        .setColor("#2c2f33")
        .setThumbnail(message.guild.iconURL())
    

    db.query('UPDATE user SET pocket = ? WHERE user_id = ?',[workedFor,message.member.id])
    await message.inlineReply(embed1)
    
    } else {
        const embed1 = new discord.MessageEmbed()
        .setAuthor(`${message.author.tag} You just got ignored..`)
        .setDescription(`\`${job1[num1]}\` just walked right past you LOL`)
        
        .setColor("#2c2f33")
        .setThumbnail(message.guild.iconURL())
    return message.inlineReply(embed1)
    }
        
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
        embedMessage: `**Work** is currently on cooldown of **10 minutes**, please wait till the **10 minutes** is over`
    }