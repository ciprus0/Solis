module.exports = {
    name: 'alignment',
    aliases: [],
    category: 'Games',
    utilisation: '{prefix}alignment',

    async execute(client, message, args) {
		const db1 = require("quick.db")
        db1.add(`commands_used`, 1)
const Discord = require('discord.js')
const alignments = ['Lawful Good', 'Neutral Good', 'Chaotic Good', 'Lawful Neutral', 'True Neutral', 'Chaotic Neutral', 'Lawful Evil', 'Neutral Evil', 'Chaotic Evil'];
		const id = parseInt(message.author.id);
		const choice = id % alignments.length;
		const embed = new Discord.MessageEmbed()
			.setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
			.setColor(client.color)
			.setDescription(`📜 ${message.member.displayName}, you are **${alignments[choice]}**!`)
			.setTimestamp()
			.setFooter(client.user.tag, client.user.avatarURL({ dynamic: true }));

		message.inlineReply(embed);

    }};