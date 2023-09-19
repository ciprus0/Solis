
function doFacePalmAction() {
    var rand = [
        'https://media1.tenor.com/images/142d74bbd13fc305aed5a4894c0c3f7f/tenor.gif?itemid=16642818', 
        'https://media1.tenor.com/images/b8e234ac4aa6aa64b582895911de2046/tenor.gif?itemid=12411488', 
        'https://media1.tenor.com/images/76d2ec47ec76fa36b2fce913331ba7e3/tenor.gif?itemid=5533025', 
        'https://media1.tenor.com/images/43f438c58296dabd4bd71f282987f44c/tenor.gif?itemid=10157360', 
        'https://media1.tenor.com/images/4782ebc79f08be0a17faaf19ed5221f3/tenor.gif?itemid=15580787', 
        'https://media1.tenor.com/images/d8d29f0d56957f209f42105baa4e00f1/tenor.gif?itemid=17236628'
    ]

    return rand[Math.floor(Math.random() * rand.length)];
  }
  
  module.exports = {
    name: 'smh',
    aliases: ['facepalm'],
    category: 'Actions',
    utilisation: '{prefix}smh <ping user>',

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
  if (command === 'smh') {
    
    
    let args = message.content.substring(prefix.length).split(" ");
      const personTagged = message.mentions.members.first();
      
      if (!args[1]) { 
        const embed1 = new Discord.MessageEmbed()
       .setTitle('🤦‍♂️  **' + message.author.username + '** shook their head 😐')
       .setImage(doFacePalmAction())
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
       .setTitle('🤦‍♂️  **' + message.author.username + '** shook their head at **' + personTagged.user.username + '**  😐')
       .setImage(doFacePalmAction())
       .setColor(0x87B4E7)
       message.channel.send(embed);
      }}
  


  }};
  