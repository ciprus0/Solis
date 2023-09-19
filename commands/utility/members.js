const Discord = require('discord.js')
const config = require('../../botconfig.json')

module.exports = {
    name: 'members',
    aliases: ['rolemembers'],
    category: 'Users',
    utilisation: '{prefix}members [role] <role>',
module: 'utility',
    async execute(client, message, args, prefix) {
      const db1 = require("quick.db")
        db1.add(`commands_used`, 1)

let helpEmbed = new Discord.MessageEmbed()
    .setTitle(`Command: ${prefix}members`)
    .setColor("RANDOM")
    .setDescription("Lists the member in the role(s).")
    .addField("Aliases", `\`${prefix}rolemembers\``, true)
    .addField("Allowed Roles", `Everyone or Staff Only`, true)
    .addField("Usage", `\`${prefix}members [role]\`\n\`${prefix}members [role1, role2]\``)
    .addField("Example", `\`${prefix}members Moderator\``)

  let roleargs = args.join(" ");
  if (!roleargs) return message.reply(helpEmbed);
  if (args[0].toLowerCase() == "help") return message.reply(helpEmbed);

  if (roleargs.includes(", ") && roleargs.split(", ")[0] && roleargs.split(", ")[1]) {

    let role1arg = roleargs.split(", ")[0];
    let role2arg = roleargs.split(", ")[1];

    let role1 = message.guild.roles.cache.find(role => role.name.toLowerCase() === role1arg.toLowerCase()) || message.guild.roles.cache.find(role => role.name.toLowerCase().startsWith(role1arg.toLowerCase())) || message.guild.roles.cache.find(role => role.name.toLowerCase().includes(role1arg.toLowerCase()));

    let error2Embed = new Discord.MessageEmbed()
      .setColor("#6b0202")
      .setDescription(`❌ Role Not Found: ${role1arg}`);

    if (!role1) return message.reply(error2Embed);

    let role2 = message.guild.roles.cache.find(role => role.name.toLowerCase() === role2arg.toLowerCase()) || message.guild.roles.cache.find(role => role.name.toLowerCase().startsWith(role2arg.toLowerCase())) || message.guild.roles.cache.find(role => role.name.toLowerCase().includes(role2arg.toLowerCase()));

    let error3Embed = new Discord.MessageEmbed()
      .setColor("#6b0202")
      .setDescription(`❌ Role Not Found: ${role2arg}`);

    if (!role2) return message.reply(error3Embed);

    let listMembers = message.guild.members.cache.filter(m => m.roles.cache.some(r => [role1.id].includes(r.id)) && m.roles.cache.some(r => [role2.id].includes(r.id)));
    let listMembersList = listMembers.map(mem => `<@!${mem.id}>`).join(`\n`);
    if (listMembers.size > 80) listMembersList = "*Too many to list.*";

    let membersEmbed = new Discord.MessageEmbed()
      .setTitle(`Members in ${role1.name}, ${role2.name} (${listMembers.size})`)
      .setColor("#821adb")
      .setDescription(listMembersList)
      .setTimestamp();

    return message.channel.send(membersEmbed);
  };

  let therole = message.guild.roles.cache.find(role => role.name.toLowerCase() === roleargs.toLowerCase()) || message.guild.roles.cache.find(role => role.name.toLowerCase().startsWith(roleargs.toLowerCase())) || message.guild.roles.cache.find(role => role.name.toLowerCase().includes(roleargs.toLowerCase()));

  let error4Embed = new Discord.MessageEmbed()
    .setColor("#6b0202")
    .setDescription(`${roleargs} was not found.`);

  if (roleargs && !therole) return message.reply(error4Embed);

  let membersList = therole.members.map(mem => `<@!${mem.id}>`).join(`\n`);
  if (therole.members.size > 60) membersList = "*Too many to list.*";


  let members2Embed = new Discord.MessageEmbed()
    .setTitle("Members in " + therole.name + ` (${therole.members.size})`)
    .setColor(therole.color)
    .setDescription(membersList)
    .setTimestamp();

  message.channel.send(members2Embed);

}};