const discord = require("discord.js")
const Discord = require('discord.js')
module.exports = {
    name: 'changejob',
    aliases: ['quitjob', 'quit'],
    category: 'Action',
    utilisation: '{prefix}changejob',
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

        if(user.currentjob == 'N/A') {
            return message.inlineReply(`You don\'t even have a job, use \`${prefix}job\` to pick one!`)
    } 
    
    const react = new Discord.MessageEmbed()
    .setTitle("Confirmation")
    .setDescription(`Say \`yes\` or \`no\``)
    .addField('Confirm',
    `Are you sure you want to quit your job? If you say yes, you will have to pick a new job with \`${prefix}job\`!`)
    
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
  
  if(!channel) { msg.inlineReply(`Please say \`Yes\` or \`No\` to quit your job!`) 

return;
}
if (msg.content.toLowerCase() === 'yes'){
message.inlineReply(`Okay, you have quit your job! Use \`${prefix}job\` to choose a new one!`)
db.query('UPDATE user SET currentjob = ? WHERE user_id = ?',["N/A",message.author.id])
}
if (msg.content.toLowerCase() === 'no'){
    return message.inlineReply('Ok, you didn\'t quit your job!')
}

})})
    }}