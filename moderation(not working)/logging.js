/*const fs = require('fs');
const Discord = require('discord.js');

module.exports = {
    name: 'logs',
    aliases: ['logging', 'log'],
    category: 'Moderation',
    utilisation: '{prefix}logs',

    async execute(client, message, args) {
		if(message.author.id !== '285528911545106432') return;
		const db1 = require("quick.db")
        db1.add(`commands_used`, 1)
        const prefix = '$';
		const option = args.join(' ');
		if (!option) {
			const embed1 = new Discord.MessageEmbed()
				.setAuthor(`${client.user.username} Logging`, client.user.displayAvatarURL({ dynamic: true }))
				.setColor('RANDOM')
				.setDescription(`
**Proper Usage:**
• ${prefix}logging set \`#tagchannel\`
• ${prefix}logging on
• ${prefix}logging off
**Example:**
• ${prefix}logging set \`#mod-log\`
**After do that, do again:**
• ${prefix}logging on
`)
				.setFooter('Logging Announcement')
				.setTimestamp();
			message.channel.send(embed1);
		}
		else if (option.match('set')) {
			const channel = JSON.parse(fs.readFileSync('./database/logging.json', 'utf8'));
			if (!message.member.hasPermission('MANAGE_GUILD', { checkAdmin: true, CheckOwner: true })) return message.reply(`**${message.author.username}**, Sorry, You need \`Manage Server\` permission to use this command!`);
			const inputmessage = message.mentions.channels.first();
			if (!inputmessage) return message.channel.send(`**${message.author.username}**, The right syntax is \`${prefix}logging set <channel>\`.`);
			if (!message.guild.me.permissionsIn(inputmessage).has('SEND_MESSAGES')) return message.channel.send('I do not have a permission to send a message in that channel.');
			if (args[0]) {
				channel[message.guild.id] = {
					channel: inputmessage.id,
				};
				fs.writeFile('./database/logging.json', JSON.stringify(channel, null, 2), (err) => {
					if (err) console.log(err);
				});

				const embed2 = new Discord.MessageEmbed()
					.setColor('RANDOM')
					.setDescription(`Logging channel set to: ${inputmessage}`)
					.setTimestamp().setFooter('Logging channel', client.user.displayAvatarURL({ dynamic: true }));
				message.channel.send(embed2);
			}
		}

		if (option.match('on')) {
			if (!message.member.hasPermission('MANAGE_GUILD', { checkAdmin: true, CheckOwner: true })) return message.reply(`**${message.author.username}**, Sorry, You need \`Manage Server\` permission to use this command!`);
			const welcomesetting = JSON.parse(fs.readFileSync('./database/logonoff.json', 'utf8'));
			welcomesetting[message.guild.id] = {
				checker: 1,
			};
			fs.writeFile('./database/logonoff.json', JSON.stringify(welcomesetting, null, 2), (err) => {
				console.error(err);
			});
			const embed3 = new Discord.MessageEmbed()
				.setColor('RANDOM')
				.setDescription('Logging has been set **on**.')
				.setTimestamp()
				.setFooter('Logging enable', client.user.displayAvatarURL({ dynamic: true }));

			message.channel.send(embed3);
		}
		if (option.match('off')) {
			if (!message.member.hasPermission('MANAGE_GUILD', { checkAdmin: true, CheckOwner: true })) return message.reply(`**${message.author.username}**, Sorry, You need \`Manage Server\` permission to use this command!`);
			const welcomesetting = JSON.parse(fs.readFileSync('./database/logonoff.json', 'utf8'));

			welcomesetting[message.guild.id] = {
				checker: 0,
			};
			fs.writeFile('./database/logonoff.json', JSON.stringify(welcomesetting, null, 2), (err) => {
				console.error(err);
			});
			const embed4 = new Discord.MessageEmbed()
				.setColor('RANDOM')
				.setDescription('Logging has been set **off**.')
				.setTimestamp()
				.setFooter('Logging disable', client.user.displayAvatarURL({ dynamic: true }));

			message.channel.send(embed4);
		}
    }};*/