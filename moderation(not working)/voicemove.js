/*const { bot_prefix } = require('../config.json');
const { getMember } = require('../functions');
const prefixes = require('../database/prefix.json');
const log = require('../database/logging.json');
const logsetting = require('../database/logonoff.json');
const Discord = require('discord.js');
module.exports = {
    name: 'voicemove',
    aliases: ['move', 'vcmove'],
    category: 'Moderation',
    utilisation: '{prefix}voicemove [mention] [new channel]',

    async execute(client, message, args) {
        const db1 = require("quick.db")
        db1.add(`commands_used`, 1)
        if (!message.member.hasPermission("MOVE_MEMBERS") && !ownerID .includes(message.author.id)) return message.channel.send("**You Dont Have The Permissions To Ban Users! - [MOVE_MEMBERS]**");
        message.delete()
        const toMute = getMember(message, args[0]);

		if (!args[0]) return message.channel.send(`The right syntax is \`${prefixes[message.guild.id]}voicemove [mention] [new channel]\`.`);
		if (!toMute) return message.channel.send('The user can\'t be found.');
        if (!logsetting[message.guild.id]) {
			logsetting[message.guild.id] = {
				checker: 1,
			};
		}
		const values = logsetting[message.guild.id].checker;
        const reason = args[1];
	
let channel = message.mentions.channels.first() || client.guilds.cache.get(message.guild.id).channels.cache.get(args[1]) || message.guild.channels.cache.find(c => c.name.toLowerCase().includes(args.slice(1).join(' ').toLocaleLowerCase()));
if (!channel.type === "voice") return message.channel.send("Unable to locate the voice channel. Make sure to mention a voice channel not a text channel!") 
await toMute.voice.setChannel(channel);
const embed1 = new Discord.MessageEmbed()
.setAuthor(message.guild.name, message.guild.iconURL())
.setDescription(`\`${toMute.user.tag}\`, you have been VC moved.`)
.addFields(
    { name: 'Moved User:', value: '<@' + toMute.user.id + '>' + `\n(${toMute.user.id})`, inline: true},
    { name: 'Moderator:', value: '<@' + message.author.id + '>' + `\n(${message.author.id})`, inline: true },
)
.setTimestamp()
.setFooter(`ID: ${toMute.user.id}`);
toMute.send(embed1)
const embed2 = new Discord.MessageEmbed()
.setAuthor('User VC Moved | ' + message.guild.name, message.guild.iconURL())
.setDescription(`<:NB_IconPinUnread:790265429691072542> \`${toMute.user.tag}\` has been VC moved.\n**Moderator:** <@${message.author.id}>`)
.setThumbnail(message.guild.iconURL())
message.channel.send(embed2)
if (values === undefined) return;
if (values === undefined) return;
if (values === 0) return;
if (values === 1) {
    if (!log) return;
    if (!log[message.guild.id]) return;
    const logChannel = message.guild.channels.cache.get(`${log[message.guild.id].channel}`);
    if(!logChannel) return;

    const embed = new Discord.MessageEmbed()
        .setAuthor('VC Moved', toMute.user.displayAvatarURL({ dynamic: true }))
        .setColor(0xFFE19D)
        .setDescription(`\`${toMute.user.tag}\` has been VC moved.`)
        .addFields(
            { name: 'Moved User:', value: '<@' + toMute.user.id + '>' + `\n(${toMute.user.id})`, inline: true},
            { name: 'Moderator:', value: '<@' + message.author.id + '>' + `\n(${message.author.id})`, inline: true },
        )
        .setTimestamp()
        .setFooter(`ID: ${toMute.user.id}`);

    logChannel.send(embed);
}
    }};*/