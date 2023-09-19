const db = require('quick.db')
const { Client, Message, MessageEmbed } = require('discord.js');
const { afk } = require('../../Collection')
module.exports = {
    name: 'afk',
    aliases: ['None'],
    category: 'Users',
    utilisation: '{prefix}afk <reason> | {prefix}afk reset [ping user]',
    module: 'utility',
   /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    execute: async (client, message, args) => {
     
      const db1 = require("quick.db")
        db1.add(`commands_used`, 1)
      const { Util } = require('discord.js')
        const username = args.slice(0).join(' ') || 'AFK'
if(message.content.includes('<@&')){
return message.inlineReply('Nice try, you cant ping a role.')
}


        if(args[0] == 'reset'){
          if(db1.get(`staffrole_id_${message.guild.id}`) == null || db1.get(`staffrole_id_${message.guild.id}`) == 'false') return message.inlineReply(`You have not set up your staff role/s for this server! Please use \`setupmoderation\`!`)
      if(message.member.roles.cache.some(r => db1.get(`staffrole_id_${message.guild.id}`).includes(r.id)) || message.member.hasPermission("MANAGE_MESSAGES")){
          let member = message.mentions.members.first() || message.guild.members.cache.get(args[1])
          if(!member) return message.inlineReply('Please say the ID of a user or ping them.')
          if (db.get(`afk-${member.id}+${message.guild.id}`)){
          db1.set(`afk-${member.id}+${message.guild.id}`, 'AFK')
          return message.inlineReply(`<@${member.id}>'s AFK has been reset successfully.`)
          } else return message.inlineReply('This user is not AFK..')
        } else return message.inlineReply('You do not have permission to use this. You need MANAGE_MESSAGES permission, or a Staff role.')
      }
       
message.inlineReply('<@' + message.author.id + '>, I have set your AFK to: ' + username)
db.set(`afk-${message.author.id}+${message.guild.id}`, username)
afk.set(message.author.id, [Date.now()])
message.member.setNickname(`[AFK] ${message.member.displayName}`)
    
}};


module.exports.requirements = {
  userPerms: [],
  clientPerms: [],
  ownerOnly: false
}

module.exports.limits = {
  rateLimit: 1,
  cooldown: 2000,
  embedMessage: `**AFK** is currently on cooldown of **2 seconds**, please wait till the **2 seconds** is over`
}