module.exports = {
    name: 'greyscale',
    aliases: ['None'],
    category: 'Image Manipulation',
    utilisation: '{prefix}greyscale [username | attachment | mention]',

    async execute(client, message, args) {
        const db1 = require("quick.db")
        db1.add(`commands_used`, 1)
        const { getMember } = require('../../functions');
        const Jimp = require('jimp');
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
        const image = message.attachments.first() || getMember(message, args.join(' ')).user.displayAvatarURL({ format: 'jpg', size: 4096 }) || message.author.displayAvatarURL({ format: 'jpg', size: 4096 });
		if (!image) {
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
		if (image === undefined) return message.channel.send('Oops sorry, I can\'t manipulate that image');
		await Jimp.read(image)
			.then(i => {
				return i
					.greyscale()
					.write('./images/greyscale.png');
			});

		const m = await message.channel.send('Please Wait...');
		message.channel.send({ files: ['./images/greyscale.png'] }).then(() => m.delete());
    }};