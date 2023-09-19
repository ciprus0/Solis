

function doBiteAction() {
    var rand = [
        'https://media1.tenor.com/images/432a41a6beb3c05953c769686e8c4ce9/tenor.gif?itemid=4704665', 
        'https://media1.tenor.com/images/1169d1ab96669e13062c1b23ce5b9b01/tenor.gif?itemid=9035033', 
        'https://media1.tenor.com/images/418a2765b0bf54eb57bab3fde5d83a05/tenor.gif?itemid=12151511', 
        'https://media1.tenor.com/images/6b42070f19e228d7a4ed76d4b35672cd/tenor.gif?itemid=9051585', 
        'https://media1.tenor.com/images/f308e2fe3f1b3a41754727f8629e5b56/tenor.gif?itemid=12390216', 
        'https://media1.tenor.com/images/6ab39603ef0dd6dbfc78ba20885b991f/tenor.gif?itemid=8220087', 
        'https://media1.tenor.com/images/83271613ed73fd70f6c513995d7d6cfa/tenor.gif?itemid=4915753', 
        'https://media1.tenor.com/images/34a08d324868d33358e0a465040f210e/tenor.gif?itemid=11961581', 
        'https://media1.tenor.com/images/7cc64070f618bdf171b0e45a57cf1b12/tenor.gif?itemid=17054824', 
        'https://media1.tenor.com/images/2735c3a10b0b09871cd5d6bded794f0d/tenor.gif?itemid=14399284'
    ];
  
    return rand[Math.floor(Math.random() * rand.length)];
  
  }
  module.exports = {
    name: 'bite',
    aliases: [],
    category: 'Actions',
    utilisation: '{prefix}bite [ping user]',

    async execute(client, message, args) {
        const db1 = require("quick.db")
        db1.add(`commands_used`, 1)
        const db = require('quick.db')
        const Discord = require('discord.js')
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
      })
      
      } else {
      const embed = new Discord.MessageEmbed()
       .setTitle('🧛  **' + message.author.username + '** bit **' + personTagged.user.username + '**')
       .setImage(doBiteAction())
       .setColor(0x87B4E7)
       message.channel.send(embed);
      }
  
   }
  
  };