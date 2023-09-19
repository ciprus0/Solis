
  

  
function doDanceAction() {
    var rand = [
        'https://media1.tenor.com/images/1a13c111736f868f9abab76e8ac9009d/tenor.gif?itemid=13462237', 
        'https://media1.tenor.com/images/47d5d52b84ca2117c336ab3de3978b3a/tenor.gif?itemid=13973731', 
        'https://media1.tenor.com/images/ed527e2e52c51a4138d91c8824530d3e/tenor.gif?itemid=12817361', 
        'https://media1.tenor.com/images/766599022416cc0b7b7b1bd2040eb2db/tenor.gif?itemid=12039886', 
        'https://media1.tenor.com/images/d250c06c34f6961087a83c6fd79d0711/tenor.gif?itemid=4718235', 
        'https://media1.tenor.com/images/aa9374ef547c871d4626a22d24042d1f/tenor.gif?itemid=10495378', 
        'https://media1.tenor.com/images/68514372455203bb299461159aa28056/tenor.gif?itemid=12503868', 
        'https://media1.tenor.com/images/f9a825b7d614cedda3fb2676a4ca0b68/tenor.gif?itemid=16127538', 
        'https://media1.tenor.com/images/a46ad100db83c0abb116d3855301c940/tenor.gif?itemid=4665031', 
        'https://media1.tenor.com/images/819d5bf445892350c842b9c5d700efdf/tenor.gif?itemid=16365990'
    ]

    return rand[Math.floor(Math.random() * rand.length)];
  }
  
  module.exports = {
    name: 'dance',
    aliases: ['None'],
    category: 'Actions',
    utilisation: '{prefix}dance <ping user>',

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
  if (command === 'dance') {
   
    let args = message.content.substring(prefix.length).split(" ");
      const personTagged = message.mentions.members.first();
      
      if (!args[1]) { 
        const embed1 = new Discord.MessageEmbed()
       .setTitle('💃🕺  **' + message.author.username + '** is dancing :D')
       .setImage(doDanceAction())
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
       .setTitle('💃🕺  **' + message.author.username + '** is dancing with **' + personTagged.user.username + '** :D')
       .setImage(doDanceAction())
       .setColor(0x87B4E7)
       message.channel.send(embed);
      }}
  


  }};
  