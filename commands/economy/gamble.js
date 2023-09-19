module.exports = {
    name: 'gamble',
    aliases: ['None'],
    category: 'Action',
    utilisation: '{prefix}gamble [amount]',
    module: 'economy',
    async execute(client, message, args) {
        const db1 = require("quick.db")
        db1.add(`commands_used`, 1)
    let user
    await db.promise().query('SELECT * FROM user WHERE user_id = ?',[message.member.id]).then(result => {
        user = result[0][0]
        
    })
    
    let toGamble = parseInt(args[0])
    let pocket = parseInt(user.pocket)
    let bank = parseInt(user.bank)
    const chance = Math.floor(Math.random() * 3)
 
    console.log(chance)

if(args[0] == 'max' || args[0] == 'all'){
    if(chance == 3 || chance == 1 || chance == 0 || chance == 4){

        const number1 = Math.floor(Math.random() * 10)
        const romax = pocket * 2
const romin = 0
const romax1 = (pocket / 2)
console.log(`${romax1} | this is gamble / 3`)
console.log(`${romax} | this is gamble`)
console.log(`${romin} | this is minimum`)
console.log(`${number1} | this is the number`)
    if(number1 == 9) {
        won = Math.floor(Math.random() * (romax - romax1) + romax1)
        console.log(won)
    }
    else {
        won = Math.floor(Math.random() * (romax1 - romin) + romin)
        console.log(won)
    }


    const newPocket = (won + pocket)
    try{
    db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[newPocket,message.member.id])
    }catch(err){
        console.error(err);
        fs.appendFileSync('./commands/money/errorLog.txt',`--${Date.now()}--\n${err}\n`)
        message.inlineReply(`Error has occured, please send a message to @OG_Ghost saying \`${Date.now()}\`\n `)
    }
    message.inlineReply(new dsc.MessageEmbed()
    .setAuthor(`Gamble`,message.author.displayAvatarURL())
    .setDescription(`You have gambled ${pocket}\n`)
    .addField("<:wallet:902400881029431348> Wallet",`<:nightbux:902400327410679849>\`${pocket}\``,true)
    .addField("Won",`<:nightbux:902400327410679849>${won}`,true)
    .addField("Final Pocket",`<:nightbux:902400327410679849>\`${pocket + won}\``,true)
    
    .setThumbnail(message.guild.iconURL({size: 2048})))
 return
}else{

    const lost = (pocket - pocket)
    db.query("UPDATE user SET pocket = 0 WHERE user_id = ?",[message.member.id])

    message.inlineReply(new dsc.MessageEmbed()
    .setAuthor(`Gamble`,message.author.displayAvatarURL())
    .setDescription("You have lost the gamble")
    .addField("Lost",`<:nightbux:902400327410679849>\`${pocket}\``)
    .setThumbnail(message.guild.iconURL({size: 2048})))

return
}
}

    if(!toGamble){
        message.inlineReply(new dsc.MessageEmbed()
        .setAuthor(`You have not supplied an amount to gamble`,message.author.displayAvatarURL({size: 2048}))
        .setDescription("Please supply a number to gamble")
        .addField("<:wallet:902400881029431348> Wallet",`<:nightbux:902400327410679849>\`${pocket}\``,true)
        .addField("<:bank:851656706555117588> Bank",`<:nightbux:902400327410679849>\`${bank}\``,true)
        .setThumbnail(message.guild.iconURL()))
        const prefix = '$'
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        client.limits.delete(`${command}-${message.author.id}`)
        return
    }

    if(Number.isNaN(toGamble)){
        message.inlineReply(new dsc.MessageEmbed()
        .setAuthor(`You have not supplied a number.`,message.author.displayAvatarURL({size: 2048}))
        .setDescription("You havent supplied a number, please redo the command with a number")
        .addField("<:wallet:902400881029431348> Wallet",`<:nightbux:902400327410679849>\`${pocket}\``,true)
        .addField("<:bank:851656706555117588> Bank",`<:nightbux:902400327410679849>\`${bank}\``,true)
        .setThumbnail(message.guild.iconURL()))
        const prefix = '$'
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        client.limits.delete(`${command}-${message.author.id}`)
        return
    }

    if((toGamble > pocket )){
        message.inlineReply(new dsc.MessageEmbed()
        .setAuthor(`Not enough money in your wallet`,message.author.displayAvatarURL({size: 2048}))
        .setDescription("Please supply a number upto your wallet balance")
        .addField("<:wallet:902400881029431348> Wallet",`<:nightbux:902400327410679849>\`${pocket}\``,true)
        .addField("<:bank:851656706555117588> Bank",`<:nightbux:902400327410679849>\`${bank}\``,true)
        .setThumbnail(message.guild.iconURL()))
        const prefix = '$'
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        client.limits.delete(`${command}-${message.author.id}`)
        return
    }



    if ((toGamble < 0)){
        message.inlineReply(new dsc.MessageEmbed()
        .setAuthor(`You can\'t gamble nothing`,message.author.displayAvatarURL({size: 2048}))
        .setDescription("Please choose a number that is not **0** or below and try again")
        .addField("<:wallet:902400881029431348> Wallet",`<:nightbux:902400327410679849>\`${pocket}\``,true)
        .addField("<:bank:851656706555117588> Bank",`<:nightbux:902400327410679849>\`${bank}\``,true)
        .setThumbnail(message.guild.iconURL()))
        const prefix = '$'
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        client.limits.delete(`${command}-${message.author.id}`)
        return
    }
   
  






    
    if(chance == 3 || chance == 1 || chance == 0 || chance == 4){

        const number1 = Math.floor(Math.random() * 10)
        const romax = toGamble * 2
const romin = 0
const romax1 = (toGamble / 2)
console.log(`${romax1} | this is gamble / 3`)
console.log(`${romax} | this is pocket`)
console.log(`${romin} | this is minimum`)
console.log(`${number1} | this is the number`)
    if(number1 == 9) {
        won = Math.floor(Math.random() * (romax - romax1) + romax1)
        console.log(won)
    }
    else {
        won = Math.floor(Math.random() * (romax1 - romin) + romin)
        console.log(won)
    }


    const newPocket = (won + pocket)
    try{
    db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[newPocket,message.member.id])
    }catch(err){
        console.error(err);
        fs.appendFileSync('./commands/money/errorLog.txt',`--${Date.now()}--\n${err}\n`)
        message.inlineReply(`Error has occured, please send a message to @OG_Ghost saying \`${Date.now()}\`\n `)
    }
    message.inlineReply(new dsc.MessageEmbed()
    .setAuthor(`Gamble`,message.author.displayAvatarURL())
    .setDescription(`You have gambled ${toGamble}\n`)
    .addField("<:wallet:902400881029431348> Wallet",`<:nightbux:902400327410679849>\`${pocket}\``,true)
    .addField("Won",`<:nightbux:902400327410679849>${won}`,true)
    .addField("Final Pocket",`<:nightbux:902400327410679849>\`${pocket + won}\``,true)
    
    .setThumbnail(message.guild.iconURL({size: 2048})))
 
}else{

    const lost = (pocket - toGamble)
    db.query("UPDATE user SET pocket = ? WHERE user_id = ?",[lost,message.member.id])

    message.inlineReply(new dsc.MessageEmbed()
    .setAuthor(`Gamble`,message.author.displayAvatarURL())
    .setDescription("You have lost the gamble")
    .addField("Lost",`<:nightbux:902400327410679849>\`${toGamble}\``)
    .setThumbnail(message.guild.iconURL({size: 2048})))


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
    cooldown: 30000,
    embedMessage: `**Gamble** is currently on cooldown of **30 seconds**, please wait till the **30 seconds** is over`
}