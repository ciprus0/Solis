/*const { bot_prefix } = require('../config.json');
const { getMember } = require('../functions');
const prefixes = require('../database/prefix.json');
const log = require('../database/logging.json');
const logsetting = require('../database/logonoff.json');
const Discord = require('discord.js');
module.exports = {
    name: 'unmu11te',
    aliases: ['None'],
    category: 'Moderation',
    utilisation: '{prefix}unmute [mention | id | username] [reason]',

    async execute(client, message, args) {
		if(message.author.id !== '285528911545106432') return;
		const db1 = require("quick.db")
        db1.add(`commands_used`, 1)
if (!message.member.hasPermission('MANAGE_MESSAGES', { checkAdmin: true, checkOwner: true })) return 
		if (!message.guild.me.hasPermission('MANAGE_ROLES', { checkAdmin: true, checkOwner: true })) return message.channel.send('I don\'t have `MANAGE_ROLES` permission for me to be able to mute someone.').then(m => m.delete({ timeout: 5000 }));
message.delete()
		const toMute = getMember(message, args[0]);

		if (!args[0]) return message.channel.send(`The right syntax is \`${prefixes[message.guild.id]}unmute <mention | id | username> [reason]\`.`);
		if (!toMute) return message.channel.send('The user can\'t be found.');

		const role = message.guild.roles.cache.find(r => r.name === 'Muted');

		if (!role || !toMute.roles.cache.has(role.id)) return message.channel.send('This user is not muted!');

		if (!logsetting[message.guild.id]) {
			logsetting[message.guild.id] = {
				checker: 1,
			};
		}
		const values = logsetting[message.guild.id].checker;

		const reason = args.slice(1).join(' ');
		let res;
		if (!reason) {
			res = 'No reason given';
		}
		else {
			res = reason;
		}
        const embed5 = new Discord.MessageEmbed()
        .setAuthor('User Unmuted | ' + message.guild.name, message.guild.iconURL())
        .setDescription(`<:NB_IconPinUnread:790265429691072542> \`${toMute.user.tag}\` has been unmuted.\n**Moderator:** <@${message.author.id}>\n**Reason:** ${res}`)
        .setThumbnail(message.guild.iconURL())
		await toMute.roles.remove(role.id);
		message.channel.send(embed5);
toMute.send(`You have been unmuted in ` + message.guild.name + '. \n **Moderator:** <@' + message.author.id + '> \n **Reason:** ' + res)
		if (values === undefined) return;
		if (values === 0) return;
		if (values === 1) {
			if (!log) return;
			if (!log[message.guild.id]) return;
			const logChannel = message.guild.channels.cache.get(`${log[message.guild.id].channel}`);
			if(!logChannel) return;

			const embed = new Discord.MessageEmbed()
				.setAuthor('Unmuted', toMute.user.displayAvatarURL({ dynamic: true }))
				.setColor(0x93E787)
				.setDescription(`\`${toMute.user.tag}\` has been unmuted.`)
				.addFields(
                    { name: 'Unmuted User:', value: '<@' + toMute.user.id + '>' + `\n(${toMute.user.id})`, inline: true},
					{ name: 'Moderator:', value: '<@' + message.author.id + '>' + `\n(${message.author.id})`, inline: true },
					{ name: 'Reason:', value: res, inline: true },
				)
				.setTimestamp()
				.setFooter(`ID: ${toMute.user.id}`);

			logChannel.send(embed);
		}
    }};*/