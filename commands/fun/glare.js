


function doGlareAction() {
    var rand = [
        'https://media1.tenor.com/images/4908729f7fb720d3b1e3655348cb3345/tenor.gif?itemid=15060978', 
        'https://media1.tenor.com/images/0c9f9723bb85f6c22e4cbaee6d87c68e/tenor.gif?itemid=16563939', 
        'https://media1.tenor.com/images/6884c2aee4a1036465f8984aa52c9664/tenor.gif?itemid=5254221', 
        'https://media1.tenor.com/images/f1f0d9bb36380b8c6e37213949b69a80/tenor.gif?itemid=14210689', 
        'https://media1.tenor.com/images/97cd5f9ca2ac274356f4609d1aac1b40/tenor.gif?itemid=5630500', 
        'https://media1.tenor.com/images/856ceaea3e84561af61e0ee20c914b65/tenor.gif?itemid=10528179', 
        'https://media1.tenor.com/images/e435cc7096ce7952a9b14cb09f9e002f/tenor.gif?itemid=16999116', 
        'https://media1.tenor.com/images/a3e24882454d9c487070a7326b17d795/tenor.gif?itemid=17305035', 
        'https://media1.tenor.com/images/dd985add00726f0ea1e257ce8cc8b31e/tenor.gif?itemid=15954423', 
        'https://media1.tenor.com/images/de8ad38e7e02798761b3285f0935c6b0/tenor.gif?itemid=14560628'
    ]

    return rand[Math.floor(Math.random() * rand.length)];
  }
  
  module.exports = {
    name: 'glare',
    aliases: ['None'],
    category: 'Actions',
    utilisation: '{prefix}glare <ping user>',

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
  if (command === 'glare') {
    
   
    let args = message.content.substring(prefix.length).split(" ");
      const personTagged = message.mentions.members.first();
      
      if (!args[1]) { 
        const embed1 = new Discord.MessageEmbed()
       .setTitle('😒  **' + message.author.username + '** glared')
       .setImage(doGlareAction())
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
       .setTitle('😒  **' + message.author.username + '** glared at **' + personTagged.user.username + '**')
       .setImage(doGlareAction())
       .setColor(0x87B4E7)
       message.channel.send(embed);
      }}
  


  }};
  