function doCryAction() {
    var rand = [
      'https://media1.tenor.com/images/3e5ebd2280435f134390c6813ba10bb1/tenor.gif?itemid=11933952',
      'https://i.pinimg.com/originals/b4/b1/64/b4b1640525ecadfa1030e6096f3ec842.gif',
      'https://i.pinimg.com/originals/e0/fb/b2/e0fbb27f7f829805155140f94fe86a2e.gif',
      'https://i.pinimg.com/originals/73/b1/3b/73b13bcd2590cd93ca1ca9bbc7f917be.gif',
      'https://i.pinimg.com/originals/3c/69/16/3c691659f01aba24f6a6deed24305989.gif',
      'https://media2.giphy.com/media/1eEB6YXgMrAeAgKwyL/200.gif',
      'https://i.gifer.com/3B6X.gif',
      'https://data.whicdn.com/images/320214384/original.gif',
      'https://media1.tenor.com/images/13d9d22c407ea341ed2054372fac3c48/tenor.gif?itemid=17515914',
      'https://media1.giphy.com/media/gMzPyvdzoDikU/giphy.gif',
      'https://media0.giphy.com/media/8VB1I9YtdGBFu/giphy.gif',
      'https://media2.giphy.com/media/o8nHLRBIS2vcc/giphy.gif',
      'https://i.pinimg.com/originals/6a/e4/a0/6ae4a0ce2705f31738917d0ad56f9606.gif',
      'https://media1.giphy.com/media/4pk6ba2LUEMi4/giphy.gif',
      'https://i.gifer.com/Zgp9.gif',
      'https://img.ifunny.co/images/7bd5d9fd950b676ad2f18bc6d5eb6230696e5ab0896e09026a5bdd87cd3e4cdd_1.jpg',
      'https://i.pinimg.com/564x/c6/f2/63/c6f26313f39a35248d8529d4b27038ab.jpg',
      'https://ahseeit.com//king-include/uploads/2019/01/49562517_2476184055731250_5752766523963619196_n-9541719234.jpg',
      'https://i.redd.it/3243gjy3es031.jpg',
      'https://i.pinimg.com/736x/0c/91/b5/0c91b51e23f302efbf38095507db5300.jpg',
      'https://pics.me.me/imagine-dating-a-pornstar-and-she-come-home-and-say-55229551.png',
      'https://media1.tenor.com/images/4b5e9867209d7b1712607958e01a80f1/tenor.gif?itemid=5298257', 
      'https://media1.tenor.com/images/67df1dca3260e0032f40048759a967a5/tenor.gif?itemid=5415917', 
      'https://media1.tenor.com/images/09b085a6b0b33a9a9c8529a3d2ee1914/tenor.gif?itemid=5648908', 
      'https://media1.tenor.com/images/b88fa314f0f172832a5f41fce111f359/tenor.gif?itemid=13356071', 
      'https://media1.tenor.com/images/a53f4017a15753ff10e42770e89ce1d0/tenor.gif?itemid=4555995', 
      'https://media1.tenor.com/images/213ec50caaf02d27d358363016204d1d/tenor.gif?itemid=4553386', 
      'https://media1.tenor.com/images/cff668938903f9942991f54b031043b7/tenor.gif?itemid=4952247', 
      'https://media1.tenor.com/images/44d764c6ffe09bd165643aae33aa98f9/tenor.gif?itemid=7329079', 
      'https://media1.tenor.com/images/86402d3ef7b5980fb695a7a9a2189be0/tenor.gif?itemid=17180894', 
      'https://media1.tenor.com/images/116d0a5803986793951cf6a506ad0c22/tenor.gif?itemid=14147599'
    ]
    return rand[Math.floor(Math.random() * rand.length)];
  }
  
  module.exports = {
    name: 'cry',
    aliases: ['None'],
    category: 'Actions',
    utilisation: '{prefix}cry',

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
  if (command === 'cry') {
    
    
    let args = message.content.substring(prefix.length).split(" ");
      const embed = new Discord.MessageEmbed()
       .setTitle('😭  **' + message.author.username + '** is crying :(')
       .setImage(doCryAction())
       .setColor(0x87B4E7)
       message.channel.send(embed);
   }
  }};
  