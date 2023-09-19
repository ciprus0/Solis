/**
 * // @author © Storm Developmentz
*/

const Discord = require("discord.js");
const config = require('../botconfig.json');

module.exports = {
    name: 'unban',
    aliases: ['None'],
    category: 'Moderation',
    utilisation: '{prefix}unban [user] <reason>',

    async execute(client, message, prefix) {
        const db1 = require("quick.db")
        db1.add(`commands_used`, 1)
        let messageArray = message.content.split(/ +/);
        let cmd = messageArray[0];
        let args = messageArray.slice(1);
        if(message.guild.id !== '871546040220799026') return message.inlineReply('Sorry, for now this command is not allowed here.')
    client.pendingbans = require("../pendingbans.json");

    let allowedRoles;
    if(config.Ban_Command_Roles.length > 0) allowedRoles = config.Ban_Command_Roles;
    if(config.Ban_Command_Roles.length == 0) allowedRoles = config.staffRoles;
    if(!message.guild.member(message.author).roles.cache.some(r => allowedRoles.includes(r.id))) return 
    let helpEmbed = new Discord.MessageEmbed()
    .setTitle(`Command: ${prefix}unban`)
    .setColor("RANDOM")
    .setDescription("Unbans the specified user from the server.")
    .addField("Aliases", `\`none\``, true)
    .addField("Allowed Roles", `${allowedRoles.join(` | `)}`, true)
    .addField("Usage", `\`${prefix}unban [user] [optional reason]\``)
    .addField("Example", `\`${prefix}unban @user Accidental ban\``)

    if(!args[0]) return message.reply(helpEmbed);
    if(args[0].toLowerCase() == "help") return message.reply(helpEmbed);

    let unbanuser = await client.users.fetch(args[0]);

    let errorEmbed = new Discord.MessageEmbed()
    .setColor("#6b0202")
    .setDescription(`❌ User Not Found: ${args[0]}`);

    if(!unbanuser) return message.reply(errorEmbed);

    let mReason = "No reason given.";
    if(args.slice(1).join(" ")) mReason = args.slice(1).join(" ");

    let error5Embed = new Discord.MessageEmbed()
    .setColor("#6b0202")
    .setDescription(`❌ User (${unbanuser.tag}) is not banned!`);

    let banned = await message.guild.fetchBans().then(bans => bans.get(unbanuser.id));
    if(!banned) return message.reply(error5Embed);

    let unbanEmbed = new Discord.MessageEmbed()
    .setTitle("Unban")
    .setDescription(`\`${unbanuser.tag}\` has been unbanned.`)
    .setColor("#12e049")
    .addField("Unbanned User", `${unbanuser} (${unbanuser.id})`, true)
    .addField("Responsible Staff", `${message.member} (${message.author.id})`, true)
    .addField("Reason", mReason, true)
    .setTimestamp();

    let successEmbed = new Discord.MessageEmbed()
    .setColor("#39fa53")
    .setAuthor('User Unbanned | ' + message.guild.name, message.guild.iconURL())
.setDescription(`<:NB_IconPinUnread:790265429691072542> \`${unbanuser.tag}\` has been unbanned from Night Bar.\n**Moderator:** <@${message.author.id}>`)
.setThumbnail(message.guild.iconURL())



    message.delete();
    message.guild.members.unban(unbanuser.id);
    message.channel.send(successEmbed);
    message.guild.channels.cache.find(channel => channel.id == config.Moderation_Logs_Channel).send(unbanEmbed);

}
}
// © Storm Developmentz
