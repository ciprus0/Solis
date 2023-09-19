


const discord = require("discord.js")
const Discord = require('discord.js')
const wait = require('util').promisify(setTimeout);
module.exports = {
    name: 'use',
    aliases: ['None'],
    category: 'Action',
    utilisation: '{prefix}use [item]',
    module: 'economy',
    async execute(client, message, args, prefix) {
        const db1 = require("quick.db")
        db1.add(`commands_used`, 1)
if(args[0] == 'lock' || args[0] == 'padlock'){
   if(user.uselocker == 1){
message.inlineReply('You already have the Padlock enabled!')
return
    }
    if(user.locker >= 1){
    const embed = new Discord.MessageEmbed()
.setDescription(`Your padlock has been enabled.`)
message.inlineReply(embed)
db.query('UPDATE user SET uselocker = 1 WHERE user_id = ?',[message.author.id])
return
    }
    else if (user.locker == 0){
        message.inlineReply(`You do not own a padlock. Please use \`${prefix}buy lock\` to obtain one.`)
        return
    }
} else if (args[0] == 'squirelock' || args[0] == 'squire'){
    if(user.usesquirelocker == 1){
        message.inlineReply('You already have the Squire Lock enabled!')
        return
    }
    if(user.squirelocker == 1){
        const embed = new Discord.MessageEmbed()
    .setDescription(`Your Squire Lock has been enabled.`)
    message.inlineReply(embed)
    db.query('UPDATE user SET usesquirelocker = 1 WHERE user_id = ?',[message.author.id])
    return
        }
        else if (user.squirelocker == 0){
            message.inlineReply(`You do not own a Squire Lock. Please use \`${prefix}buy squirelock\` to obtain one.`)
            return
        }
} else if(args[0] == 'bankvault' || args[0] == 'vault' || args[0] == 'bvault'){
    if (user.bankvault == 0){
        message.inlineReply(`You do not own a Bank Vault. Please use \`${prefix}buy vault\` to obtain one.`)
        return
    }
    if(user.usebankvault == 1){
        message.inlineReply('You already have the Bank Vault enabled!')
        return
    }
    if(user.bankvault == 1){
        const embed = new Discord.MessageEmbed()
    .setDescription(`Your Bank Vault has been enabled.`)
    message.inlineReply(embed)
    db.query('UPDATE user SET usebankvault = 1 WHERE user_id = ?',[message.author.id])
    return
        }
    
} else if (args[0] == 'guard' || args[0] == 'bodyguard' || args[0] == 'bguard'){
    if(user.usebodyguard == 1){
        message.inlineReply('You already have the Bodyguard enabled!')
        return
    }
    if(user.bodyguard == 1){
        const embed = new Discord.MessageEmbed()
    .setDescription(`Your Bodyguard has been enabled.`)
    message.inlineReply(embed)
    db.query('UPDATE user SET usebodyguard = 1 WHERE user_id = ?',[message.author.id])
    return
        }
        else if (user.bodyguard == 0){
            message.inlineReply(`You do not own a Bodyguard. Please use \`${prefix}buy guard\` to obtain one.`)
            return
        }
    }

else 

message.inlineReply('Please say an actual item to use!')

    }};