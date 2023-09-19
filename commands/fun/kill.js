function doKillAction() {
    var rand = [
      'https://media1.tenor.com/images/7ddb4b3968b9f45ca0bbd80a3473ef46/tenor.gif?itemid=9705584',
      'https://i.pinimg.com/originals/8d/50/60/8d50607e59db86b5afcc21304194ba57.gif',
      'https://i.imgur.com/DgrKCZX.gif',
      'https://i.pinimg.com/originals/7a/36/db/7a36db1b8f1f65908c8ccce0ee7f6339.gif',
      'https://media1.tenor.com/images/fbb847a43ec9a370531f044830860b16/tenor.gif?itemid=13652146',
      'https://images6.fanpop.com/image/photos/42600000/-Silver-Fang-One-Punch-Man-anime-42661937-500-281.gif',
      'https://media1.tenor.com/images/4e1c688f7666adb0f68bb4995e47e0ef/tenor.gif?itemid=16634439',
      'https://media1.tenor.com/images/b55aace72003e3fa100c208c8fefe250/tenor.gif?itemid=14745109',
      'https://media.tenor.com/images/5cdcbff8c5bce802d7b65baa711f12f4/tenor.gif',
      'https://media1.tenor.com/images/31686440e805309d34e94219e4bedac1/tenor.gif?itemid=4790446',
      'https://media1.tenor.com/images/d3f0893d296d19b1fb6201a30619206c/tenor.gif?itemid=7256224', 
      'https://media1.tenor.com/images/ff2dcd44504000e320c21ae5682b5369/tenor.gif?itemid=5749160', 
      'https://media1.tenor.com/images/3918ab9203b15b16cfc872f5540bfedc/tenor.gif?itemid=5958526'
    ]
    return rand[Math.floor(Math.random() * rand.length)];
  }
  
  module.exports = {
    name: 'kill',
    aliases: [],
    category: 'Actions',
    utilisation: '{prefix}kill [ping user]',

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
  if (command === 'kill') {


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
       .setTitle('🗡️  **' + message.author.username + '** killed **' + personTagged.user.username + '**')
       .setImage(doKillAction())
       .setColor(0x87B4E7)
       message.channel.send(embed);
      }
  
   }
  }};