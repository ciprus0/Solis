module.exports = {
    name: 'policy',
    aliases: ['policies'],
    category: 'a',
    utilisation: '{prefix}policy',

    execute(client, message, prefix) {
      const db1 = require("quick.db")
        db1.add(`commands_used`, 1)
        const Discord = require('discord.js')
 
      let args = message.content.slice(prefix.length).trim().split(/ +/g);
      let command = args.shift().toLocaleLowerCase();
      if (!message.content.startsWith(prefix) || message.author.bot) return;
     
        message.inlineReply({
        embed: {
          author: { name: 'Policies | Satar', iconURL: 'https://media.discordapp.net/attachments/967181952518090825/967196909133508678/satar.png?width=840&height=630' },
          fields: [
            { name: 'Documents', value: '[Terms of Service](https://docs.google.com/document/d/1MQFayeqS7JUHM2JpQ4vxidfU7zE7mnjtIINO8Dk6DDA/edit?usp=sharing)\n[Privacy Policy](https://docs.google.com/document/d/1FLYjfxq6bfJn45sFXyvaysmHIEWYtjWoXq_bSXIptQI/edit?usp=sharing)' },
            
          ],
          description: 'ToS and Privacy Policy for Satar'

        }
        
  
        })
    
    }};

    /*{ name: 'Giveaway Commands', value: '[ZeroDiscord](https://github.com/ZeroDiscord/Giveaway)'},*/