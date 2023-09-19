const Discord = require("discord.js");
const config = require('../../botconfig.json');
const db1 = require('quick.db')
module.exports = {
    name: 'purge',
    aliases: ['None'],
    category: 'Moderation',
    utilisation: '{prefix}purge <user> [amount]',

    async execute(client, message, args, prefix) {
      
      const db1 = require("quick.db")
        db1.add(`commands_used`, 1)
      if(db1.get(`staffrole_id_${message.guild.id}`) == null || db1.get(`staffrole_id_${message.guild.id}`) == 'false') return message.inlineReply(`You have not set up your staff role/s for this server! Please use \`${prefix}setupmoderation\`!`)
      if(message.member.roles.cache.some(r => db1.get(`staffrole_id_${message.guild.id}`).includes(r.id)) || message.member.hasPermission("MANAGE_MESSAGES")){
let allowedRoles = config.staffRoles.map(rID => `<@&${rID}>`);

let helpEmbed = new Discord.MessageEmbed()
  .setTitle(`Command: ${prefix}purge`)
  .setColor("RANDOM")
  .setDescription("Deletes a specified amount of messages in the channel, with an option for specific member.")
  .addField("Aliases", `\`${prefix}clear\``, true)
  .addField("Allowed Roles", `${allowedRoles.join(` | `)}`, true)
  .addField("Usage", `\`${prefix}purge [optional user] [amount of messages]\``)
  .addField("Example", `\`${prefix}purge @joe 5\`\n\`${prefix}purge 10\``)

if (!args[0] || args[0] == "help") return message.reply(helpEmbed);
let purgemember = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
const cmd = args[0]
if(cmd.toLowerCase() === 'bots'){
  const Channel = message.channel;
    const Messages = await Channel.messages.fetch({limit: 100});

    Messages.forEach(msg => { // Checking if the message author is a bot.
        if (msg.author.bot) msg.delete().then(message.delete())
        // This will delete messages from any bot.
    });

  return 
};


if (purgemember) {

  let error1Embed = new Discord.MessageEmbed()
    .setColor("#6b0202")
    .setDescription(`❌ Specify an amount of messages to clear!`);

  let error2Embed = new Discord.MessageEmbed()
    .setColor("#6b0202")
    .setDescription(`❌ Invalid Argument: "${args[1]}"\nMust be a valid number from 2-100!`);

  if (!args[1]) return message.reply(error1Embed);
  if (args[1] && isNaN(args[1])) return message.reply(error2Embed);
  if (args[1] > 100 || args[1] < 2) return message.reply(error2Embed);

  await message.delete();

  message.channel.messages.fetch({ limit: 100 }).then(messages => {
    let purgemessages = messages.filter(messages => messages.author.id == purgemember.id && !messages.pinned);
    message.channel.bulkDelete(purgemessages.first(parseInt(args[1])));
  });

} else if (!purgemember) {

  let error3Embed = new Discord.MessageEmbed()
    .setColor("#6b0202")
    .setDescription(`❌ Invalid Argument: "${args[0]}"\nMust be a valid number from 2-100!`);

  if (isNaN(args[0])) return message.reply(error3Embed);
  if (args[0] > 100 || args[0] < 2) return message.reply(error3Embed);

  await message.delete();

  message.channel.messages.fetch({ limit: 100 }).then(messages => {
    let purgemessages = messages.filter(messages => !messages.pinned);
    message.channel.bulkDelete(purgemessages.first(parseInt(args[0])));
  });
}
      }

    }};