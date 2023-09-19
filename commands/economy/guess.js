const  Discord = require("discord.js")

module.exports = {
    name: 'guess',
    aliases: ['None'],
    category: 'Action',
    utilisation: '{prefix}guess [number] [amount to bet]',
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
    var text = args[1] ;
var bet = parseInt(text, 10);
if(!bet){
    const prefix = '$'
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
client.limits.delete(`${command}-${message.author.id}`)
return message.reply("Useage \`,guess <number> <bet>\`")}
let money = parseInt(user.pocket)
const number = Math.floor(Math.random() * 10)
var text1 = args[0] ;
var guess = parseInt(text1, 10);
if(guess > 10){
    const prefix = '$'
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
    client.limits.delete(`${command}-${message.author.id}`)
    return message.reply("Please provide a number between \`0 - 10 \`")}
if(money < bet){
    const prefix = '$'
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
    client.limits.delete(`${command}-${message.author.id}`)
return message.reply(`You do not have enough money, You have \`$${money}\``)}
if(guess == number){
    const winEmbed = new Discord.MessageEmbed()
        .setAuthor(`Guess The Number | You Won!`)
        .setDescription(`**Player** ${message.author.tag}
        **Played Bet** <:nightbux:902400327410679849>\`${bet}\`
        
        **Actual Answer**: ${number}
        **Your Guess**: ${guess}
        
        **Well Done!**`)
        .setColor("#2c2f33")
        .setThumbnail(message.guild.iconURL())
    message.inlineReply(winEmbed)
    money += bet * 2
    db.query('UPDATE user SET pocket = ? WHERE user_id = ?',[money,message.member.id])
        
}else{
    const loseEmbed = new Discord.MessageEmbed()
        .setAuthor(`Guess The Number | You Lost`)
        .setDescription(`**Player** ${message.author.tag}
        **Played Bet** <:nightbux:902400327410679849>\`${bet}\`
        
        **Actual Answer**: ${number}
        **Your Guess**: ${guess}
        
        **Better luck next time!**`)
        .setColor("#2c2f33")
        .setThumbnail(message.guild.iconURL())

    message.inlineReply(loseEmbed)
    money -= bet
    db.query('UPDATE user SET pocket = ? WHERE user_id = ?',[money,message.member.id])
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
    embedMessage: `**Guess** is currently on cooldown of **1 minutes**, please wait till the **1 minutes** is over`
}