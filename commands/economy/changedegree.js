const discord = require("discord.js")
const Discord = require('discord.js')
module.exports = {
    name: 'changedegree',
    aliases: ['None'],
    category: 'Action',
    utilisation: '{prefix}changedegree',
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

        if(user.learningdegree == 'N/A') {
            return message.inlineReply(`You don\'t even have a degree, use \`${prefix}degree\` to pick one!`)
    } 
    
    const react = new Discord.MessageEmbed()
    .setTitle("Confirmation")
    .setDescription(`Say \`yes\` or \`no\``)
    .addField('Confirm',
    `Are you sure you want to change your degree? If you say yes, all of your progress with that degree will be lost and you will have to restart!`)
    
message.inlineReply(react).then(async react => {


let joina = m => m.author.id === message.author.id;
let join = new Discord.MessageCollector(message.channel, joina, { max: 1 });
 
join.on('collect', async msg => {
  if(msg.content.toLowerCase() === "cancel") {
    msg.channel.send(`Cancelled`)
    await react.delete()
    await join.stop()
 return
}
  let channel = msg.content.toLowerCase();
  
  if(!channel) { msg.inlineReply(`Please say \`Yes\` or \`No\` to change your degree!`) 

return;
}
if (msg.content.toLowerCase() === 'yes'){
message.inlineReply(`Okay, I have reset your degree and all of your progress. Use \`${prefix}degree\` to choose a new one!`)
db.query('UPDATE user SET learningdegree = ? WHERE user_id = ?',["N/A",message.author.id])
db.query('UPDATE user SET degreeprogress = 0 WHERE user_id = ?',[message.author.id])
}
if (msg.content.toLowerCase() === 'no'){
    return message.inlineReply('Ok, your degree will not be changed and your progress has stayed!')
}

})})
    }}