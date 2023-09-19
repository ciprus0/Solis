module.exports = {
    name: 'announce',
    aliases: ['None'],
    category: 'Server',
    utilisation: '{prefix}announce [ping channel]',
module: 'utility',
    async execute(client, message) {
		const db1 = require("quick.db")
        db1.add(`commands_used`, 1)
        const Discord = require('discord.js')
const channel = message.mentions.channels.first();
if (!channel || !message.guild.channels.cache.get(channel.id)) return message.channel.send('Please mention a valid #channel.');

		const embed = new Discord.MessageEmbed();
		embed.setColor('#36393F');

		await message.channel.send('Example Embed');
		const example = new Discord.MessageEmbed()
			.setAuthor('Author', 'https://i.imgur.com/wSTFkRM.png')
			.setThumbnail('https://i.imgur.com/wSTFkRM.png')
			.setColor('#36393F')
			.setImage('https://i.imgur.com/wSTFkRM.png')
			.setTitle('Title')
			.setDescription('Description')
			.setFooter('Footer', 'https://i.imgur.com/wSTFkRM.png');
		await message.channel.send(example);
		let authorText;
		let footerText;
		const filter = m => m.author.id === message.author.id;
		await setTimeout(function() {
			message.channel.send('Limit: 256 characters\nTime: 30 seconds\nPlease provide text for the `author` slot. Type `skip` if you want to leave this blank.');
		}, 1000);
		const author = await message.channel.awaitMessages(filter, {
			max: 1,
			time: 30000,
		});
		if (!author.size) {
			return message.channel.send('Timed out.');
		}
		if (author.first().content.toLowerCase() === 'skip') {
			message.channel.send('Skipped.');
		}
		else {
			authorText = author.first().content;
			if (authorText.length > 256) return message.channel.send('The character is exceeding 256 characters. Command stopped.');
			await message.channel.send('Please type what the `author icon` should be.\n`Server Icon`, `Solis Avatar`, `User Avatar`, or you can send any `attachment` (picture)\n\nType `Skip` to leave this blank.');
			const authorIcon = await message.channel.awaitMessages(filter, {
				max: 1,
				time: 30000,
			});
			if (!authorIcon.size) {
				return message.channel.send('Timed out.');
			}
			if (authorIcon.first().attachments.first()) {
				embed.setAuthor(authorText, authorIcon.first().attachments.first().url);
			}
			else if (authorIcon.first().content.toLowerCase() === 'server icon') {
				embed.setAuthor(authorText, message.guild.iconURL());
			}
			else if (authorIcon.first().content.toLowerCase() === 'Ranium avatar') {
				embed.setAuthor(authorText, client.user.avatarURL());
			}
			else if (authorIcon.first().content.toLowerCase() === 'user avatar') {
				embed.setAuthor(authorText, message.author.displayAvatarURL({ dynamic: true }));
			}
			else if (authorIcon.first().content.toLowerCase() === 'skip') {
				embed.setAuthor(authorText);
			}
			else {
				return message.inlineReply('You have provided the incorrect input. Please restart.');
			}
		}
		await message.channel.send('Limit: 256 characters\nTime: 30 seconds\nPlease provide text for the `title` slot. Type `skip` if you want to leave this blank.');
		const title = await message.channel.awaitMessages(filter, {
			max: 1,
			time: 30000,
		});
		if (!title.size) {
			return message.channel.send('Timed out.');
		}
		if (title.first().content.toLowerCase() === 'skip') {
			message.channel.send('Skipped.');
		}
		else {
			if (title.first().content.length > 256) return message.channel.send('The character is exceeding 256 characters. Process stopped. Please restart.');
			await message.channel.send('Do you have a link you want to put? Please send a link or type `skip` if you want to leave this blank.');
			const url = await message.channel.awaitMessages(filter, {
				max: 1,
				time: 30000,
			});
			if (!url.size) {
				return message.channel.send('Timed out.');
			}
			if (url.first().content.toLowerCase() === 'skip') {
				embed.setTitle(title.first().content);
				message.channel.send('Skipped.');
			}
			else {
				embed.setTitle(title.first().content);
				embed.setURL(url.first().content);
			}
		}

		await message.channel.send('Limit: 2048 characters\nTime: 5 minutes\nPlease provide text for the `description` slot. Type `skip` if you want to leave this blank.');
		const description = await message.channel.awaitMessages(filter, {
			max: 1,
			time: 300000,
		});
		if (!description.size) {
			return message.channel.send('Timed out.');
		}
		if (description.first().content === 'skip') {
			message.channel.send('Skipped');
		}
		else {
			if (description.first().content.length > 2048) return message.channel.send('The character is exceeding 2048 characters. Process stopped. Please restart.');
			embed.setDescription(description.first().content);
		}

		await message.channel.send(embed);
		await message.channel.send('Limit: 2048 characters\nTime: 30 seconds\nPlease provide text for the `footer` slot. Type `skip` if you want to leave this blank.');
		const footer = await message.channel.awaitMessages(filter, {
			max: 1,
			time: 30000,
		});
		if (!footer.size) {
			return message.channel.send('Timed out.');
		}
		if (footer.first().content.toLowerCase() === 'skip') {
			message.channel.send('Skipped.');
		}
		else {
			footerText = footer.first().content;
			if (footerText .length > 2048) return message.channel.send('The character is exceeding 2048 characters. Process stopped. Please restart.');
			await message.channel.send('Please type what the `footer icon` should be.\n`Server Icon`, `Solis Avatar`, `User Avatar` or you can send any `attachment` (picture).\n\nType `Skip` to leave this blank.');
			const footerIcon = await message.channel.awaitMessages(filter, {
				max: 1,
				time: 30000,
			});
			if (!footerIcon.size) {
				return message.channel.send('Timed out.');
			}
			if (footerIcon.first().attachments.first()) {
				embed.setFooter(footerText, footerIcon.first().attachments.first().url);
			}
			else if (footerIcon.first().content.toLowerCase() === 'server icon') {
				embed.setFooter(footerText, message.guild.iconURL());
			}
			else if (footerIcon.first().content.toLowerCase() === 'Ranium avatar') {
				embed.setFooter(footerText, client.user.avatarURL());
			}
			else if (footerIcon.first().content.toLowerCase() === 'user avatar') {
				embed.setFooter(footerText, message.author.displayAvatarURL({ dynamic: true }));
			}
			else if (footerIcon.first().content.toLowerCase() === 'skip') {
				embed.setFooter(footerText);
			}
			else {
				return message.channel.send('You have provided the incorrect input. Please restart.');
			}
		}

		await message.channel.send(embed);
		await message.channel.send('What image should be on the `thumbnail`?\n`Server Icon`, `Solis Avatar`, `User Avatar` or you can send any attachment (picture)\n\n Type`skip` if you want to leave this blank.');
		const thumbnail = await message.channel.awaitMessages(filter, {
			max: 1,
			time: 90000,
		});
		if (!thumbnail.size) {
			return message.channel.send('Timed out.');
		}
		if (thumbnail.first().attachments.first()) {
			embed.setThumbnail(thumbnail.first().attachments.first().url);
		}
		else if (thumbnail.first().content.toLowerCase() === 'server icon') {
			embed.setThumbnail(message.guild.iconURL());
		}
		else if (thumbnail.first().content.toLowerCase() === 'Ranium avatar') {
			embed.setThumbnail(client.user.avatarURL());
		}
		else if (thumbnail.first().content.toLowerCase() === 'user avatar') {
			embed.setThumbnail(message.author.displayAvatarURL({ dynamic: true }));
		}
		else if (thumbnail.first().content.toLowerCase() === 'skip') {
			message.channel.send('Skipped.');
		}
		else {
			return message.channel.send('You have provided the incorrect input. Please restart.');
		}

		await message.channel.send(embed);
		await message.channel.send('What image do you want to put?\nSend an attachment (picture) to set it or type `skip` if you want to leave this blank.');
		const image = await message.channel.awaitMessages(filter, {
			max: 1,
			time: 90000,
		});
		if (!image.size) {
			return message.channel.send('Timed out.');
		}
		if (image.first().attachments.first()) {
			embed.setImage(image.first().attachments.first().url);
		}
		else if (image.first().content.toLowerCase() === 'skip') {
			message.channel.send('Skipped.');
		}
		else {
			return message.channel.send('You have provided the incorrect input. Please restart.');
		}

		await message.channel.send(embed);
		await message.channel.send('Is this okay? (yes) (no)');
		const confirm = await message.channel.awaitMessages(filter, {
			max: 1,
			time: 30000,
		});
		if (!confirm.size) {
			return message.reply('Timed out.');
		}
		if (confirm.first().content.toLowerCase() === 'yes') {
			message.channel.send('Okay, I will announce this.');
			channel.send(embed).catch(() => message.channel.send('I am not able to send a message to that channel.'));
		}
		else if (confirm.first().content.toLowerCase() === 'no') {
			message.channel.send('Okay, I have deleted the announcement.');
		}
		else {
			await message.channel.send('Last try. Is this okay? (yes) (no)');
			const confirm2 = await message.channel.awaitMessages(filter, {
				max: 1,
				time: 30000,
			});
			if (!confirm2.size) {
				return message.reply('Timed out.');
			}
			if (confirm2.first().content.toLowerCase() === 'yes') {
				message.channel.send(`Alright. Sending it to ${channel}.`);
				channel.send(embed).catch(() => message.channel.send('I am not able to send a message to that channel.'));
			}
			else if (confirm2.first().content.toLowerCase() === 'no') {
				message.channel.send('Okay, I have deleted the announcement.');
			}
			else {
				message.channel.send('Okay, I have deleted the announcement.');
			}
		}

	}};