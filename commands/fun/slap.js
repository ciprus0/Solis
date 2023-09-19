function doSlapAction() {
    var rand = [
      'https://media4.giphy.com/media/Zau0yrl17uzdK/giphy.gif',
      'https://media1.tenor.com/images/b6d8a83eb652a30b95e87cf96a21e007/tenor.gif?itemid=10426943',
      'https://media1.tenor.com/images/3fd96f4dcba48de453f2ab3acd657b53/tenor.gif?itemid=14358509',
      'https://media1.giphy.com/media/Gf3AUz3eBNbTW/giphy.gif',
      'https://media1.tenor.com/images/f9f121a46229ea904209a07cae362b3e/tenor.gif?itemid=7859254',
      'https://i.pinimg.com/originals/cd/13/ad/cd13adaeb8b4208db2270d7c94963101.gif',
      'https://i.kym-cdn.com/photos/images/original/001/040/951/73e.gif',
      'https://i.pinimg.com/originals/4a/fb/2c/4afb2c9b1d06035d64db1a93ae78a16f.gif',
      'https://i.imgur.com/o2SJYUS.gif',
      'https://media1.tenor.com/images/af36628688f5f50f297c5e4bce61a35c/tenor.gif?itemid=17314633',
      'https://i.pinimg.com/originals/68/d3/cd/68d3cd90baa448b24aebd79f40efad6c.gif',
      'https://media1.tenor.com/images/2c1382697bc72d5a76997a6215f53b9a/tenor.gif?itemid=7206418',
      'https://media1.tenor.com/images/9ea4fb41d066737c0e3f2d626c13f230/tenor.gif?itemid=7355956', 
      'https://media1.tenor.com/images/477821d58203a6786abea01d8cf1030e/tenor.gif?itemid=7958720', 
      'https://media1.tenor.com/images/153b2f1bfd3c595c920ce60f1553c5f7/tenor.gif?itemid=10936993', 
      'https://media1.tenor.com/images/1ba1ea1786f0b03912b1c9138dac707c/tenor.gif?itemid=5738394', 
      'https://media1.tenor.com/images/4fa82be21ffd18c99a9708ba209d56ad/tenor.gif?itemid=5318916', 
      'https://media1.tenor.com/images/c25d3286056d127b1eeeb1ff657b0580/tenor.gif?itemid=17314633', 
      'https://media1.tenor.com/images/299366efafc95bc46bfd2f9c9a46541a/tenor.gif?itemid=16819981', 
      'https://media1.tenor.com/images/d21e86018af6d2db1a718a717c827b77/tenor.gif?itemid=17423280', 
      'https://media1.tenor.com/images/539979b4850ea21702d0f865398c62a6/tenor.gif?itemid=15631717', 
      'https://media1.tenor.com/images/5ab22ca640af20cd3b479694bde9e25c/tenor.gif?itemid=4961067'
    ]
    return rand[Math.floor(Math.random() * rand.length)];
  }
  module.exports = {
    name: 'slap',
    aliases: [],
    category: 'Actions',
    utilisation: '{prefix}slap [ping user]',

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
  if (command === 'slap') {

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
       .setTitle('👋  **' + message.author.username  + '** slapped **' + personTagged.user.username + '**')
       .setImage(doSlapAction())
       .setColor(0x87B4E7)
       message.channel.send(embed);
      }
  
   }
  
  }};
  