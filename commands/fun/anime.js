module.exports = {
    name: 'anime',
    aliases: ['None'],
    category: 'Images',
    utilisation: '{prefix}anime',

    async execute(client, message, args) {
		const db1 = require("quick.db")
        db1.add(`commands_used`, 1)
        const axios = require('axios')
const Discord = require('discord.js')
const reddit = ['animegifs', 'anime'];
		const random = Math.floor(Math.random() * reddit.length);

		axios({
			method: 'get',
			url: `https://www.reddit.com/r/${reddit[random]}/hot.json`,
		}).then(res => {
			const data = [];
			for (let i = 0; i < res.data.data.children.length; i++) {
				if (res.data.data.children[i].data.over_18 === false && res.data.data.children[i].data.is_video === false) {
					data.push(res.data.data.children[i].data);
				}
			}
			const rand = Math.floor(Math.random() * data.length);
			const result = data[rand];
			const embed = new Discord.MessageEmbed()
				.setAuthor(`By ${result.author} - `, result.all_awardings.length > 0 ? result.all_awardings[Math.floor(Math.random() * result.all_awardings.length)].icon_url : '')
				.setTitle(result.title)
				.setURL(`https://www.reddit.com${result.permalink}`)
				.setImage(result.url)
				.setFooter(`⬆️ ${result.ups} | 💬 ${result.num_comments} | 🏅 ${result.total_awards_received}`);

			message.channel.send(embed);
		}).catch(err => message.channel.send(`An error occured \`${err}\``));
    }}