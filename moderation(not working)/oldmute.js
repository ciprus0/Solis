/*const Discord = require('discord.js')
const { getMember } = require('../functions');
const log = require('../database/logging.json');
const logsetting = require('../database/logonoff.json');
const moderation = require('../database/moderation.json');
const ms = require('ms');
const fs = require('fs');
module.exports = {
    name: 'mut11e',
    aliases: ['None'],
    category: 'Moderation',
    utilisation: '{prefix}mute [mention | id | username] [duration] [reason]',

    async execute(client, message, args) {
		
		const db1 = require("quick.db")
        db1.add(`commands_used`, 1)
		if(message.author.id !== '285528911545106432') return;
        if (!message.member.hasPermission('MANAGE_MESSAGES', { checkAdmin: true, checkOwner: true })) return message.channel.send('Sorry, you don\'t have `KICK_MEMBERS` permission to use this!').then(m => m.delete({ timeout: 5000 }));
		if (!message.guild.me.hasPermission('MANAGE_ROLES', { checkAdmin: true, checkOwner: true })) return message.channel.send('I don\'t have `MANAGE_ROLES` permission for me to be able to mute someone.').then(m => m.delete({ timeout: 5000 }));
message.delete()
		const tomute = getMember(message, args[0]);

		if (!tomute) return message.channel.send(`The right syntax is $mute <mention | id | username> <duration> [reason]\`.`);
		if (tomute.hasPermission('KICK_MEMBERS', { checkAdmin: true, checkOwner: true })) return message.channel.send('I cant mute this user');
		if (tomute.user.id === message.author.id) return message.channel.send('You can\'t mute yourself!');
		let muterole = message.guild.roles.cache.find(r => r.name === 'Muted');

		if (!logsetting[message.guild.id]) {
			logsetting[message.guild.id] = {
				checker: 1,
			};
		}
		const values = logsetting[message.guild.id].checker;


		if (!muterole) {
			try{
				muterole = await message.guild.roles.create({
					data: {
						name: 'Muted',
						color: '#000000',
						permissions:[],
					},
				});
				message.guild.channels.cache.forEach(async (channel) => {
					await channel.overwritePermissions(muterole, {
						SEND_MESSAGES: false,
						ADD_REACTIONS: false,
					});
				});
			}
			catch(e) {
				console.log(e.stack);
			}
		}

		const mutetime = args[1];
		if (!args[1]) return message.channel.send('You didn\'t specify a duration!');
		const splitArgs = mutetime.split('');
		if (isNaN(splitArgs[0])) return message.channel.send('please specify the correct duration. For example, 10m, 1h');


		const reason = args.slice(2).join(' ');
		let res;
		if (!reason) {
			res = 'No reason given';
		}
		else {
			res = reason;
		}

		const timeOut = ms(mutetime);
		if (!moderation[tomute.user.id]) {
			moderation[tomute.user.id] = {
				mute: null,
			};
		}

		const muteTime = await moderation[tomute.user.id].mute;
        const embed5 = new Discord.MessageEmbed()
        .setAuthor('User Muted | ' + message.guild.name, message.guild.iconURL())
        .setDescription(`<:NB_IconPinUnread:790265429691072542> \`${tomute.user.tag}\` has been muted.\n**Time:** ${ms(ms(mutetime))}\n**Reason:** ${res}`)
        .setThumbnail(message.guild.iconURL())
		if ((muteTime !== null && timeOut - (Date.now() - muteTime) > 0) || tomute.roles.cache.has(muterole.id)) return message.channel.send('This user has already been muted.');
		moderation[tomute.user.id].mute = Date.now();
		await (tomute.roles.add(muterole.id));
		message.channel.send(embed5);
		fs.writeFile('./database/moderation.json', JSON.stringify(moderation, null, 2), (err) => {
			if (err) return message.channel.send(`An error occurred: \`${err}\``);
		});

		setTimeout(function() {
			tomute.roles.remove(muterole.id);
            tomute.send(`You have been unmuted in ` + message.guild.name + '. \n **Moderator:** <@' + message.author.id + '> \n **Reason:** Mute duration ended')
			if (values === undefined) return;
			if (values === 0) return;
			if (values === 1) {
				if (!log) return;
				if (!log[message.guild.id]) return;
				const logChannel = message.guild.channels.cache.get(`${log[message.guild.id].channel}`);
				if(!logChannel) return;

				const embed = new Discord.MessageEmbed()
					.setAuthor('Unmute [AUTO]', tomute.user.displayAvatarURL({ dynamic: true }))
					.setDescription(`\`${tomute.user.tag}\` has been unmuted.`)
					.addFields(
                        { name: 'Unmuted User', value: '<@' + tomute.user.id + `>\n(${tomute.user.id})`, inline: true},
						{ name: 'Moderator:', value: `<@${client.user.id}>` + `\n(${client.user.id})`, inline: true},
						{ name: 'Reason:', value: 'Mute duration ended', inline: true },
					)
					.setColor(0x93E787)
					.setTimestamp()
					.setFooter(`ID: ${tomute.user.id}`);

				logChannel.send(embed);
			}
		}, timeOut);

		if (values === undefined) return;
		if (values === 0) return;
		if (values === 1) {
			if (!log) return;

			const logChannel = message.guild.channels.cache.get(`${log[message.guild.id].channel}`);
			if(!logChannel) return;

			const embed = new Discord.MessageEmbed()
				.setAuthor('Muted', tomute.user.displayAvatarURL({ dynamic: true }))
				.setDescription(`\`${tomute.user.tag}\` has been muted.`)
				.addFields(
                    { name: 'Muted User:', value: `<@${tomute.user.id}>` + `\n(${tomute.user.id})`, inline: true },
					{ name: 'Moderator:', value: `<@${message.author.id}>` + `\n(${message.author.id})`, inline: true },
					{ name: 'Duration:', value: ms(ms(mutetime)), inline: true },
					{ name: 'Reason:', value: res, inline: true },
				)
				.setColor(0xFFBD26)
				.setTimestamp()
				.setFooter(`ID: ${tomute.user.id}`);
                tomute.send(`You have been muted in ` + message.guild.name + '. \n **Moderator:** <@' + message.author.id + '> \n **Reason:** ' + res)
			logChannel.send(embed);
		}
    }};*/