module.exports = {
    name: 'nowplaying',
    aliases: ['np'],
    category: 'Music',
    utilisation: '{prefix}nowplaying',
module: 'music', 
    execute(client, message) {
        const db1 = require("quick.db")
        db1.add(`commands_used`, 1)
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - You're not in a voice channel !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - You are not in the same voice channel !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - No music currently playing !`);

        const track = client.player.nowPlaying(message);
        const filters = [];

        Object.keys(client.player.getQueue(message).filters).forEach((filterName) => client.player.getQueue(message).filters[filterName]) ? filters.push(filterName) : false;

        const Discord = require('discord.js')
        const embed = new Discord.MessageEmbed()
        .setDescription(`[${track.title}](${track.url})` + `\n\n` + `${client.player.createProgressBar(message, { timecodes: true })}`)
        .setThumbnail(`${track.thumbnail}`)
        .setColor(0xADC5FF)
        message.channel.send(embed);
    },
};


