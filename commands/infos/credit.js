module.exports = {
    name: 'credits',
    aliases: ['cr', 'credit'],
    category: 'a',
    utilisation: '{prefix}credits',

    execute(client, message, prefix) {
      const db1 = require("quick.db")
        db1.add(`commands_used`, 1)
        const Discord = require('discord.js')
 
      let args = message.content.slice(prefix.length).trim().split(/ +/g);
      let command = args.shift().toLocaleLowerCase();
      if (!message.content.startsWith(prefix) || message.author.bot) return;
     
        message.inlineReply({
        embed: {
          author: { name: 'Credits | Axia', iconURL: 'https://media.discordapp.net/attachments/901960671506337876/957848216781619210/axia_logo.png' },
          fields: [
            { name: 'Music Commands', value: '[ZerioDev](https://github.com/ZerioDev/Music-bot)' },
            
          ],
          description: 'This bot was created with help from the following GitHub repositories/Discord servers.\n **Note**: All of the code was changed from its original state to what it shows now!'

        }
        
  
        })
    
    }};

    /*{ name: 'Giveaway Commands', value: '[ZeroDiscord](https://github.com/ZeroDiscord/Giveaway)'},*/