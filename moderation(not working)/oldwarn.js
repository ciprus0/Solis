/*const { bot_prefix } = require('../config.json');
const { getMember } = require('../functions');
const prefixes = require('../database/prefix.json');
const log = require('../database/logging.json');
const logsetting = require('../database/logonoff.json');
const Discord = require('discord.js');
module.exports = {
    name: 'war11n',
    aliases: ['None'],
    category: 'Moderation',
    utilisation: '{prefix}warn [mention | id | username] [reason]',

    async execute(client, message, args) {
		if(message.author.id !== '285528911545106432') return;
		const db1 = require("quick.db")
        db1.add(`commands_used`, 1)
		if(message.author.id !== '285528911545106432') return;
if (!message.member.hasPermission('MANAGE_MESSAGES', { checkAdmin: true, checkOwner: true })) return 
	

		const toMute = getMember(message, args[0]);

		if (!args[0]) return message.channel.send(`The right syntax is \`${prefixes[message.guild.id]}warn <mention | id | username> [reason]\`.`);
		if (!toMute) return message.channel.send('The user can\'t be found.');

	
message.delete()
	

		if (!logsetting[message.guild.id]) {
			logsetting[message.guild.id] = {
				checker: 1,
			};
		}
		const values = logsetting[message.guild.id].checker;

		const reason = args.slice(1).join(' ');
		let res;
		if (!reason) {
			return message.inlineReply('Say a reason for warning the user.');
		}
		else {
			res = reason;
		}
        const embed5 = new Discord.MessageEmbed()
        .setAuthor('User Warned | ' + message.guild.name, message.guild.iconURL())
        .setDescription(`<:NB_IconPinUnread:790265429691072542> \`${toMute.user.tag}\` has been warned.\n**Moderator:** <@${message.author.id}>\n**Reason:** ${res}`)
        .setThumbnail(message.guild.iconURL())
	
		message.channel.send(embed5);
toMute.send(`You have been warned in ` + message.guild.name + '. \n **Moderator:** <@' + message.author.id + '> \n **Reason:** ' + res)
		if (values === undefined) return;
		if (values === 0) return;
		if (values === 1) {
			if (!log) return;
			if (!log[message.guild.id]) return;
			const logChannel = message.guild.channels.cache.get(`${log[message.guild.id].channel}`);
			if(!logChannel) return;

			const embed = new Discord.MessageEmbed()
				.setAuthor('Warned', toMute.user.displayAvatarURL({ dynamic: true }))
				.setColor(0xFFE19D)
				.setDescription(`\`${toMute.user.tag}\` has been warned.`)
				.addFields(
                    { name: 'Warned User:', value: '<@' + toMute.user.id + '>' + `\n(${toMute.user.id})`, inline: true},
					{ name: 'Moderator:', value: '<@' + message.author.id + '>' + `\n(${message.author.id})`, inline: true },
					{ name: 'Reason:', value: res, inline: true },
				)
				.setTimestamp()
				.setFooter(`ID: ${toMute.user.id}`);

			logChannel.send(embed);
		}
    }};*/