/*const Discord = require("discord.js");
const config = require('../botconfig.json');

module.exports = {
    name: 'unmute',
    aliases: ['None'],
    category: 'Moderation',
    utilisation: '{prefix}unmute [user] [reason]',

    async execute(client, message, args, prefix) {
        if(message.author.id !== '285528911545106432') return;
        const db1 = require("quick.db")
        db1.add(`commands_used`, 1)
        if(message.guild.id !== '758514078783897630') return;
    client.pendingmutes = require("../pendingmutes.json");

    let allowedRoles = config.staffRoles.map(rID => `<@&${rID}>`);
    
    let helpEmbed = new Discord.MessageEmbed()
    .setTitle(`Command: ${prefix}unmute`)
    .setColor("RANDOM")
    .setDescription("Unmutes the specified member.")
    .addField("Aliases", `\`none\``, true)
    .addField("Allowed Roles", `${allowedRoles.join(` | `)}`, true)
    .addField("Usage", `\`${prefix}unmute [user] [optional reason]\``)
    .addField("Example", `\`${prefix}unmute @joey accidental mute\``)

    if(!args[0]) return message.reply(helpEmbed);
    if(args[0].toLowerCase() == "help") return message.reply(helpEmbed);

    let uUser = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));

    let errorEmbed = new Discord.MessageEmbed()
    .setColor("#6b0202")
    .setDescription(`❌ Member Not Found: ${args[0]}`);

    if(!uUser) return message.reply(errorEmbed);

    let mReason = "No reason given.";
    if(args.slice(1).join(" ")) mReason = args.slice(1).join(" ");

    let error5Embed = new Discord.MessageEmbed()
    .setColor("#6b0202")
    .setDescription(`❌ User (${uUser}) is not muted!`);

    if(!uUser.roles.cache.some(r=>[config.Muted_Role].includes(r.id))) return message.reply(error5Embed);

    let unmuteEmbed = new Discord.MessageEmbed()
    .setAuthor("Unmute", uUser.user.displayAvatarURL({dynamic: true}))
    .setDescription(`\`${uUser.user.tag}\` has been unmuted.`)
    .setColor("#12e049")
    .addField("Unmuted User", `${uUser} (${uUser.id})`, true)
    .addField("Responsible Staff", `${message.member} (${message.author.id})`, true)
    .addField("Reason", mReason, true)
    .setTimestamp();

    let successEmbed = new Discord.MessageEmbed()
    .setColor("#39fa53")
    .setDescription(`✅ **\`${uUser.user.tag}\` has been unmuted.**`);

    uUser.roles.remove(config.Muted_Role);
    message.delete();
    uUser.send(`You have been unmuted in **${message.guild.name}**`);
    message.channel.send(successEmbed);
    message.guild.channels.cache.find(channel => channel.id == config.Moderation_Logs_Channel).send(unmuteEmbed);

    }};*/