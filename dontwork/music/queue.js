module.exports = {
    name: 'queue',
    aliases: ['q'],
    category: 'Music',
    utilisation: '{prefix}queue',
module: 'music',
    execute(client, message) {
        const db1 = require("quick.db")
        db1.add(`commands_used`, 1)
        if (!message.member.voice.channel) {



             message.channel.send(`${client.emotes.error} - You're not in a voice channel !`)
             return
        };




        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) {



             message.channel.send(`${client.emotes.error} - You are not in the same voice channel !`)
             return
        };

        const queue = client.player.getQueue(message);

        if (!client.player.getQueue(message)) {


             message.channel.send(`${client.emotes.error} - No songs currently playing !`)
             return
        };




        const Discord = require('discord.js')
        const embed = new Discord.MessageEmbed()

        message.channel.send(`**Server queue - ${message.guild.name} ${client.emotes.queue} ${client.player.getQueue(message).loopMode ? '(looped)' : ''}**\nNow Playing : ${queue.playing.title} | ${queue.playing.author}\n\n` + (queue.tracks.map((track, i) => {
            return `**${i + 1}** - ${track.title} | ${track.author} (requested by : ${track.requestedBy.username})`
        }).slice(0, 5).join('\n') + `\n\n${queue.tracks.length > 5 ? `And **${queue.tracks.length - 5}** other songs...` : `In the playlist **${queue.tracks.length}** song(s)...`}`));
    },
};