module.exports = {
    name: 'servericon',
    aliases: ['serveravatar'],
    category: 'Server',
    utilisation: '{prefix}servericon',
module: 'utility',
    execute(client, message) {
      const db1 = require("quick.db")
        db1.add(`commands_used`, 1)
        const Discord = require('discord.js')
        const embeduser = new Discord.MessageEmbed()
			.setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
			.setTitle('Server Icon')
			.setColor(0xADC5FF)
			.setImage(message.guild.iconURL({ dynamic: true, size: 4096 }))
			.setTimestamp()
			.setFooter(client.user.tag, client.user.avatarURL({ dynamic: true }));
		return message.channel.send(embeduser);
    }};