module.exports = {
    name: 'skip',
    aliases: ['sk'],
    category: 'Music',
    utilisation: '{prefix}skip',
module: 'music',
    execute(client, message) {
        const db1 = require("quick.db")
        db1.add(`commands_used`, 1)
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - You're not in a voice channel !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - You are not in the same voice channel !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - No music currently playing !`);

        const success = client.player.skip(message);

        if (success) message.channel.send(`${client.emotes.success} - The current music has just been **skipped** !`);
    },
};