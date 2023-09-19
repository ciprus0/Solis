
  

  
function doOkAction() {
    var rand = [
        'https://media1.tenor.com/images/155fde62da21e0a9d745d722846778fb/tenor.gif?itemid=8265165', 
        'https://media1.tenor.com/images/6b3eabb31c74d63787c178d980f1bde3/tenor.gif?itemid=5727928', 
        'https://media1.tenor.com/images/01fc22778a9053a909387599768d2533/tenor.gif?itemid=7250175', 
        'https://media1.tenor.com/images/8a02cfce9aad339bce5a8be9f8398bb1/tenor.gif?itemid=15520995', 
        'https://media1.tenor.com/images/7b25c938d39e604cfbf2b85880c61b3d/tenor.gif?itemid=5092910', 
        'https://media1.tenor.com/images/42f6e6d8e6ca11e06fc8ee0d658ba3de/tenor.gif?itemid=4431827', 
        'https://media1.tenor.com/images/5226a5c4d5707ef5408ec7a542d9725c/tenor.gif?itemid=4160811', 
        'https://media1.tenor.com/images/2988703246cd02162df5d712d589649c/tenor.gif?itemid=4160871', 
        'https://media1.tenor.com/images/21611fb6f8bbdfd6964182abfb92f771/tenor.gif?itemid=10680064',
        'https://media1.tenor.com/images/1a2b41680824bee8a4723dc08eb17a5c/tenor.gif?itemid=16955639',
        'https://media1.tenor.com/images/297fd0622a3df6a17867092b93d28664/tenor.gif?itemid=7575471',
        'https://media1.tenor.com/images/45d8b5f8f32d92fdbe3fc0b9cd838c45/tenor.gif?itemid=7312752'
    ]

    return rand[Math.floor(Math.random() * rand.length)];
  }
  
  module.exports = {
    name: 'ok',
    aliases: ['really', 'bro', 'wtf'],
    category: 'Actions',
    utilisation: '{prefix}ok <ping user>',

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
  
  
    const fieldArgs = message.content.slice("$strike".length);
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    
   
    let args = message.content.substring(prefix.length).split(" ");
      const personTagged = message.mentions.members.first();
   
     
      
      if (!args[1]) { 
        const embed1 = new Discord.MessageEmbed()
       .setTitle('😐  **' + message.author.username + '** rn')
       .setImage(doOkAction())
       .setColor(0x87B4E7)
        return message.channel.send(embed1);
      } 
      
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
      
      else {
      const embed = new Discord.MessageEmbed()
       .setTitle('😐 **' + personTagged.user.username + '** 😐😐😐😐')
       .setImage(doOkAction())
       .setColor(0x87B4E7)
       message.channel.send(embed);
      }}
  


};
  