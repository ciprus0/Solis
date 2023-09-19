module.exports = {
    name: 'contact',
    aliases: ['contacts', 'contactinfo'],
    category: 'a',
    utilisation: '{prefix}contact',

    execute(client, message, prefix) {
      const db1 = require("quick.db")
        db1.add(`commands_used`, 1)
        const Discord = require('discord.js')
 
      let args = message.content.slice(prefix.length).trim().split(/ +/g);
      let command = args.shift().toLocaleLowerCase();
      if (!message.content.startsWith(prefix) || message.author.bot) return;
     
        message.inlineReply({
        embed: {
          author: { name: 'Contact Info | Satar', iconURL: 'https://media.discordapp.net/attachments/967181952518090825/967196909133508678/satar.png?width=840&height=630' },
          fields: [
            { name: 'Email', value: 'taylorku17@gmail.com' },
            
          ],
          description: 'Contact the Satar owner!'

        }
        
  
        })
    
    }};

    /*{ name: 'Giveaway Commands', value: '[ZeroDiscord](https://github.com/ZeroDiscord/Giveaway)'},*/