

function doAdoptAction() {
    var rand = [
        'https://media1.tenor.com/images/de9d7c0f71f09a72b8d716da38236ef1/tenor.gif?itemid=20018414', 
        'https://media1.tenor.com/images/31178e97fb97f3f6dc067e42725c12c0/tenor.gif?itemid=15791437',
        'https://media1.tenor.com/images/e7683b6990ca2b040a1b522afcb88544/tenor.gif?itemid=18693195', 
        'https://media1.tenor.com/images/b5a9f1e9bf32dcb5d338c3fadead5e3e/tenor.gif?itemid=5784899',
      
        'https://media1.tenor.com/images/b354b7e906a41717970459bf41a98642/tenor.gif?itemid=20150013', 
        'https://media1.tenor.com/images/2bb878f33afd34e139d592a2e37db1b2/tenor.gif?itemid=11913373', 
        'https://media1.tenor.com/images/a8be56215a74f502d4bf9a87b8ea9d40/tenor.gif?itemid=10978572', 
        'https://media1.tenor.com/images/9d1f7e9335480d5c58dad8a3530e56a4/tenor.gif?itemid=18842875', 
        'https://media1.tenor.com/images/ca3fa5308c0ba6b0cb874ec3abcaa495/tenor.gif?itemid=4282984'
    ];
  
    return rand[Math.floor(Math.random() * rand.length)];
  
  }
  module.exports = {
    name: 'adopted',
    aliases: ['None'],
    category: 'Actions',
    utilisation: '{prefix}adopted [ping user]',

    async execute(client, message) {
        const db1 = require("quick.db")
        db1.add(`commands_used`, 1)
        const Discord = require('discord.js')
        const { PREFIX } = require('../../config');
        const db = require('quick.db')
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
      })};
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
       .setTitle('😂  **' + personTagged.user.username + '** you were adopted')
       .setImage(doAdoptAction())
       .setColor(0x87B4E7)
       message.channel.send(embed);
      }
  
   }
  
  };