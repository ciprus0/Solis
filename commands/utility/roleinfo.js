
module.exports = {
    name: 'roleinfo',
    aliases: ['None'],
    category: 'Server',
    utilisation: '{prefix}roleinfo [rolename]',
module: 'utility',
    execute(client, message, args) {
		const db1 = require("quick.db")
        db1.add(`commands_used`, 1)
        const Discord = require('discord.js')
        const role = args.join(' ').toLowerCase();
		if(!role) return message.reply('Specify a role!');
		const gRole = message.guild.roles.cache.get(role) || message.guild.roles.cache.find(r => r.name.toLowerCase().startsWith(role)) || message.mentions.roles.first();
		if(!gRole) return message.reply('Couldn\'t find that role.');


		message.guild.members.fetch().then(members => {
			const memberCount = members.filter(member => member.roles.cache.has(gRole.id)).size;

			const status = {
				false: 'No',
				true: 'Yes',
			};

			const roleemebed = new Discord.MessageEmbed()
				.setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
				.setTitle('Role Information')
				.setDescription(`**• ID:** ${gRole.id}\n**• Name:** ${gRole.name}\n**• Mention:** ${gRole}\n**• Hex:** ${gRole.hexColor.toUpperCase()}\n**• Members with this role:** ${memberCount}\n**• Position:** ${gRole.position}\n**• Hoisted status:** ${[gRole.hoist]}\n**• Mentionable:** ${status[gRole.mentionable]}\n**• Managed:** ${status[gRole.managed]}`)
				.setColor(0xADC5FF)
				.setThumbnail(message.guild.iconURL)
				.setTimestamp()
				.setFooter(client.user.tag, client.user.avatarURL({ dynamic: true }));

			message.channel.send(roleemebed);
		});
    }};