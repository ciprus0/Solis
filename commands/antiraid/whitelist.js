const Discord = require("discord.js")
const db = require("quick.db")
const ms = require('parse-ms');
const { truncate } = require("fs");
module.exports = {
    name: "whitelist",
    aliases: ['wl'],
    description: "whitelist people or see the list",
    category: 'Whitelist',
    module: 'anti',
    utilisation: '{prefix}wl <add/remove> [ping user]',
    async execute(client, message, args, prefix) {
      db.add(`commands_used`, 1)
      if (message.author.id == '979105790109552680' || message.author.id == '941954746904879144' || message.author.id == message.guild.ownerID) {
        let guild = message.guild.iconURL()
    let cmd = args[0];
    const guildicon = message.guild.iconURL();
    if(!cmd) {
        let wordlist = new Discord.MessageEmbed()
         
         .setFooter(message.guild, guildicon)
         let database = db.get(`whitelist_${message.guild.id}`)
         if(database && database.length) {
            let array =[]
              database.forEach(m => {
              array.push(`<@${m.user}> (${m.user})`)
            })
         
            wordlist.addField('** Whitelist **', `${array.join("\n")}`)
        }
        return message.channel.send(wordlist);
}

if (cmd.toLowerCase() === 'add') {
 
    
        let user = message.mentions.users.first()
        if(!user) {
            let usermention = new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL())
            .setDescription(`
            ${prefix}wl add **[user]**
            `)
            
    
            return message.inlineReply(usermention)
        }
        let whitelist = db.get(`whitelist_${message.guild.id}`)
        if(whitelist && whitelist.find(find => find.user == user.id)) {
        return message.inlineReply(`The user is already on the whitelist.`)
        }
let data = {
    user: user.id
}
        db.push(`whitelist_${message.guild.id}`, data)
        let added = new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL())
        .setDescription(`
        <@${message.author.id}>, ${user} is now whitelisted. 
        `)
        

        return message.inlineReply(added);
    }
  
if (cmd.toLowerCase() === 'remove') {
    
    
        let user = message.mentions.users.first()
        if(!user) {
            const embed4 = new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL())
            .setDescription(`${prefix}wl remove **[user]**`)
            return message.inlineReply(embed4)
        }
        const guildicon = message.guild.iconURL();
        let database = db.get(`whitelist_${message.guild.id}`)
        if(database) {
            let data = database.find(x => x.user === user.id)
          let unabletofind = new Discord.MessageEmbed()
          .setAuthor(message.author.tag, message.author.displayAvatarURL())
          .setDescription(`
          This user is not on the whitelist. 
          `)
          
          
            if(!data) return message.inlineReply(unabletofind)
          
            let value = database.indexOf(data)
            delete database[value]
          
            var filter = database.filter(x => {
              return x != null && x != ''
            })
          
            db.set(`whitelist_${message.guild.id}`, filter)
          let deleted = new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL())
          .setDescription(`
          <@${message.author.id}>, ${user} has been removed from the whitelist.
          `)
          
          
            return message.inlineReply(deleted)
          
        } else {          
     message.inlineReply(`That user is not on the whitelist.`)
        }
        
}}
        
    }};
