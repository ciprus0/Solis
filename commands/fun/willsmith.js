

      function doWillSmith() {
        var rand = [
            'https://media4.giphy.com/media/CnRmpfxlPutVAFChvm/giphy.gif?cid=6c09b9521bcea77bf96a13697b2b4f9fc193f8031b5302cd&rid=giphy.gif&ct=g',
            'https://c.tenor.com/b158VSUACX8AAAAC/will-smith-borahae-will-smith-slap.gif',
            'https://c.tenor.com/AoX5gVa6URoAAAAd/will-smith-slap-slap.gif',
            'https://i.kym-cdn.com/photos/images/newsfeed/002/337/705/023.gif',
            'https://c.tenor.com/i3fRKbggIi8AAAAC/will-smith-oscars.gif',
            
        ]
        return rand[Math.floor(Math.random() * rand.length)];
      }
module.exports = {
        name: 'willsmith',
        aliases: ['ws', 'will'],
        category: 'Actions',
        utilisation: '{prefix}willsmith [ping user]',
    
        async execute(client, message) {
            const db1 = require("quick.db")
            db1.add(`commands_used`, 1)
            const Discord = require('discord.js')
            const db = require('quick.db')
            const { PREFIX } = require('../../config');
            let prefix1;
    await db40.promise().query('SELECT * FROM prefix WHERE guild_id = ?',[message.guild.id]).then(result => {
    prefix1 = result[0][0]
    
    })
    
     let prefix;
        let fetched = prefix1.prefix
    
        if (fetched === null) {
            prefix = PREFIX
        } else {
            prefix = fetched
        }
     
        let args = message.content.slice(prefix.length).trim().split(/ +/g);
        let command = args.shift().toLocaleLowerCase();
        const personTagged = message.mentions.members.first()
        const fieldArgs = message.content.slice("$strike".length);
        if (!message.content.startsWith(prefix) || message.author.bot) return;
      if (command === 'willsmith' || command === 'ws' || command === 'will') {
    
        let args = message.content.substring(prefix.length).split(" ");
          const personTagged = message.mentions.members.first();
          if(!personTagged) {
          const args1 = message.content.slice(prefix.length).trim().split(/ +/g);
          const command = args1.shift().toLowerCase();
          const cmd = client.commands.get(command) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command));
    return message.inlineReply({
              embed: {
                  color: 0xADC5FF,
                  title: `Command: ${command}`,
                  footer: { text: 'Created by Tim' },
                  fields: [
                      { name: 'Name', value: cmd.name, inline: true },
                      { name: 'Category', value: cmd.category, inline: true },
                      { name: 'Aliase(s)', value: cmd.aliases.length < 1 ? 'None' : cmd.aliases.join(', '), inline: true },
                      { name: 'Usage', value: cmd.utilisation.replace('{prefix}', prefix), inline: true },
                  ],
                  timestamp: new Date(),
                  description: 'Find information on the command provided.\nMandatory arguments `[]`, optional arguments `<>`.',
              }
          })}
          
          if (!args[1]) {
         
          const args1 = message.content.slice(prefix.length).trim().split(/ +/g);
          const command = args1.shift().toLowerCase();
          const cmd = client.commands.get(command) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command));
    return message.inlineReply({
              embed: {
                  color: 0xADC5FF,
                  title: `Command: ${command}`,
                  footer: { text: 'Created by Tim' },
                  fields: [
                      { name: 'Name', value: cmd.name, inline: true },
                      { name: 'Category', value: cmd.category, inline: true },
                      { name: 'Aliase(s)', value: cmd.aliases.length < 1 ? 'None' : cmd.aliases.join(', '), inline: true },
                      { name: 'Usage', value: cmd.utilisation.replace('{prefix}', prefix), inline: true },
                  ],
                  timestamp: new Date(),
                  description: 'Find information on the command provided.\nMandatory arguments `[]`, optional arguments `<>`.',
              }
          })
          } else {
          const embed = new Discord.MessageEmbed()
           .setTitle('👋  **' + message.author.username  + '** smacked **' + personTagged.user.username + '**')
           .setImage(doWillSmith())
           .setColor(0x87B4E7)
           message.channel.send(embed);
          }
      
       }
      
      }};
      