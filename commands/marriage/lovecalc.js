module.exports = {
    name: 'lovecalc',
    aliases: ['love', 'affinity'],
    category: 'Love',
    utilisation: '{prefix}lovecalc [ping user] <ping user>',
module: 'love',
    execute(client, message, args) {
        const db1 = require("quick.db")
        db1.add(`commands_used`, 1)
        const db = require('quick.db')
        const { getMember } = require('../../functions.js');
        const Discord = require('discord.js')
// Get a member from mention, id, or username
let person = message.mentions.members.first() || message.guild.members.cache.get(args[0])
let person2 = message.guild.members.cache.get(args[1]) 

var count = 0; //To find out what user we're on.
let user1; //Defining the users
let user2; //Defining the users
message.mentions.members.forEach(user => {
    count++; //Adding one onto the count variable
    if (count >= 3) return; //If the user mentioned more than two users return
    if (count === 1) user1 = message.guild.members.cache.get(user.id); //Getting the first mentioned user
    else user2 = message.guild.members.cache.get(user.id); //Getting the second mentioned user
});

/*if(!person){
    const prefix = '$'
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
                  { name: 'Usage', value: cmd.utilisation.replace('{prefix}', client.config1.discord.prefix), inline: true },
              ],
              timestamp: new Date(),
              description: 'Find information on the command provided.\nMandatory arguments `[]`, optional arguments `<>`.',
          }
      })
}*/
if (!user2 && message.author.id === person.id) {
    return message.inlineReply('You good bro?')
}
if (!user2) {
if(db.get(`lovecalc_${message.author.id}_${person.id}`)) {
const love = parseInt(db.get(`lovecalc_${message.author.id}_${person.id}`));

const loveIndex = Math.floor(love / 10);
const loveLevel = '💖'.repeat(loveIndex) + '🖤'.repeat(10 - loveIndex);

const embed = new Discord.MessageEmbed()

    
    .setColor('#ffb6c1')
.setDescription(`☁ ${Math.floor(love)}% of love \n\n${loveLevel} `);

message.inlineReply(`**${person.user.username}** + **${message.author.username}** = `, embed);
} else {
    const love = Math.random() * 100;

const loveIndex = Math.floor(love / 10);
const loveLevel = '💖'.repeat(loveIndex) + '🖤'.repeat(10 - loveIndex);

const embed = new Discord.MessageEmbed()


.setColor('#ffb6c1')
.setDescription(`☁ ${Math.floor(love)}% of love \n\n${loveLevel} `);

message.inlineReply(`**${person.user.username}** + **${message.author.username}** = `, embed);
db.set(`lovecalc_${message.author.id}_${person.id}`, `${love}`)
}
}

if (person && user2) {
    if(db.get(`lovecalc_${person.id}_${user2.id}`)) {
    const love = parseInt(db.get(`lovecalc_${person.id}_${user2.id}`));
    
    const loveIndex = Math.floor(love / 10);
    const loveLevel = '💖'.repeat(loveIndex) + '🖤'.repeat(10 - loveIndex);
    
    const embed = new Discord.MessageEmbed()
       
 
    .setColor('#ffb6c1')
    .setDescription(`☁ ${Math.floor(love)}% of love \n\n${loveLevel} `);
    
    message.inlineReply(`**${person.user.username}** + **${user2.user.username}** = `, embed);
    } else {
        const love = Math.random() * 100;
    
    const loveIndex = Math.floor(love / 10);
    const loveLevel = '💖'.repeat(loveIndex) + '🖤'.repeat(10 - loveIndex);
    
    const embed = new Discord.MessageEmbed()
    

    .setColor('#ffb6c1')
    .setDescription(`☁ ${Math.floor(love)}% of love \n\n${loveLevel} `);
    
    message.inlineReply(`**${person.user.username}** + **${user2.user.username}** = `, embed);
    db.set(`lovecalc_${user2.id}_${person.id}`, `${love}`)
    }
    }

}};