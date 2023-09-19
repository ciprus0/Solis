function doHugAction() {
    var rand = [
      'https://media.discordapp.net/attachments/780140524823642143/785651676987260928/hug_gif_2.gif',
      'https://media.discordapp.net/attachments/780140524823642143/785651682615885834/hug_gif_1.gif',
      'https://media.discordapp.net/attachments/780140524823642143/785651686593134602/cuddle_gif_1.gif',
      'https://media.discordapp.net/attachments/780140524823642143/785651697997053972/Cuddle_gif_2.gif',
      'https://media.discordapp.net/attachments/780140524823642143/785651695531196456/cuddle_gif_3.gif',
      'https://i.pinimg.com/originals/6d/b5/4c/6db54c4d6dad5f1f2863d878cfb2d8df.gif',
      'https://media0.giphy.com/media/l2QDM9Jnim1YVILXa/giphy.gif',
      'https://thumbs.gfycat.com/BlueDecimalAardwolf-small.gif',
      'https://i.pinimg.com/originals/b6/2f/04/b62f047f8ed11b832cb6c0d8ec30687b.gif',
      'https://media.discordapp.net/attachments/780140524823642143/785655962295861248/failed_hug.gif',
      'https://media.tenor.com/images/cb44fa579df860cf65786ec1a1b486c3/tenor.gif',
      'https://media.tenor.com/images/a42e5eeba7ef210839a96ce9251d1772/tenor.gif',
      'https://media1.tenor.com/images/e58eb2794ff1a12315665c28d5bc3f5e/tenor.gif?itemid=10195705', 
      'https://media1.tenor.com/images/969f0f462e4b7350da543f0231ba94cb/tenor.gif?itemid=14246498', 
      'https://media1.tenor.com/images/1069921ddcf38ff722125c8f65401c28/tenor.gif?itemid=11074788', 
      'https://media1.tenor.com/images/7db5f172665f5a64c1a5ebe0fd4cfec8/tenor.gif?itemid=9200935', 
      'https://media1.tenor.com/images/daffa3b7992a08767168614178cce7d6/tenor.gif?itemid=15249774', 
      'https://media1.tenor.com/images/bb9c0c56769afa3b58b9efe5c7bcaafb/tenor.gif?itemid=16831471', 
      'https://media1.tenor.com/images/3ce31b15c2326831a8de9f0b693763ff/tenor.gif?itemid=16787485', 
      'https://media1.tenor.com/images/c9e2e21f4eedd767a72004e4ab521c9d/tenor.gif?itemid=13576064', 
      'https://media1.tenor.com/images/1a73e11ad8afd9b13c7f9f9bb5c9a834/tenor.gif?itemid=13366388', 
      'https://media1.tenor.com/images/7ca5f791d767630c8317025951eb1a7f/tenor.gif?itemid=16852734'
    ];
  
    return rand[Math.floor(Math.random() * rand.length)];
  
  }
  module.exports = {
    name: 'hug',
    aliases: [],
    category: 'Actions',
    utilisation: '{prefix}hug [ping user]',

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
  if (command === 'hug') {
  

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
       .setTitle('🤗  **' + message.author.username + '** hugged **' + personTagged.user.username + '**')
       .setImage(doHugAction())
       .setColor(0x87B4E7)
       message.channel.send(embed);
      }
  
   }
  
  }};