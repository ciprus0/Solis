

  

  
function doBlushAction() {
    var rand = [
        'https://media1.tenor.com/images/a8d262bea6aa70742b393b08f02c5710/tenor.gif?itemid=12830507', 
        'https://media1.tenor.com/images/b00fe041997afa8fff0734a1fb8dd2a4/tenor.gif?itemid=13768377', 
        'https://media1.tenor.com/images/5ea40ca0d6544dbf9c0074542810e149/tenor.gif?itemid=14841901', 
        'https://media1.tenor.com/images/274fc34d3add3ce4cbb5716cb4f94f4f/tenor.gif?itemid=5841198', 
        'https://media1.tenor.com/images/09d75740089598b54342df3641dbbffc/tenor.gif?itemid=5615361', 
        'https://media1.tenor.com/images/9eba52d0506b552b7ef6a1981c0cfcff/tenor.gif?itemid=8680309', 
        'https://media1.tenor.com/images/f62cae32b30d364bf0a8a1e7432c2ddf/tenor.gif?itemid=10198325', 
        'https://media.tenor.com/images/ec68d88a7a6605e17395fc67a132d83e/tenor.gif', 
        'https://media1.tenor.com/images/e8f3c6c5ddbd1637f536c4fe45479894/tenor.gif?itemid=12348314', 
        'https://media1.tenor.com/images/fdd56c120f59f899f8c34605165896a8/tenor.gif?itemid=12348305'
    ]

    return rand[Math.floor(Math.random() * rand.length)];
  }
  
  module.exports = {
    name: 'blush',
    aliases: ['None'],
    category: 'Actions',
    utilisation: '{prefix}blush <ping user>',

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
  if (command === 'blush') {
    
  
    let args = message.content.substring(prefix.length).split(" ");
      const personTagged = message.mentions.members.first();
      
      if (!args[1]) { 
        const embed1 = new Discord.MessageEmbed()
       .setTitle('😳  **' + message.author.username + '** is blushing')
       .setImage(doBlushAction())
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
       .setTitle('😳  **' + message.author.username + '** is blushing at **' + personTagged.user.username + '**')
       .setImage(doBlushAction())
       .setColor(0x87B4E7)
       message.channel.send(embed);
      }}
  


  }};
  