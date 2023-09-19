


function doShootAction() {
    var rand = [
        'https://media1.tenor.com/images/b60f30e85ec81e76b55472898cb2beaa/tenor.gif?itemid=16780763', 
        'https://media1.tenor.com/images/a72e086ddfa54dffcd6953488531a23a/tenor.gif?itemid=17216777', 
        'https://media1.tenor.com/images/ca77c398c7148b60808332ca794ea7e0/tenor.gif?itemid=13757300', 
        'https://media1.tenor.com/images/20f6fd5a7e221a8d916a6bc51431a632/tenor.gif?itemid=16329826', 
        'https://media1.tenor.com/images/132256ad8a3b4c067bd42ae52d16eb21/tenor.gif?itemid=16522851', 
        'https://media1.tenor.com/images/90a13dba11d0c4acf5761ccc82e976a2/tenor.gif?itemid=16663051', 
        'https://media1.tenor.com/images/87728ec556a81626afac6cd6c19f0cb5/tenor.gif?itemid=17001405', 
        'https://media1.tenor.com/images/810b049b35bf8724aada2078b9d09823/tenor.gif?itemid=12108171', 
        'https://media1.tenor.com/images/1cbefa7c1245d452658056823b149ed3/tenor.gif?itemid=13871976', 
        'https://media1.tenor.com/images/cfb7817a23645120d4baba2dcb9205e0/tenor.gif?itemid=5710495'
  
    ];
  
    return rand[Math.floor(Math.random() * rand.length)];
  }
  
  module.exports = {
    name: 'shoot',
    aliases: [],
    category: 'Actions',
    utilisation: '{prefix}shoot [ping user]',

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
  if (command === 'shoot') {
    
  
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
       .setTitle('🔫  **' + message.author.username + '** shot **' + personTagged.user.username + '**  😱')
       .setImage(doShootAction())
       .setColor(0x87B4E7)
       message.channel.send(embed);
      }
  
  
   }
  }};