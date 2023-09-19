const fs = require("fs")
const db = require("../../database/db")

module.exports = {
    name: 'deposit',
    aliases: ['dep', 'd'],
    category: 'Money',
    utilisation: '{prefix}deposit [amount]',
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

    let toDep = parseInt(args[0])
    let pocket = parseInt(user.pocket)
    let bank = parseInt(user.bank)

if(args[0] == 'all' || args[0] == 'max'){

const newbanka = (bank + pocket)

    message.inlineReply(new dsc.MessageEmbed()
        .setAuthor(`Successfully deposited into bank.`,message.author.displayAvatarURL({size: 2048}))
        .setDescription("You have deposited into your bank")
        .addField("<:wallet:902400881029431348> Wallet",`<:nightbux:902400327410679849>\`0\``,true)
        .addField("Amount Deposited", `<:nightbux:902400327410679849>\`${pocket}\``,true)
        .addField("<:bank:851656706555117588> Bank",`<:nightbux:902400327410679849>\`${newbanka}\``,true)
        .setColor("#2c2f33")
        .setThumbnail(message.guild.iconURL()))
        
            db.query('UPDATE user SET pocket = 0 WHERE user_id = ?',[message.member.id])
            db.query('UPDATE user SET bank = ? WHERE user_id = ?',[newbanka,message.member.id])

            return
}


    if(!toDep){
        message.inlineReply(new dsc.MessageEmbed()
        .setAuthor(`You have not supplied an amount to transfer to your bank`,message.author.displayAvatarURL({size: 2048}))
        .setDescription("Please supply a number to transfer to your bank")
        .addField("<:wallet:902400881029431348> Wallet",`<:nightbux:902400327410679849>\`${pocket}\``,true)
        .addField("<:bank:851656706555117588> Bank",`<:nightbux:902400327410679849>\`${bank}\``,true)
        .setColor("#2c2f33")
        .setThumbnail(message.guild.iconURL()))
        return
    }

    if(Number.isNaN(toDep)){
        message.inlineReply(new dsc.MessageEmbed()
        .setAuthor(`You have not supplied a number.`,message.author.displayAvatarURL({size: 2048}))
        .setDescription("You havent supplied a number, please redo the command with a number")
        .addField("<:wallet:902400881029431348> Wallet",`<:nightbux:902400327410679849>\`${pocket}\``,true)
        .addField("<:bank:851656706555117588> Bank",`<:nightbux:902400327410679849>\`${bank}\``,true)
        .setColor("#2c2f33")
        .setThumbnail(message.guild.iconURL()))
        return
    }

    let calcDep = (bank + toDep)
    let newPocket = (pocket - toDep)

    if ((toDep < 0)){
        message.inlineReply(new dsc.MessageEmbed()
        .setAuthor(`You cannot deposit 0 into your bank`,message.author.displayAvatarURL({size: 2048}))
        .setDescription("Please choose a number that is not **0** and try again")
        .addField("<:wallet:902400881029431348> Wallet",`<:nightbux:902400327410679849>\`${pocket}\``,true)
        .addField("<:bank:851656706555117588> Bank",`<:nightbux:902400327410679849>\`${bank}\``,true)
        .setColor("#2c2f33")
        .setThumbnail(message.guild.iconURL()))
        return
    }
    if((toDep > pocket )){
        message.inlineReply(new dsc.MessageEmbed()
        .setAuthor(`Not enough money in your wallet`,message.author.displayAvatarURL({size: 2048}))
        .setDescription("Please supply a number up to your wallet balance")
        .addField("<:wallet:902400881029431348> Pocket",`<:nightbux:902400327410679849>\`${pocket}\``,true)
        .addField("<:bank:851656706555117588> Bank",`<:nightbux:902400327410679849>\`${bank}\``,true)
        .setColor("#2c2f33")
        .setThumbnail(message.guild.iconURL()))
        return
    }

    //Do the bank now


    try{
        message.inlineReply(new dsc.MessageEmbed()
        .setAuthor(`Successfully deposited into bank.`,message.author.displayAvatarURL({size: 2048}))
        .setDescription("You have deposited into your bank")
        .addField("<:wallet:902400881029431348> Wallet",`<:nightbux:902400327410679849>\`${newPocket}\``,true)
        .addField("Amount Deposited", `<:nightbux:902400327410679849>\`${toDep}\``,true)
        .addField("<:bank:851656706555117588> Bank",`<:nightbux:902400327410679849>\`${calcDep}\``,true)
        .setColor("#2c2f33")
        .setThumbnail(message.guild.iconURL()))

        //Alter Database
        try{
            db.query('UPDATE user SET pocket = ? WHERE user_id = ?',[newPocket,message.member.id])
            db.query('UPDATE user SET bank = ? WHERE user_id = ?',[calcDep,message.member.id])
        }catch(err){
            console.error(err);
            fs.appendFileSync('./commands/money/errorLog.txt',`--${Date.now()}--\n${err}\n`)
            message.inlineReply(`Error has occured, please send a message to @OG_Ghost saying \`${Date.now()}\`\n `)
        }
    }catch(err){
        console.error(err);
        fs.appendFileSync('./commands/money/errorLog.txt',`--${Date.now()}--\n${err}\n`)
        message.inlineReply(`Error has occured, please send a message to @OG_Ghost saying \`${Date.now()}\`\n `)
    }

}//poggers
};


module.exports.requirements = {
    userPerms: [],
    clientPerms: [],
    ownerOnly: false
}

module.exports.limits = {
    rateLimit: 2,
    cooldown: 2000,
    embedMessage: `**Deposit** is currently on cooldown of **2 seconds**, please wait till the **2 seconds** is over`
}