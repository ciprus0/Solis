function doCuddleAction() {
    var rand = [
      'https://media.tenor.com/images/10d008444e019075aa319b1964557f5b/tenor.gif',
      'https://i.imgur.com/p2Jt2P5.gif',
      'https://i.pinimg.com/originals/d8/7c/5c/d87c5cdd0a68caf2b6feeec0f7da7315.gif',
      'https://media.tenor.com/images/768c4f7b1512429bf764db3608734304/tenor.gif',
      'https://25.media.tumblr.com/tumblr_ma7l17EWnk1rq65rlo1_500.gif',
      'https://66.media.tumblr.com/1b537d658df2f2a9594b83d3e768bbe1/tumblr_o373tkcR7E1ub9qlao1_400.gif',
      'https://acegif.com/wp-content/uploads/anime-hug.gif',
      'https://pa1.narvii.com/6103/377538d76d83ec7d9d2be32870d43f2ac931a412_hq.gif',
      'https://i.gifer.com/Y4Pm.gif',
      'https://media.tenor.com/images/ca88f916b116711c60bb23b8eb608694/tenor.gif',
      'https://media.tenor.com/images/e2c97a3b7a1ac0ec5bcecc0c18c61209/tenor.gif',
      'https://media1.tenor.com/images/8f8ba3baeecdf28f3e0fa7d4ce1a8586/tenor.gif?itemid=12668750', 
      'https://media1.tenor.com/images/3b205574d0352d4d61687f835276566d/tenor.gif?itemid=12669039', 
      'https://media1.tenor.com/images/d16a9affe8915e6413b0c1f1d380b2ee/tenor.gif?itemid=12669052', 
      'https://media1.tenor.com/images/7edded2757934756fdc240019d956cb3/tenor.gif?itemid=16403937', 
      'https://media1.tenor.com/images/50e1eb3f727a2cf0598eaaf3c1fc46f3/tenor.gif?itemid=12668887', 
      'https://media1.tenor.com/images/3d62384321435408f50823ae6f5ca033/tenor.gif?itemid=12270770', 
      'https://media1.tenor.com/images/4179058caa9eef3e7c6b21b8888b9cc9/tenor.gif?itemid=12955956', 
      'https://media1.tenor.com/images/13be52a4a4a26b0c9e479df6644d6de5/tenor.gif?itemid=12668752', 
      'https://media1.tenor.com/images/ec938c17b78033bf368cacea844d03af/tenor.gif?itemid=7250422', 
      'https://media1.tenor.com/images/96d28f5ef7ab317d8cdf6dbafcc6877b/tenor.gif?itemid=16539432'
    ]
    return rand[Math.floor(Math.random() * rand.length)];
  }
  module.exports = {
    name: 'cuddle',
    aliases: [],
    category: 'Actions',
    utilisation: '{prefix}cuddle [ping user]',

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
  if (command === 'cuddle') {
   

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
       .setTitle('🥰  **' + message.author.username + '** and **' + personTagged.user.username + '** are cuddling!')
       .setImage(doCuddleAction())
       .setColor(0x87B4E7)
       message.channel.send(embed);
      }
  
  
   }
  }};