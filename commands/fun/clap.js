
function doClapAction() {
    var rand = [
        'https://media1.tenor.com/images/bdddaedb6520858f32b155e326c5c832/tenor.gif?itemid=15245324', 
        'https://media1.tenor.com/images/ceef2812fb117532d74c95e0a224343a/tenor.gif?itemid=6502636', 
        'https://media1.tenor.com/images/7460a26a07ef24d696eaac0b0ff4d5bf/tenor.gif?itemid=16461487', 
        'https://media1.tenor.com/images/7ea5fbd96e5a87781f3ab54fe0f96a11/tenor.gif?itemid=15209555', 
        'https://media1.tenor.com/images/ef480a3671e758be51f02b06f040f15c/tenor.gif?itemid=14047162', 
        'https://media1.tenor.com/images/512c44c5935f4d77ac31b97624c4cb32/tenor.gif?itemid=17102646', 
        'https://media1.tenor.com/images/c0c809f93b4189e86223fe74c7918299/tenor.gif?itemid=15114479', 
        'https://media1.tenor.com/images/01d2a1f0fa8776f615f1d28db210a4da/tenor.gif?itemid=10260188', 
        'https://media1.tenor.com/images/70d0f70c733778ff202ece767722d28b/tenor.gif?itemid=7198772', 
        'https://media1.tenor.com/images/a2808bf5ab74e10f8d1a99c7972c15cc/tenor.gif?itemid=16026805'
    ]
    return rand[Math.floor(Math.random() * rand.length)];
  }
  
  module.exports = {
    name: 'clap',
    aliases: ['None'],
    category: 'Actions',
    utilisation: '{prefix}clap',

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
  if (command === 'clap') {

    let args = message.content.substring(prefix.length).split(" ");
      const embed = new Discord.MessageEmbed()
       .setTitle('👏  **' + message.author.username + '** is clapping ')
       .setImage(doClapAction())
       .setColor(0x87B4E7)
       message.channel.send(embed);
   }
  }};
  