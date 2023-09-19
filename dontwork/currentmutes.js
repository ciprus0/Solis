/**
 * // @author © Storm Developmentz
*/

const Discord = require("discord.js");
const config = require('../botconfig.json');
const humanizeDuration = require('humanize-duration');

module.exports = {
    name: 'currentmutes',
    aliases: ['cm'],
    category: 'Moderation',
    utilisation: '{prefix}currentmutes',

    async execute(client, message, prefix) {
        const db1 = require("quick.db")
        db1.add(`commands_used`, 1)
        let messageArray = message.content.split(/ +/);
        let cmd = messageArray[0];
        let args = messageArray.slice(1);
        if(message.guild.id !== '871546040220799026') return message.inlineReply('Sorry, for now this command is not allowed here.')
  let allowedRoles = config.staffRoles.map(rID => `<@&${rID}>`);
  let allowedRoles1 = config.staffRoles
  if(!message.guild.member(message.author).roles.cache.some(r => allowedRoles1.includes(r.id))) return 
  let helpEmbed = new Discord.MessageEmbed()
    .setTitle(`Command: ${prefix}currentmutes`)
    .setColor("RANDOM")
    .setDescription("Displays information on a user.")
    .addField("Aliases", `\`${prefix}cm\``, true)
    .addField("Allowed Roles", `${allowedRoles.join(` | `)}`, true)
    .addField("Usage", `\`${prefix}currentmutes\`\n\`${prefix}cm\``)
    .addField("Example", `\`${prefix}currentmutes\``)

  if(args[0] && args[0].toLowerCase() == "help") return message.reply(helpEmbed);

  client.pendingmutes = require("../pendingmutes.json");

  let muteCount = 0;

  let moderations = new Discord.MessageEmbed()
  .setColor("#ffb53f")
  .setTimestamp();  

  let moderations2 = new Discord.MessageEmbed()
  .setColor("#ffb53f")
  .setTimestamp();    

  for(let i in client.pendingmutes){

    let time = client.pendingmutes[i].time;
    let dood = message.guild.member(message.guild.members.cache.get(i));
    if(!dood) continue;      

    if(Date.now() < time && !moderations.fields[24]){

      muteCount++;
      moderations.addField(`${dood.user.tag} | ${dood.user.id}`, humanizeDuration(time - Date.now(), {round: true}));

    }else if(Date.now() < time && moderations.fields[25]){

      muteCount++;
      moderations2.addField(`${dood.user.tag} | ${dood.user.id}`, humanizeDuration(time - Date.now(), {round: true}));

    }

  };

  moderations.setTitle(`Current Mutes (${muteCount})`);

  if(!moderations2.fields[0]) message.channel.send(moderations);
  
  if(moderations2.fields[0]){
    message.channel.send(moderations);
    message.channel.send(moderations2);
  };

}
};

// © Storm Developmentz
