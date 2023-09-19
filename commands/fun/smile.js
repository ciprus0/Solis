



function doSmileAction() {
    var rand = [
        'https://media1.tenor.com/images/c5fad21f9828d19044a58f8b84a6e14b/tenor.gif?itemid=6013419', 
        'https://media1.tenor.com/images/4e0a400d7621b5452854bcae00d9a98e/tenor.gif?itemid=5723668', 
        'https://media1.tenor.com/images/ba7c28c45c0123e95fbdf0854cbc7861/tenor.gif?itemid=12869746', 
        'https://media1.tenor.com/images/7676a956e0dda07ec7f55d3eacbf353b/tenor.gif?itemid=16072068', 
        'https://media1.tenor.com/images/d627d2facd06abb496f97c5943b2f9ae/tenor.gif?itemid=11346577', 
        'https://media1.tenor.com/images/55dde6c4f1eaca6b1e52626b980c0074/tenor.gif?itemid=13576447', 
        'https://media1.tenor.com/images/9411ce1ef75d43771bf0f305e7eb6487/tenor.gif?itemid=12793368', 
        'https://media1.tenor.com/images/82b39c323ca376e9bb5844a54973fc42/tenor.gif?itemid=16596386', 
        'https://media1.tenor.com/images/94cd0ea149daf82c6e6af8c444c40eb4/tenor.gif?itemid=8933103', 
        'https://media1.tenor.com/images/8a549e6d7066bbc0aeb63d7c69a42c27/tenor.gif?itemid=4838963'
    ]

    return rand[Math.floor(Math.random() * rand.length)];
  }
  
  module.exports = {
    name: 'smile',
    aliases: ['None'],
    category: 'Actions',
    utilisation: '{prefix}smile <ping user>',

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
  if (command === 'smile') {
    

    let args = message.content.substring(prefix.length).split(" ");
      const personTagged = message.mentions.members.first();
      
      if (!args[1]) { 
        const embed1 = new Discord.MessageEmbed()
       .setTitle('😃  **' + message.author.username + '** is smiling')
       .setImage(doSmileAction())
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
        }) }
      
      else {
      const embed = new Discord.MessageEmbed()
       .setTitle('😃  **' + message.author.username + '** is smiling at **' + personTagged.user.username + '**')
       .setImage(doSmileAction())
       .setColor(0x87B4E7)
       message.channel.send(embed);
      }}
  


  }};
  