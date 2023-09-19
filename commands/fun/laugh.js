
function doLaughAction() {
    var rand = [
        'https://media1.tenor.com/images/2775948586d6a24811726ce4dc681d47/tenor.gif?itemid=13786657', 
        'https://media1.tenor.com/images/615dc6190b6438d911f366944a917ede/tenor.gif?itemid=9388677', 
        'https://media1.tenor.com/images/26df2182fc943676dc6cc51371efc04b/tenor.gif?itemid=8932912', 
        'https://media1.tenor.com/images/3be8aa0228169cf5748e21eb972ffa1d/tenor.gif?itemid=12252557', 
        'https://media1.tenor.com/images/c468ca0162b2757b45a751870e753c64/tenor.gif?itemid=8453319', 
        'https://media1.tenor.com/images/0944ac9bc62026c81078217f68b77c19/tenor.gif?itemid=5292401'
  
    ];
  
    return rand[Math.floor(Math.random() * rand.length)];
  }
  
  module.exports = {
    name: 'laugh',
    aliases: [],
    category: 'Actions',
    utilisation: '{prefix}laugh <ping user>',

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
  if (command === 'laugh') {
    
   
    let args = message.content.substring(prefix.length).split(" ");
      const personTagged = message.mentions.members.first();
      
      if (!args[1]) {
        const embed1 = new Discord.MessageEmbed()
       .setTitle('😂  **' + message.author.username + '** is laughing')
       .setImage(doLaughAction())
       .setColor(0x87B4E7)
       message.channel.send(embed1);
      } 
      if(args[1] && !personTagged){
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
       .setTitle('😂  **' + message.author.username + '** laughed at **' + personTagged.user.username + '**')
       .setImage(doLaughAction())
       .setColor(0x87B4E7)
       message.channel.send(embed);
      }
  
  
   }
  }};