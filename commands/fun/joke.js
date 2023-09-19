const Discord = require('discord.js');
const axios = require('axios');
module.exports = {
    name: 'joke',
    aliases: [],
    category: 'Games',
    utilisation: '{prefix}joke',

    async execute(client, message, args) {
		const db1 = require("quick.db")
        db1.add(`commands_used`, 1)
        axios({
			method: 'get',
			url: 'https://official-joke-api.appspot.com/jokes/random',
		}).then(res => {
			const embed = new Discord.MessageEmbed()
				.setAuthor(`${message.author.username}'s joke`, client.user.avatarURL())
				.setDescription(`${res.data.setup}\n${res.data.punchline}`)
				.setColor('ADC5FF')
				.setTimestamp();

			message.channel.send(embed);
		}).catch(err => message.channel.send(`An error occurred \`${err}\``));
    }};