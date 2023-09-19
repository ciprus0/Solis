module.exports = {
    name: 'roll',
    aliases: ['dice'],
    category: 'Games',
    utilisation: '{prefix}roll [number of dice] [sides per dice]',

    async execute(client, message, args) {
		const db1 = require("quick.db")
        db1.add(`commands_used`, 1)
        const Discord = require('discord.js')
		const db = require('quick.db')
		const { PREFIX } = require('../../config');
        let prefix;
            let fetched = await db.fetch(`prefix_${message.guild.id}`);
    
            if (fetched === null) {
                prefix = PREFIX
            } else {
                prefix = fetched
            }
        const dice = args[0];
		const sides = args[1];

		if ((isNaN(dice)) || (isNaN(sides))) {
		const args1 = message.content.slice(prefix.length).trim().split(/ +/g);
		const command = args1.shift().toLowerCase();
		const cmd = client.commands.get(command) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command));
  return message.inlineReply({
			embed: {
				color: 0xADC5FF,
				title: `Command: ${command}`,
				footer: { text: 'Created by Tim' },
				fields: [
					{ name: 'Name', value: cmd.name, inline: true },
					{ name: 'Category', value: cmd.category, inline: true },
					{ name: 'Aliase(s)', value: cmd.aliases.length < 1 ? 'None' : cmd.aliases.join(', '), inline: true },
					{ name: 'Usage', value: cmd.utilisation.replace('{prefix}', prefix), inline: true },
				],
				timestamp: new Date(),
				description: 'Find information on the command provided.\nMandatory arguments `[]`, optional arguments `<>`.',
			}
		})}
		if (dice > 15 || sides > 120) {
		const args1 = message.content.slice(prefix.length).trim().split(/ +/g);
		const command = args1.shift().toLowerCase();
		const cmd = client.commands.get(command) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command));
  return message.inlineReply({
			embed: {
				color: 0xADC5FF,
				title: `Command: ${command}`,
				footer: { text: 'Created by Tim' },
				fields: [
					{ name: 'Name', value: cmd.name, inline: true },
					{ name: 'Category', value: cmd.category, inline: true },
					{ name: 'Aliase(s)', value: cmd.aliases.length < 1 ? 'None' : cmd.aliases.join(', '), inline: true },
					{ name: 'Usage', value: cmd.utilisation.replace('{prefix}', prefix), inline: true },
				],
				timestamp: new Date(),
				description: 'Find information on the command provided.\nMandatory arguments `[]`, optional arguments `<>`.',
			}
		})}
		if (dice <= 0 || sides <= 0) {
		const args1 = message.content.slice(prefix.length).trim().split(/ +/g);
		const command = args1.shift().toLowerCase();
		const cmd = client.commands.get(command) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command));
  return message.inlineReply({
			embed: {
				color: 0xADC5FF,
				title: `Command: ${command}`,
				footer: { text: 'Created by Tim' },
				fields: [
					{ name: 'Name', value: cmd.name, inline: true },
					{ name: 'Category', value: cmd.category, inline: true },
					{ name: 'Aliase(s)', value: cmd.aliases.length < 1 ? 'None' : cmd.aliases.join(', '), inline: true },
					{ name: 'Usage', value: cmd.utilisation.replace('{prefix}', prefix), inline: true },
				],
				timestamp: new Date(),
				description: 'Find information on the command provided.\nMandatory arguments `[]`, optional arguments `<>`.',
			}
		})}

		function roll(dice, sides) {
			const results = [];

			for (i = 0; i < dice; i++) {
				results.push(Math.floor((Math.random() * sides) + 1));
			}
			console.log(dice + ' dice and sides ' + sides);
			resDel = results.join(', ');
			newResult = resDel.toString();
			newResults = newResult.replace(/,(?=[^,]*$)/, ' and');

			const embed = new Discord.MessageEmbed()
				.setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
				.setTimestamp()
				.setFooter(client.user.tag, client.user.avatarURL({ dynamic: true }))
				.setColor('0x87B4E7')
				.setDescription('You rolled:  ' + newResults);

			message.channel.send(embed);
		}
		roll(dice, sides);
    }};