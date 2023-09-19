module.exports = {
    name: 'comment',
    aliases: ['None'],
    category: 'Image Manipulation',
    utilisation: '{prefix}comment [username | id | mention ] text',

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
        if (!args[0]) {
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
		if (!args[1]) {
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
		const image = getMember(message, args[0]).user.displayAvatarURL({ format: 'jpg', size: 4096 }) || message.author.displayAvatarURL({ format: 'jpg', size: 4096 });
		if (!image) return message.channel.send('User not found.');
		const username = getMember(message, args[0]).displayName || message.member.displayName;
		const m = await message.channel.send('*Please wait..*');
		const comment = args.slice(1).join(' ');
		console.log(comment);
		const url = `https://some-random-api.ml/canvas/youtube-comment?avatar=${image}&username=${username}&comment=${comment}`;
		const attachment = new Discord.MessageAttachment(await encodeURI(url), 'youtube.png');
		message.channel.send(attachment).then(() => m.delete());
    }};