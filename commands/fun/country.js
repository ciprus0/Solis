module.exports = {
    name: 'country',
    aliases: [],
    category: 'Games',
    utilisation: '{prefix}country [country]',

    async execute(client, message, args) {
		const db1 = require("quick.db")
        db1.add(`commands_used`, 1)
        const Discord = require('discord.js')
        const axios = require('axios')
		const db = require('quick.db')
		const { PREFIX } = require('../../config');
        let prefix;
            let fetched = await db.fetch(`prefix_${message.guild.id}`);
    
            if (fetched === null) {
                prefix = PREFIX
            } else {
                prefix = fetched
            }
        if (!args.length) {
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
		let name = args.join(' ').toLowerCase();
		let url = `https://restcountries.eu/rest/v2/name/${name}`;
		if (name === 'usa' || name === 'united states') name = 'united states of america';
		if (name === 'india') url = `https://restcountries.eu/rest/v2/name/${name}?fullText=true`;
		const m = await message.channel.send('*Please Wait...*');

		axios({
			method: 'get',
			url: url,
		}).then(res => {
			res.data[0].flag = `https://www.countryflags.io/${res.data[0].alpha2Code}/shiny/64.png`;
			const data = res.data[0];
			const currencies = [];
			const languages = [];
			const regionalBlocs = [];
			for (let i = 0; i < data.currencies.length; i++) {
				currencies.push(data.currencies[i].name);
			}
			for (let i = 0; i < data.languages.length; i++) {
				languages.push(data.languages[i].name);
			}
			for (let i = 0; i < data.regionalBlocs.length; i++) {
				regionalBlocs.push(data.regionalBlocs[i].name);
			}

			const embed = new Discord.MessageEmbed()
				.setAuthor(data.name, data.flag)
				.setThumbnail(data.flag)
				.setColor(0x87B4E7)
				.addField('Country Information', `**• Name:** ${data.name}\n**• Top Level Domain:** ${data.topLevelDomain.join(', ')}\n**• Alpha 2 Code:** ${data.alpha2Code}\n**• Alpha 3 Code:** ${data.alpha3Code}\n**• Calling Codes:** +${data.callingCodes.join(', +')}\n**• Capital:** ${data.capital}\n**• Alt Spellings:** ${data.altSpellings.join(', ')}\n**• Region:** ${data.region}\n**• Sub Region:** ${data.subregion}\n**• Population:** ${data.population.toLocaleString()}`, true)
				.addField('Country Information 2', `**• Cioc:** ${data.cioc}\n**• Currencies:** ${currencies.join(', ')}\n**• Numeric Code:** ${data.numericCode}\n**• Native Name:** ${data.nativeName}\n**• Languages:** ${languages.join(', ')}\n**• Borders:** ${data.borders.join(', ')}\n**• Gini:** ${data.gini === null ? 'none' : data.gini}\n**• Area:** ${data.area.toLocaleString()}\n**• Demonym:** ${data.demonym}\n**• lat lng:** (${data.latlng.join(', ')})`, true)
				.addField('Regional Blocs', regionalBlocs.join(',\n'))
				.addField('Timezones', data.timezones.join(', '));

			m.delete();
			message.channel.send(embed);
		}).catch(() => {
			m.delete();
			message.channel.send('I couldn\'t find any information on that country.');
        })}};